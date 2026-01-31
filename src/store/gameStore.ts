import { create } from "zustand";

export interface Question {
  q: string;
  a: string;
}

export type APIResponse = { data?: Question[] | undefined; success: boolean };

interface GameStore {
  arrayIndex: number;
  answer: string;
  points: number;
  secondsLeft: number;
  questions: Array<Question | undefined>;
  currentQuestion: Question;
  showSummary: boolean;
  showInstructions: boolean;
  showConfirmation: boolean;
  showCorrectAnswer: boolean;
  showError: boolean;
  increaseArrayIndex: () => void;
  increaseCorrectAnswers: () => void;
  decreaseSeconds: () => void;
  resetPoints: (arg: number) => void;
  resetSeconds: (arg: number) => void;
  updateAnswer: (arg: string) => void;
  initializeQuestions: (arg: Array<Question> | undefined) => void;
  setCurrentQuestion: (arg: number) => void;
  setShowSummary: (arg: boolean) => void;
  setShowInstructions: (arg: boolean) => void;
  setShowConfirmation: (arg: boolean) => void;
  setShowCorrectAnswer: (arg: boolean) => void;
  setShowError: (arg: boolean) => void;
  resetArrayIndex: (arg: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  arrayIndex: 0,
  answer: "",
  points: 0,
  secondsLeft: 10,
  questions: [],
  currentQuestion: {
    q: "",
    a: "",
  },
  showSummary: false,
  showInstructions: false,
  showConfirmation: false,
  showCorrectAnswer: false,
  showError: false,
  increaseArrayIndex: () =>
    set((state) => ({ arrayIndex: state.arrayIndex + 1 })),
  increaseCorrectAnswers: () => set((state) => ({ points: state.points + 1 })),
  decreaseSeconds: () =>
    set((state) => ({ secondsLeft: state.secondsLeft - 1 })),
  resetPoints: (number) => set({ points: number }),
  resetSeconds: (number) => set({ secondsLeft: number }),
  updateAnswer: (text) => set({ answer: text }),
  initializeQuestions: (array) => set({ questions: array }),
  setCurrentQuestion: (number) =>
    set((state) => ({ currentQuestion: state.questions[number] })),
  setShowSummary: (arg) => set({ showSummary: arg }),
  setShowInstructions: (arg) => set({ showInstructions: arg }),
  setShowConfirmation: (arg) => set({ showConfirmation: arg }),
  setShowCorrectAnswer: (arg) => set({ showCorrectAnswer: arg }),
  setShowError: (arg) => set({ showError: arg }),
  resetArrayIndex: (number) => set({ arrayIndex: number }),
}));
