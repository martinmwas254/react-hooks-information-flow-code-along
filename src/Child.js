import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChange, color }) {
  function handleCLick() {
    const newColor = getRandomColor();
    onChange(newColor);
  }

  return (
    <div
      onClick={handleCLick}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
