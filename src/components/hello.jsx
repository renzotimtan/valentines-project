import helloGif from "../assets/hello.gif";
import helloGif2 from "../assets/hello2.gif";
import CuteButton from "./CuteButton";

const Hello = ({ setStep, step }) => {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="">
        <div className="flex justify-center">
          {/* <img src={helloGif} alt="" /> */}
          <img className="animated delay" src={helloGif2} alt="" />
        </div>

        <h1 className="handwritten-text mt-10 animated">Hello Baba ❤️</h1>
        <div className="flex justify-center animated p-[10px]">
          <CuteButton
            text={"💖 PRESS ME!!!"}
            setStep={setStep}
            step={step}
            dontNext={false}
          />
        </div>
      </div>
    </section>
  );
};

export default Hello;
