import { useState } from "react";

const CuteButton = ({ onClick, className, text, step, setStep, dontNext }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  return (
    <button
      className={`cute-button ${isBouncing ? "bounce" : ""} ${className}`}
      onClick={() => {
        setIsBouncing(true);
        setTimeout(() => setIsBouncing(false), 400);
        if (!dontNext) setStep(step + 1);
        onClick?.();
      }}
    >
      {text}
    </button>
  );
};

export default CuteButton;
