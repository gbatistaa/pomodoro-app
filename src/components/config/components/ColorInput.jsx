import { useContext } from "react";
import { ColorContext } from "../../../App";
import check from "../../../assets/images/check-solid.svg";
import styles from "../css/colorSettings.module.css";

export default function ColorInput({ array, name }) {
  const { globalColor, setGlobalColor } = useContext(ColorContext);

  const handleColorChange = (newColor) => {
    setGlobalColor(newColor);
  };
  return array.map((color, key) => {
    return (
      <label
        htmlFor={color}
        key={key}
        className={`${styles.colorLabel} ${
          color === globalColor ? styles.selected : styles.notSelected
        }`}
        style={{ backgroundColor: array[key] }}
      >
        <img src={check} alt="check" className={styles.check} />
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
