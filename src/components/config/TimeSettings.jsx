export default function TimeSettings(style) {
  return (
    <section className={style.timeSettings}>
      <h3 className="">TIME (MINUTES)</h3>
      <div className={style.durationSettings}>
        <input type="number" name="pomodoro" />
        <input type="number" name="short-break" />
        <input type="number" name="long-break" />
      </div>
    </section>
  );
}
