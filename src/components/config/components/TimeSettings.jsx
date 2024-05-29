import styles from "../css/timeSettings.module.css";
import increment from "../../../assets/./images/icon-arrow-up.svg";
import decrement from "../../../assets/./images/icon-arrow-down.svg";
import { useReducer } from "react";

const pomoStageNames = ["pomodoro", "shortBreak", "longBreak"];

function TimeInputs({ stageNames }) {
  const initialTimeState = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
  };

  const reducer = (state, { type, increase }) => {
    switch (type) {
      case "set-pomodoro":
        console.log(state);
        return {
          ...state,
          pomodoro: increase ? state.pomodoro + 1 : state.pomodoro - 1,
        };

      case "set-shortBreak":
        return {
          ...state,
          shortBreak: increase ? state.shortBreak + 1 : state.shortBreak - 1,
        };

      case "set-longBreak":
        return {
          ...state,
          longBreak: increase ? state.longBreak + 1 : state.longBreak - 1,
        };

      default:
        break;
    }
  };

  const [timeStates, dispatch] = useReducer(reducer, initialTimeState);

  const handleTimeIncrease = (event, timeName, currentValue) => {
    event.preventDefault();
    if (currentValue < 60) {
      dispatch({ type: `set-${timeName}`, increase: true });
    }
  };

  const handleTimeDecrease = (event, timeName, currentValue) => {
    event.preventDefault();
    if (currentValue > 0) {
      dispatch({ type: `set-${timeName}`, increase: false });
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
            value={timeStates[`${name}`]}
            readOnly
          />
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.increment}
              onClick={(e) =>
                handleTimeIncrease(e, name, timeStates[`${name}`])
              }
            >
              <img src={increment} alt="arrow-up" />
            </button>
            <button
              type="button"
              className={styles.decrement}
              onClick={(e) =>
                handleTimeDecrease(e, name, timeStates[`${name}`])
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
