import styles from "../css/fontSettings.module.css";

export default function FontSettings() {
  return (
    <section className={styles.fontSettings}>
      <h3 className="">FONT</h3>
      <div>
        <label htmlFor="kumbh" className="">
          <input type="radio" name="font" />
        </label>
        <label htmlFor="roboto" className="">
          <input type="radio" name="font" />
        </label>
        <label htmlFor="space" className="">
          <input type="radio" name="font" />
        </label>
      </div>
    </section>
  );
}
