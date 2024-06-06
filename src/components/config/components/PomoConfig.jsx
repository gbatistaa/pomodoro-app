import styles from "../../../styles/pomoConfig.module.css";
import settings from "../../../assets/./images/icon-settings.svg";
import Header from "./Header";
import TimeSettings from "./TimeSettings";
import FontSettings from "./FontSettings";
import ColorSettings from "./ColorSettings";
import {
  ColorContext,
  FontContext,
  TimeSettingsContext,
  MinutesContext,
  ActiveContext,
  SecondsContext,
} from "../../../App.js";
import { useState, createContext, useContext, memo } from "react";

export const DisplayContext = createContext();

const MemoHeader = memo(Header);

function ConfigMenu({ functions }) {
  const { displayConfig } = useContext(DisplayContext);
  const { timeSettingsRef } = useContext(TimeSettingsContext);
  const { setMinutes } = useContext(MinutesContext);
  const { setSeconds } = useContext(SecondsContext);
  const { pomodoroActive, setPomodoroActive } = useContext(ActiveContext);
  const fontRef = useContext(FontContext);
  const globalColorRef = useContext(ColorContext);

  const handleChangeSettings = (fns) => {
    setMinutes(timeSettingsRef.pomodoro);
    fns.handleConfigDisplay();
    fns.reset((prev) => prev - 1);
    if (pomodoroActive) {
      setSeconds(0);
      setPomodoroActive(false);
    }
  };

  return (
    <div className={`${styles.configMenu} ${displayConfig ? "" : styles.none}`}>
      <MemoHeader />
      <form
        className={styles.configMain}
        onSubmit={(e) => {
          e.preventDefault();
          handleChangeSettings(functions);
        }}
      >
        <TimeSettings timeRef={timeSettingsRef} />
        <FontSettings fontRef={fontRef} />
        <ColorSettings />
        <button
          type="submit"
          className={`${styles.applyButton} ${
            styles[`${globalColorRef.current}`]
          }`}
        >
          Apply
        </button>
      </form>
    </div>
  );
}

export default function PomoConfig({ reset }) {
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
        {displayConfig && <div className={styles.overlay}></div>}
        <ConfigMenu functions={{ reset, handleConfigDisplay }} />
      </DisplayContext.Provider>
    </>
  );
}
