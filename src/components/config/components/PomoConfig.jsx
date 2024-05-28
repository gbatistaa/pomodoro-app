import styles from "../../../styles/pomoConfig.module.css";
import settings from "../../../assets/./images/icon-settings.svg";
import Header from "./Header";
import TimeSettings from "./TimeSettings";
import FontSettings from "./FontSettings";
import ColorSettings from "./ColorSettings";

function ConfigMenu() {
  return (
    <div className={styles.configMenu}>
      <Header />
      <main className={styles.configMain}>
        <TimeSettings />
        <FontSettings />
        <ColorSettings />
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
