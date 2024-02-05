import React from "react";

const DisplayItem = ({ displayCol, hexValue, isDarkText }) => {
  return (
    <div
      className=" size-60  border-2 border-black rounded-lg flex flex-col justify-center items-center"
      style={{
        backgroundColor: displayCol,
        color: isDarkText ? "#000" : "#fff",
      }}
    >
      <p className="text-2xl">{displayCol ? displayCol : "Empty Value"}</p>
      <p className=" text-2xl">{hexValue}</p>
    </div>
  );
};

export default DisplayItem;
