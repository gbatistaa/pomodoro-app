import styles from "../css/timeSettings.module.css";
import increment from "../../../assets/./images/icon-arrow-up.svg";
import decrement from "../../../assets/./images/icon-arrow-down.svg";
import { useState } from "react";

const pomoStageNames = ["pomodoro", "shortBreak", "longBreak"];

function TimeInputs({ stageNames, timeRef }) {
  const [, setTimes] = useState(0);
  const handleTimeIncrease = (event, currentValue, timeRef, name) => {
    event.preventDefault();
    if (currentValue < 60) {
      timeRef[`${name}`] += 1;
      setTimes((prev) => prev - 1);
    }
  };

  const handleTimeDecrease = (event, currentValue, timeRef, name) => {
    event.preventDefault();
    if (currentValue > 0) {
      timeRef[`${name}`] -= 1;
      setTimes((prev) => prev - 1);
    }
  };

  return stageNames.map((name, key) => {
    return (
      <div className={styles.labelContainer} key={key}>
        <h5 className={styles.stageName}>{name}</h5>
        <label htmlFor={name} className={styles.inputLabel}>
          <input
            type="number"
            name={name}
            className={styles.timeInput}
            id={name}
            value={timeRef[`${name}`]}
            readOnly
          />
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.increment}
              onClick={(e) =>
                handleTimeIncrease(e, timeRef[`${name}`], timeRef, name)
              }
            >
              <img src={increment} alt="arrow-up" />
            </button>
            <button
              type="button"
              className={styles.decrement}
              onClick={(e) =>
                handleTimeDecrease(e, timeRef[`${name}`], timeRef, name)
              }
            >
              <img src={decrement} alt="arrow-down" />
            </button>
          </div>
        </label>
      </div>
    );
  });
}

export default function TimeSettings({ timeRef }) {
  return (
    <section className={styles.timeSettings}>
      <h4 className={styles.timeTitle}>TIME (MINUTES)</h4>
      <div className={styles.durationSettings}>
        <TimeInputs stageNames={pomoStageNames} timeRef={timeRef} />
      </div>
    </section>
  );
}
