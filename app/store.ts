import { Question } from '@/static/questions';
import { create } from 'zustand';

type Game =  {
  questions: Question[];
  [index: number]: Question;

};

interface State {
  round: number;
  maxRound: number;
  score: number;
  selectedAnswer: string;
  game: Game;
}

type Action = {
  setSelectedAnswer: (selectedAnswer: State['selectedAnswer']) => void;
  updateRound: () => void;
  updateGame: (game: State['game']) => void;
  addScore: (value: State['score']) => void;
  setMaxRound: (value: State['maxRound']) => void;
};

export const useGameStore = create<State & Action>((set) => ({
  round: 1,
  maxRound: 10,
  selectedAnswer: '',
  score: 0,
  game: {
    questions: [],
  },

  setSelectedAnswer: (selectedAnswer) => set({ selectedAnswer }),
  updateRound: () => set((state) => ({ round: state.round + 1 })),
  updateGame: (game) => set({ game }),
  addScore: (value) => set((state) => ({ score: state.score + value })),
  setMaxRound: (value) => set({ maxRound: value }),

}));

