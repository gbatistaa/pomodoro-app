import styles from "../../../styles/pomoConfig.module.css";
import settings from "../../../assets/./images/icon-settings.svg";
import Header from "./Header";
import TimeSettings from "./TimeSettings";
import FontSettings from "./FontSettings";
import ColorSettings from "./ColorSettings";
import { useState, createContext, useContext, memo } from "react";

export const DisplayContext = createContext();

const MemoHeader = memo(Header);
const MemoTimeSettings = memo(TimeSettings);
const MemoFontSettings = memo(FontSettings);

function ConfigMenu() {
  const { displayConfig } = useContext(DisplayContext);

  return (
    <div className={`${styles.configMenu} ${displayConfig ? "" : styles.none}`}>
      <MemoHeader />
      <main className={styles.configMain}>
        <MemoTimeSettings />
        <MemoFontSettings />
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

      <DisplayContext.Provider value={{ displayConfig, setDisplayConfig }}>
        <ConfigMenu />
      </DisplayContext.Provider>
    </>
  );
}
