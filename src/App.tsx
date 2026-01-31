import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IntroView } from "./components/views/IntroView";
import { GameView } from "./components/views/GameView";
import { InstructionsModal } from "./components/modals/InstructionsModal";
import { useGameStore } from "./store/gameStore";

function App() {
  const showInstructions = useGameStore((state) => state.showInstructions);

  return (
    <>
      <div className="min-h-[100dvh] flex flex-col overflow-hidden text-white">
        <Header />
        <main className="flex-grow flex flex-col justify-end sm:justify-center px-6 pb-10">
          <Router>
            <Routes>
              <Route path="/" element={<IntroView />} />
              <Route path="/game" element={<GameView />} />
            </Routes>
          </Router>
        </main>
        <Footer />
      </div>
      {showInstructions && <InstructionsModal />}
    </>
  );
}

export default App;
