import { useState } from "react";
import CuteButton from "./CuteButton";
import JSConfetti from "js-confetti";

const Ask = ({ step, setStep }) => {
  const confetti = new JSConfetti();
  const [noCount, setNoCount] = useState(0);
  const handleNo = () => {
    setNoCount((prev) => prev + 1);

    if (noCount === 0) {
      confetti.addConfetti({
        emojis: ["😭"],
      });
    } else if (noCount === 1) {
      confetti.addConfetti({
        emojis: ["🥹"],
      });
    } else if (noCount === 2) {
      confetti.addConfetti({
        emojis: ["😚"],
      });
    } else if (noCount === 3) {
      confetti.addConfetti({
        emojis: ["😡"],
      });
    } else if (noCount === 4) {
      confetti.addConfetti({
        emojis: ["😵"],
      });
    } else if (noCount === 5) {
      confetti.addConfetti({
        emojis: ["😭"],
      });
    } else {
      confetti.addConfetti({
        emojis: ["😛"],
      });
    }
  };

  const messages = [
    "Will you be my valentine?",
    "NOOOOO, why not?",
    "I'll just be a sad bean...",
    "Pretty pleaseeeeee",
    "Now I'm mad",
    "It's hurting me bad",
    "Please!!!",
    "I ate the No button",
  ];
  const imgSrc = `images/rejects/${noCount}.gif`;

  const handleYes = () => {
    setStep(step + 1); // Go to the next step
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <img className="animated h-[270px]" src={imgSrc} alt="" />
      <h1 className="handwritten-text mt-10 animated w-full">
        {messages[noCount]}
      </h1>
      <div className="flex">
        <CuteButton
          onClick={handleYes}
          setStep={setStep}
          dontNext={false}
          step={step}
          className="w-40 my-5 mb-40 animated"
          text="🌹 Yes"
        />
        {noCount < 7 && (
          <CuteButton
            onClick={handleNo}
            setStep={setStep}
            dontNext={true}
            step={step}
            className="w-40 my-5 mb-40 animated ml-5"
            text="🥀 No"
          />
        )}
      </div>
    </div>
  );
};

export default Ask;
