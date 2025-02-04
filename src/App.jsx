import React from "react";

import { useState } from "react";
import "./App.css";
import Hello from "./components/hello";
import MusicPlay from "./components/MusicPlay";
import { useRef } from "react";
import myMusic from "../src/assets/song.mp3";
import ImageGrid from "./components/ImagePick";
import Jigsaw from "./components/Jigsaw";
import CuteButton from "./components/CuteButton";
import blush from "../src/assets/blush.gif";
import blush2 from "../src/assets/blush2.gif";
import what from "../src/assets/what.gif";
import Ask from "./components/Ask";
import yes from "../src/assets/yes.gif";
import JSConfetti from "js-confetti";

function App() {
  const confetti = new JSConfetti();
  const [step, setStep] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const audioRef = useRef(null);

  const addConfetti = () => {
    confetti.addConfetti({
      emojis: ["🌹"],
    });
  };

  const playAudio = () => {
    if (audioRef.current) {
      console.log("ran this");
      audioRef.current
        .play()
        .then(() => {
          console.log("Playback started successfully!");
        })
        .catch((error) => {
          console.error("Playback failed:", error.message);
        });
    }
  };

  return (
    <div className="bg-[#FFB6C3] h-screen ">
      {step === 0 && <Hello setStep={setStep} step={step} />}
      {step === 1 && (
        <MusicPlay
          playAudio={playAudio}
          step={step}
          setStep={setStep}
          setHasPlayed={setHasPlayed}
          hasPlayed={hasPlayed}
        />
      )}
      {step === 2 && (
        <ImageGrid setStep={setStep} setSelectedImage={setSelectedImage} />
      )}
      {step === 3 && (
        <Jigsaw step={step} setStep={setStep} selectedImage={selectedImage} />
      )}
      {step === 4 && (
        <div className="flex flex-col items-center justify-center h-full">
          <img className="animated" src={blush} alt="" />
          <h1 className="handwritten-text mt-10 animated">Just a Question...</h1>
          <CuteButton
            setStep={setStep}
            dontNext={false}
            step={step}
            className="w-40 my-5 mb-40 animated delay"
            text="💖 Next"
          />
        </div>
      )}
      {step === 5 && (
        <div className="flex flex-col items-center justify-center h-full">
          <img className="animated" src={blush2} alt="" />
          <h1 className="handwritten-text mt-10 animated">
            I just wanna know...
          </h1>
          <CuteButton
            setStep={setStep}
            dontNext={false}
            step={step}
            className="w-40 my-5 mb-40 animated delay"
            text="💖 Next"
          />
        </div>
      )}

      {step === 6 && (
        <div className="flex flex-col items-center justify-center h-full w-full">
          <img className="animated" src={what} alt="" />
          <h1 className="handwritten-text mt-10 animated w-full">
            ....
          </h1>
          <CuteButton
            setStep={setStep}
            dontNext={false}
            step={step}
            className="w-40 my-5 mb-40 animated delay"
            text="💖 Next"
          />
        </div>
      )}

      {step === 7 && <Ask step={step} setStep={setStep} />}

      {step === 8 && (
        <div className="flex flex-col items-center justify-center h-full">
          <img className="animated" src={yes} alt="" />
          <h1 className="handwritten-text mt-10 animated">
            I knew you'd say yes ❤️
          </h1>
          <CuteButton
            onClick={addConfetti}
            setStep={setStep}
            dontNext={true}
            step={step}
            className="w-40 my-5 mb-40"
            text="🌹 Confetti"
          />
        </div>
      )}
      <audio ref={audioRef}>
        <source src={myMusic} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default App;
