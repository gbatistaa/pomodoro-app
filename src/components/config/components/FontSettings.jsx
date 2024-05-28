import styles from "../css/fontSettings.module.css";
import RadioInput from "./RadioInput";

const fontsArray = ["kumbh", "roboto", "space"];

export default function FontSettings() {
  return (
    <section className={styles.fontSettings}>
      <h4 className={styles.stageName}>FONT</h4>
      <div className={styles.inputsContainer}>
        <RadioInput
          array={fontsArray}
          name={`font`}
          style={styles.inputLabel}
          text={`Aa`}
        />
      </div>
    </section>
  );
}
