import { useState, useRef } from "react";
import styles from "../css/fontSettings.module.css";

const fontsArray = ["kumbh", "roboto", "space"];

function FontInput({ arrayFonts, text, fontRef, forceUpdate }) {
  const handleFontChange = (event, ref) => {
    const { value } = event.target;
    ref.current = value;
    forceUpdate((prev) => prev - 1); // Força a re-renderização
  };

  return arrayFonts.map((fontName, key) => {
    return (
      <label
        htmlFor={fontName}
        key={key}
        className={`${styles.inputLabel} ${
          fontName === fontRef.current ? styles.labelSelected : ""
        }`}
        style={
          fontName === fontRef.current
            ? { backgroundColor: "#1e213f" }
            : { backgroundColor: "#eff1fa" }
        }
      >
        {text}
        <input
          type="radio"
          name="font"
          value={fontName}
          id={fontName}
          onChange={(e) => handleFontChange(e, fontRef)}
        />
      </label>
    );
  });
}

export default function FontSettings({ fontRef }) {
  const [, forceUpdate] = useState(0);

  return (
    <section className={styles.fontSettings}>
      <h4 className={styles.stageName}>FONT</h4>
      <div className={styles.inputsContainer}>
        <FontInput
          arrayFonts={fontsArray}
          text="Aa"
          fontRef={fontRef}
          forceUpdate={forceUpdate}
        />
      </div>
    </section>
  );
}
