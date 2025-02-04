import Disc from "./Disc";
import CuteButton from "./CuteButton";
import { useRef } from "react";
import myMusic from "../assets/song.mp3";

const MusicPlay = ({ playAudio, step, setStep, hasPlayed, setHasPlayed }) => {
  const audioRef = useRef(null);

  const onMusicPlay = () => {
    playAudio();
    setHasPlayed(true);
  };

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <h1 className="handwritten-text w-full mt-10">
        Let's play this track 😌
      </h1>
      <audio ref={audioRef}>
        <source src={myMusic} type="audio/mpeg" />
      </audio>
      {!hasPlayed ? (
        <CuteButton
          onClick={onMusicPlay}
          setStep={setStep}
          dontNext={true}
          step={step}
          className="w-40 my-5 mb-40 animated delay"
          text="▶️ Play Now"
        />
      ) : (
        <CuteButton
          setStep={setStep}
          dontNext={false}
          step={step}
          className="w-40 my-5 mb-40 animated delay"
          text="💖 Next"
        />
      )}
      <Disc />
    </div>
  );
};

export default MusicPlay;
