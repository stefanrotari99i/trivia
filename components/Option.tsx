interface OptionProps {
  option: string;
  disabled: boolean | undefined;
  isCorrect: boolean | null;
  selectedAnswer: string;
  handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentRound: number;
  game: any;
}

const OptionItem = ({
  option,
  disabled,
  isCorrect,
  selectedAnswer,
  handleSelect,
  currentRound,
  game,
}: OptionProps) => {
  return (
    <div className="relative flex h-[50px] w-64 items-center justify-center">
      <input
        type="radio"
        id="radio"
        name="answer"
        value={option}
        onChange={handleSelect}
        className="peer z-10 h-full w-full cursor-pointer opacity-0"
        disabled={disabled}
      />
      <div
        className={`absolute h-full border-2 border-gray-500  font-bold text-lg text-gray-400 peer-checked:!text-black flex items-center justify-center w-full
    peer-disabled:opacity-30 peer-disabled:cursor-not-allowed peer-disabled:pointer-events-none
    p-4 duration-300 peer-checked:border-yellow-500 peer-checked:bg-yellow-500
    peer-hover:border-white  peer-hover:text-white
    ${
      isCorrect === false &&
      option === selectedAnswer &&
      "!border-red-500 !bg-red-500 !text-black !opacity-100"
    }
    ${
      isCorrect === true &&
      option === selectedAnswer &&
      "!border-green-500 !bg-green-500 !text-black !opacity-100"
    }
    ${
      option === game[currentRound - 1]?.answer &&
      disabled === true &&
      "!border-green-500 !bg-green-500 !text-black !opacity-100"
    }
    `}
      >
        {option}
      </div>
    </div>
  );
};

export default OptionItem;
