"use client";

import { useGameStore } from "@/app/store";

const Header = () => {
  const { score, round, maxRound } = useGameStore((state) => state);
  return (
    <header className="fixed top-0 left-0 w-full h-10 bg-green-900 z-10">
      <div className="w-fit px-20 py-4 mx-auto text-white header-content bg-green-900 relative z-20">
        <p className="text-md font-medium max-w-screen-md text-center tracking-widest text-gray-300">
          Вопрос {round} из {maxRound}
        </p>
        <p className="text-3xl font-bold max-w-screen-md text-center tracking-widest text-yellow-500">
          Счет: {score}
        </p>
      </div>
    </header>
  );
};

export default Header;
