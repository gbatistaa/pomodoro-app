import { useState } from "react";
import styles from "../css/colorSettings.module.css";
import ColorInput from "./ColorInput.jsx";

const colors = ["red", "blue", "pink"];

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
