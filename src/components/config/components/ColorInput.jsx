import { useContext } from "react";
import { ColorContext } from "../../../App";
import check from "../../../assets/images/check-solid.svg";
import styles from "../css/colorSettings.module.css";

export const colorTranslator = (color) => {
  switch (color) {
    case "red":
      return "#f87070";
    case "blue":
      return "#70f3f8";
    case "pink":
      return "#d881f8";
    default:
      return "";
  }
};

export default function ColorInput({ array, name, forceUpdate }) {
  const globalColorRef = useContext(ColorContext);

  return array.map((color, key) => {
    const handleColorChange = (event, ref) => {
      const { value } = event.target;
      ref.current = value;
      forceUpdate((prev) => prev - 1);
    };
    return (
      <label
        htmlFor={color}
        key={key}
        className={`${styles.colorLabel} ${
          color === globalColorRef.current
            ? styles.selected
            : styles.notSelected
        }`}
        style={{ backgroundColor: colorTranslator(color) }}
      >
        <img src={check} alt="check" className={styles.check} />
        <input
          type="radio"
          name={name}
          value={color}
          id={color}
          onChange={(e) => handleColorChange(e, globalColorRef)}
        />
      </label>
    );
  });
}
