import styles from "../styles/pomoClock.module.css";

export default function PomoClock() {
  return (
    <div className={styles.pomoClock}>
      <h1 className={styles.pomoTime}>17:30</h1>
      <button type="button" className={styles.pauseButton}>
        PAUSE
      </button>
    </div>
  );
}
