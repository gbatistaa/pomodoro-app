import styles from "../styles/pomoNav.module.css";

export default function PomoNav(params) {
  return (
    <section className={styles.pomoNav}>
      <div className={styles.pomoStages}>
        <h5>pomodoro</h5>
      </div>
      <div className={styles.pomoStages}>
        <h5>short break</h5>
      </div>
      <div className={styles.pomoStages}>
        <h5>long break</h5>
      </div>
    </section>
  );
}
