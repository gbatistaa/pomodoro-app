import styles from "../styles/pomoNav.module.css";
import { ColorContext, PomoStageContext } from "../App.js";
import { useContext } from "react";

export default function PomoNav() {
  const { globalColor } = useContext(ColorContext);
  const { pomoStage } = useContext(PomoStageContext);

  return (
    <section className={styles.pomoNav}>
      <div
        className={`${styles.pomoStages} ${
          pomoStage === "pomodoro" ? styles.selected : ""
        }`}
        style={pomoStage === "pomodoro" ? { backgroundColor: globalColor } : {}}
      >
        <h5>pomodoro</h5>
      </div>
      <div
        className={`${styles.pomoStages} ${
          pomoStage === "shortBreak" ? styles.selected : ""
        }`}
        style={
          pomoStage === "shortBreak" ? { backgroundColor: globalColor } : {}
        }
      >
        <h5>short break</h5>
      </div>
      <div
        className={`${styles.pomoStages} ${
          pomoStage === "longBreak" ? styles.selected : ""
        }`}
        style={
          pomoStage === "longBreak" ? { backgroundColor: globalColor } : {}
        }
      >
        <h5>long break</h5>
      </div>
    </section>
  );
}
