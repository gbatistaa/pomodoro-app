import { useContext } from "react";
import { ColorContext } from "../../../App";

export default function ColorInput({ array, name, style }) {
  const { globalColor, setGlobalColor } = useContext(ColorContext);

  const handleColorChange = (newColor) => {
    setGlobalColor(newColor);
  };
  return array.map((color, key) => {
    return (
      <label
        htmlFor={color}
        key={key}
        className={`${style} ${color === globalColor ? "selected" : ""}`}
        style={{ backgroundColor: array[key] }}
      >
        <input
          type="radio"
          name={name}
          value={color}
          id={color}
          onChange={() => handleColorChange(color)}
        />
      </label>
    );
  });
}
