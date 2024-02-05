import React from "react";
import colorNames from "colornames";

const InputItem = ({
  inputRef,
  displayCol,
  setDisplayCol,
  setHexValue,
  isDarkText,
  setDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
      <label className=" p-1 text-center absolute -z-99999999">
        Add Color Name{" "}
      </label>
      <input
        id="colorInput"
        ref={inputRef}
        type="text"
        autoFocus
        placeholder="Add Color Name"
        className=" h-8 w-60 border-2 border-black rounded-md outline-none text-black relative"
        value={displayCol}
        onChange={(e) => {
          setDisplayCol(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />

      <button
        type="button"
        className="border-2 border-black rounded-md bg-indigo-500 w-40 text-white hover:bg-indigo-800"
        onClick={() => setDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputItem;
