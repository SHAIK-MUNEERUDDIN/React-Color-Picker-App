import { useState } from "react";
import { useRef } from "react";
import { FaPaintBrush } from "react-icons/fa";
import DisplayItem from "./displayItem";
import InputItem from "./inputItem";

function App() {
  const [displayCol, setDisplayCol] = useState("");
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setDarkText] = useState(true);

  const inputRef = useRef();

  return (
    <div className="flex items-center justify-center flex-col gap-4 h-svh">
      <h1 className="flex text-3xl text-pink-500 justify-center w-60">
        Color <span className="text-green-700"> It</span>
        <FaPaintBrush className="text-red-500" />
      </h1>
      <DisplayItem
        displayCol={displayCol}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <InputItem
        inputRef={inputRef}
        displayCol={displayCol}
        setDisplayCol={setDisplayCol}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setDarkText={setDarkText}
      />
    </div>
  );
}

export default App;
