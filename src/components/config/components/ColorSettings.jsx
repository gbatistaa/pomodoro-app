import styles from "../css/colorSettings.module.css";
import RadioInput from "./RadioInput";

const colors = ["#f87070", "#70f3f8", "#d881f8"];

export default function ColorSettings() {
  return (
    <section className={styles.colorSettings}>
      <h4 className={styles.stageName}>COLOR</h4>
      <div className={styles.inputsContainer}>
        <RadioInput
          array={colors}
          name={`color`}
          style={styles.colorLabel}
          text={``}
        />
      </div>
    </section>
  );
}
