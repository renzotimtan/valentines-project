import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import JSConfetti from "js-confetti";
import { useState } from "react";
import CuteButton from "./CuteButton";

export default function Jigsaw({ step, setStep, selectedImage }) {
  const confetti = new JSConfetti();

  const [isSolved, setIsSolved] = useState(false);

  const handleSolve = () => {
    confetti.addConfetti({
      emojis: ["🌹", "❤️", "🌻", "🌈", "🥰", "😘"],
    });
    setIsSolved(true);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="handwritten-text w-full mt-10 mb-8">
        Help me solve this jigsaw puzzle 😖
      </h1>
      <JigsawPuzzle
        imageSrc={`../images/couple/${selectedImage}.jpg`}
        rows={3}
        columns={3}
        onSolved={handleSolve}
      />
      <div className="mt-2">
        {isSolved && (
          <CuteButton
            setStep={setStep}
            dontNext={false}
            step={step}
            className="w-40 my-5 mb-40 animated delay"
            text="💖 Next"
          />
        )}
      </div>
    </div>
  );
}
