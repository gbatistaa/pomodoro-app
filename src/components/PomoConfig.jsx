import styles from "../styles/pomoConfig.module.css";
import settings from "../assets/icon-settings.svg";
import close from "../assets/icon-close.svg";

function ConfigMenu() {
  return (
    <div className={styles.configMenu}>
      <header className={styles}>
        <h1 className={styles}>Settings</h1>
        <button type="button" className={styles.closeButton}>
          <img src={close} alt="close" />
        </button>
      </header>
      <main className={styles}>
        <section className={styles.timeSettings}>
          <h3 className="">TIME (MINUTES)</h3>
          <div className={styles.durationSettings}>
            <input type="number" name="pomodoro" />
            <input type="number" name="short-break" />
            <input type="number" name="long-break" />
          </div>
        </section>
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
        <section className={styles.colorSettings}>
          <h3>COLOR</h3>
          <div className="">
            <label htmlFor="red">
              <input type="radio" name="color" id="red" value="#f87070" />
            </label>
            <label htmlFor="cyan">
              <input type="radio" name="color" id="cyan" value="#70f2f8" />
            </label>
            <label htmlFor="pink">
              <input type="radio" name="color" id="pink" value="#d881f8" />
            </label>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function PomoConfig() {
  return (
    <>
      <button type="button" className={styles.configButton}>
        <img src={settings} alt="config" srcset="" />
      </button>
      <ConfigMenu />
    </>
  );
}
