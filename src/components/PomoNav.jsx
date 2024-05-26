import styles from "../styles/pomoNav.module.css";

export default function PomoNav(params) {
  return (
    <section className={styles.pomoNav}>
      <div className={styles.pomoStages}>pomodoro</div>
      <div className={styles.pomoStages}>short break</div>
      <div className={styles.pomoStages}>long break</div>
    </section>
  );
}
