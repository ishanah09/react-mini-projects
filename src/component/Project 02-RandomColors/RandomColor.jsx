import { use, useEffect, useState } from "react";

export default function RandomColor() {
  const [colorType, setColorType] = useState("HEX");
  const [color, setColor] = useState(null);

  useEffect(() => {
    colorType == "HEX" ? generateHexColor() : generateRgbColor();
  }, [colorType]);

  function generateHexColor() {
    const hex = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hex.length);
      colorCode = colorCode + hex[random];
    }

    setColor(colorCode);
  }

  function generateRgbColor() {
    let colorCode = "rgb(";
    for (let i = 0; i < 3; i++) {
      let random = Math.floor(Math.random() * 256);
      colorCode = colorCode + random;
      if (i < 2) {
        colorCode = colorCode + ",";
      }
    }
    colorCode = colorCode + ")";

    setColor(colorCode);
  }

  return (
    <>
      <main
        className="h-screen w-full flex items-center justify-between flex-col p-8"
        style={{ backgroundColor: color }}
      >
        <div className="flex gap-4">
          <button
            onClick={() => {
              setColorType("HEX");
            }}
            className="py-2 px-4 bg-orange-400 cursor-pointer rounded-2xl text-white"
          >
            Create HEX Color
          </button>
          <button
            onClick={() => {
              setColorType("RGB");
            }}
            className="py-2 px-4 bg-orange-400 cursor-pointer rounded-2xl text-white"
          >
            Create RGB Color
          </button>
          <button
            onClick={colorType == "HEX" ? generateHexColor : generateRgbColor}
            className="py-2 px-4 bg-orange-400 cursor-pointer rounded-2xl text-white"
          >
            Generate Random Color
          </button>
        </div>

        <h1 className="text-3xl font-semibold text-white">
          {colorType === "HEX" ? "HEX Color" : "RGB color"}
        </h1>
        <h2 className="text-3xl font-semibold text-white">{color}</h2>
      </main>
    </>
  );
}
