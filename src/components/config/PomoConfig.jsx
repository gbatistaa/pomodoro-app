import styles from "../../styles/pomoConfig.module.css";
import settings from "../../assets/icon-settings.svg";
import Header from "./Header";
import TimeSettings from "./TimeSettings";
import FontSettings from "./FontSettings";
import ColorSettings from "./ColorSettings";

function ConfigMenu() {
  return (
    <div className={styles.configMenu}>
      <main className={styles}>
        <Header />
        <TimeSettings style={styles} />
        <FontSettings style={styles} />
        <ColorSettings style={styles} />
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
