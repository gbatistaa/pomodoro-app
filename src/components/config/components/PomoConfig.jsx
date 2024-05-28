import styles from "../../../styles/pomoConfig.module.css";
import settings from "../../../assets/./images/icon-settings.svg";
import Header from "./Header";
import TimeSettings from "./TimeSettings";
import FontSettings from "./FontSettings";
import ColorSettings from "./ColorSettings";
import { useState } from "react";

function ConfigMenu({ display }) {
  return (
    <div className={`${styles.configMenu} ${display ? "" : styles.none}`}>
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
  const [displayConfig, setDisplayConfig] = useState(false);

  const handleConfigDisplay = () => {
    setDisplayConfig(!displayConfig);
  };

  return (
    <>
      <button
        type="button"
        className={styles.configButton}
        onClick={() => handleConfigDisplay()}
      >
        <img src={settings} alt="config" />
      </button>
      <ConfigMenu display={displayConfig} />
    </>
  );
}
