import styles from "../styles/pomoNav.module.css";
import { ColorContext, PomoStageContext } from "../App.js";
import { useContext } from "react";

export default function PomoNav() {
  const globalColor = useContext(ColorContext);
  const { pomoState } = useContext(PomoStageContext);

  return (
    <section className={styles.pomoNav}>
      <div
        className={`${styles.pomoStages} ${
          pomoState === "pomodoro" ? styles.selected : ""
        }`}
        style={
          pomoState === "pomodoro"
            ? { backgroundColor: globalColor.current }
            : {}
        }
      >
        <h5>pomodoro</h5>
      </div>
      <div
        className={`${styles.pomoStages} ${
          pomoState === "shortBreak" ? styles.selected : ""
        }`}
        style={
          pomoState === "shortBreak"
            ? { backgroundColor: globalColor.current }
            : {}
        }
      >
        <h5>short break</h5>
      </div>
      <div
        className={`${styles.pomoStages} ${
          pomoState === "longBreak" ? styles.selected : ""
        }`}
        style={
          pomoState === "longBreak"
            ? { backgroundColor: globalColor.current }
            : {}
        }
      >
        <h5>long break</h5>
      </div>
    </section>
  );
}
