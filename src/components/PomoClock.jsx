import { useContext } from "react";
import styles from "../styles/pomoClock.module.css";
import { ColorContext } from "../App.js";

export default function PomoClock() {
  const { globalColor } = useContext(ColorContext);
  const time = new Date();
  return (
    <div
      className={styles.pomoClock}
      style={{ border: `10px solid ${globalColor}` }}
    >
      <h1 className={styles.pomoTime}>
        {time.getHours()}:{time.getMinutes()}
      </h1>
      <button type="button" className={styles.pauseButton}>
        PAUSE
      </button>
    </div>
  );
}
