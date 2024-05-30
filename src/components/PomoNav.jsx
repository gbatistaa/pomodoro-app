import styles from "../styles/pomoNav.module.css";
import { ColorContext, TimeContext } from "../App.js";
import { useContext } from "react";

export default function PomoNav() {
  const { globalColor } = useContext(ColorContext);
  const { timeState } = useContext(TimeContext);

  return (
    <section className={styles.pomoNav}>
      <div
        className={`${styles.pomoStages} ${
          timeState === "pomodoro" ? styles.selected : ""
        }`}
        style={timeState === "pomodoro" ? { backgroundColor: globalColor } : {}}
      >
        <h5>pomodoro</h5>
      </div>
      <div
        className={`${styles.pomoStages} ${
          timeState === "shortBreak" ? styles.selected : ""
        }`}
        style={
          timeState === "shortBreak" ? { backgroundColor: globalColor } : {}
        }
      >
        <h5>short break</h5>
      </div>
      <div
        className={`${styles.pomoStages} ${
          timeState === "longBreak" ? styles.selected : ""
        }`}
        style={
          timeState === "longBreak" ? { backgroundColor: globalColor } : {}
        }
      >
        <h5>long break</h5>
      </div>
    </section>
  );
}
