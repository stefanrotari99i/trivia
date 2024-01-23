"use client";

import { Suspense, useEffect, useState } from "react";

import { useGameStore } from "@/app/store";
import OptionItem from "@/components/Option";
import { questions } from "@/static/questions";
import { toTimerFormat } from "@/utils/timer";

export default function Home() {
  // Get game state
  const {
    game,
    updateGame: setGame,
    round: currentRound,
    updateRound: nextRound,
    selectedAnswer,
    setSelectedAnswer: updateSelectedAnswer,
    addScore,
    setMaxRound,
  } = useGameStore((state) => state);

  // Local state
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [disabled, setDisabled] = useState<boolean | undefined>(false);
  const [timer, setTimer] = useState<number>(2);
  // Select answer handler
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSelectedAnswer(e.target.value);
  };

  // Set game questions
  useEffect(() => {
    setGame(questions as any);
    setMaxRound(questions.length);
    timer <= 0 && nextRound();
  }, []);

  // Timer
  // useEffect(() => {
  //   if (timer <= 0) {
  //     setDisabled(true);
  //     setIsCorrect(false);
  //     setTimer(30);
  //     setTimeout(() => {
  //       addScore(-50);
  //       handleNextRound();
  //     }, 1000);
  //     return;
  //   }
  //   const interval = setInterval(() => {
  //     setTimer((prev) => prev - 1);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [timer]);

  // Handle submit answer
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Prevent submit if no answer selected
    if (currentRound > questions?.length || selectedAnswer === "") {
      return;
    }

    // Check if answer is correct
    const isAnswerCorrect = game[currentRound - 1]?.answer === selectedAnswer;

    // Disable form and set correct answer
    setDisabled(true);
    setIsCorrect(isAnswerCorrect);
    setTimer(30);
    // Add score
    setTimeout(() => {
      if (isAnswerCorrect) {
        addScore(100);
      } else {
        addScore(-50);
      }
      // Next round
      handleNextRound();
      // Reset form
      updateSelectedAnswer("");
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  // Handle next round
  const handleNextRound = () => {
    nextRound();
    setIsCorrect(null);
    setDisabled(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <Suspense fallback={<div>Loading...</div>}>
        <h2 className="text-8xl font-bold max-w-screen-md mb-6 text-center tracking-widest text-gray-300">
          {toTimerFormat(timer)}
        </h2>
        <h1 className="text-5xl font-bold max-w-screen-md text-center tracking-wide text-gray-300">
          {game[currentRound - 1]?.question}
        </h1>
        <p className="text-md font-bold max-w-screen-md text-center tracking-widest text-gray-500 mt-2 mb-2">
          Выберите правильный ответ из предложенных вариантов.
        </p>
        <form
          className="mt-8 grid grid-cols-2 gap-4"
          onSubmit={handleSubmit}
          autoComplete="off"
          aria-disabled={disabled}
        >
          {game[currentRound - 1]?.options?.map((option: any) => (
            <OptionItem
              key={option}
              option={option}
              disabled={disabled}
              isCorrect={isCorrect}
              selectedAnswer={selectedAnswer}
              handleSelect={handleSelect}
              currentRound={currentRound}
              game={game}
            />
          ))}
          <button
            className="col-span-2 bg-yellow-500 text-black font-bold text-lg py-2 px-4 disabled:opacity-30 disabled:cursor-not-allowed"
            type="submit"
            disabled={selectedAnswer === ""}
          >
            Ответить
          </button>
        </form>
      </Suspense>
    </main>
  );
}
