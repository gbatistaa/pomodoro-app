import { useState } from "react";
import styles from "../css/colorSettings.module.css";
import ColorInput from "./ColorInput.jsx";

const colors = ["#f87070", "#70f3f8", "#d881f8"];

export default function ColorSettings() {
  const [, forceUpdate] = useState(0);

  return (
    <section className={styles.colorSettings}>
      <h4 className={styles.stageName}>COLOR</h4>
      <div className={styles.inputsContainer}>
        <ColorInput array={colors} name={`color`} forceUpdate={forceUpdate} />
      </div>
    </section>
  );
}
