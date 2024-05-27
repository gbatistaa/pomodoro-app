import styles from "../css/fontSettings.module.css";

const fontsArray = ["kumbh", "roboto", "space"];

function FontInput({ fonts }) {
  return fonts.map((font, key) => {
    return (
      <label htmlFor={font} key={key} className={styles.inputLabel}>
        <input type="radio" name="font" value={font} />
      </label>
    );
  });
}

export default function FontSettings() {
  return (
    <section className={styles.fontSettings}>
      <h3 className="">FONT</h3>
      <div>
        <FontInput fonts={fontsArray} />
      </div>
    </section>
  );
}
