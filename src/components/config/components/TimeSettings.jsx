import styles from "../css/timeSettings.module.css";
import increment from "../../../assets/./images/icon-arrow-up.svg";
import decrement from "../../../assets/./images/icon-arrow-down.svg";

const pomoStageNames = ["pomodoro", "short-break", "long-break"];

function TimeInputs({ stageNames }) {
  return stageNames.map((name, key) => {
    return (
      <div className={styles.labelContainer}>
        <h5 className={styles.stageName}>{name}</h5>
        <label htmlFor={name} className={styles.inputLabel} key={key}>
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.increment}>
              <img src={increment} alt="arrow-up" />
            </button>
            <button type="button" className={styles.decrement}>
              <img src={decrement} alt="arrow-down" />
            </button>
          </div>
          <input
            type="number"
            name={name}
            className={styles.timeInput}
            id={name}
          />
        </label>
      </div>
    );
  });
}

export default function TimeSettings() {
  return (
    <section className={styles.timeSettings}>
      <h4 className={styles.timeTitle}>TIME (MINUTES)</h4>
      <div className={styles.durationSettings}>
        <TimeInputs stageNames={pomoStageNames} />
      </div>
    </section>
  );
}
