import { create } from "zustand";

interface Question {
  q: string;
  a: string;
}

interface GameState {
  questions: Question[];
  currentQuestion: Question | null;
  questionNumber: number;
  answer: string;
  timeLeft: number;
  correctAnswers: number;
  showCorrectAnswer: boolean;
  showSummary: boolean;
  showAttention: boolean;
  showError: boolean;
  showInstructions: boolean;
  showWrongAnswer: boolean

  // Actions
  initializeGame: (allQuestions: Question[]) => void;
  setAnswer: (val: string) => void;
  decreaseTime: () => void;
  nextQuestion: () => void;
  increaseCorrectAnswers: () => void;
  setShowCorrectAnswer: (val: boolean) => void;
  setShowAttention: (val: boolean) => void;
  setShowSummary: (val: boolean) => void;
  setShowError: (val: boolean) => void;
  setShowInstructions: (val: boolean) => void;
  setShowWrongAnswer: (val: boolean) => void
}

export const useGameStore = create<GameState>((set) => ({
  questions: [],
  currentQuestion: null,
  questionNumber: 1,
  answer: "",
  timeLeft: 10,
  correctAnswers: 0,
  showCorrectAnswer: false,
  showSummary: false,
  showAttention: false,
  showError: false,
  showInstructions: false,
  showWrongAnswer: false,

  initializeGame: (allQuestions) => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);
    const firstQuestion = selected.shift();

    set({
      questions: selected,
      currentQuestion: firstQuestion || null,
      questionNumber: 1,
      answer: "",
      timeLeft: 10,
      correctAnswers: 0,
      showSummary: false,
      showCorrectAnswer: false,
      showWrongAnswer: false,
    });
  },

  setAnswer: (val) => set({ answer: val }),

  decreaseTime: () =>
    set((state) => {
      if (state.timeLeft !== 0) return {
        timeLeft: state.timeLeft - 1
      }
      return {
        showSummary: true,
        showWrongAnswer: true,
      }
    }),

  increaseCorrectAnswers: () =>
    set((state) => ({
      correctAnswers: state.correctAnswers + 1,
    })),

  nextQuestion: () =>
    set((state) => {
      const remaining = [...state.questions];
      const next = remaining.shift();

      if (!next) {
        return { showSummary: true, showCorrectAnswer: false, answer: "" };
      }

      return {
        questions: remaining,
        currentQuestion: next,
        questionNumber: state.questionNumber + 1,
        answer: "",
        timeLeft: 10,
        showCorrectAnswer: false,
      };
    }),

  setShowCorrectAnswer: (val) => set({ showCorrectAnswer: val }),
  setShowAttention: (val) => set({ showAttention: val }),
  setShowSummary: (val) => set({ showSummary: val }),
  setShowError: (val) => set({ showError: val }),
  setShowInstructions: (val) => set({ showInstructions: val }),
  setShowWrongAnswer: (val) => set({ showWrongAnswer: val })
}));
