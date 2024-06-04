import { createContext, useRef } from "react";
import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoNav from "./components/PomoNav";
import PomoConfig from "./components/config/components/PomoConfig";

export const ColorContext = createContext();
export const PomoStageContext = createContext();
export const FontContext = createContext();
export const TimeSettingsContext = createContext();

function App() {
  const initialTimeValues = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
  };

  const globalColorRef = useRef("#f87070");
  const pomoStageRef = useRef("pomodoro");
  const fontRef = useRef("kumbh");
  const { current: timeSettingsRef } = useRef(initialTimeValues);

  return (
    <div className={`App ${fontRef.current}`}>
      <h1 className="app-title">pomodoro</h1>
      <FontContext.Provider value={fontRef}>
        <TimeSettingsContext.Provider value={{ timeSettingsRef }}>
          <PomoStageContext.Provider value={{ pomoStageRef }}>
            <ColorContext.Provider value={globalColorRef}>
              <PomoNav />
              <PomoClock />
              <PomoConfig />
            </ColorContext.Provider>
          </PomoStageContext.Provider>
        </TimeSettingsContext.Provider>
      </FontContext.Provider>
    </div>
  );
}

export default App;
