import { useState } from "react";

export default function ImageGrid({ setStep, setSelectedImage }) {
  const numbers = Array.from({ length: 18 }, (_, i) => i);

  const handleImageClick = (src, index) => {
    setSelectedImage(index + 1);
    setStep((prev) => prev + 1);
    console.log(`Clicked: ${src}`);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="handwritten-text w-full mt-10">
        What's your favorite image? 🤔
      </h1>

      <div className="grid grid-cols-6 gap-4 p-4 w-full max-w-6xl mx-auto mt-5">
        {numbers.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => handleImageClick(src, index)}
          >
            <img
              src={`../images/couple/${index + 1}.jpg`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
