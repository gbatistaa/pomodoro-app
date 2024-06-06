import { createContext, useRef, useState } from "react";
import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoNav from "./components/PomoNav";
import PomoConfig from "./components/config/components/PomoConfig";

export const ColorContext = createContext();
export const PomoStageContext = createContext();
export const FontContext = createContext();
export const TimeSettingsContext = createContext();
export const MinutesContext = createContext();
export const SecondsContext = createContext();
export const ActiveContext = createContext();

function App() {
  const initialTimeValues = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
  };

  const globalColorRef = useRef("red");
  const fontRef = useRef("kumbh");
  const { current: timeSettingsRef } = useRef(initialTimeValues);

  const [pomoState, setPomoState] = useState("pomodoro");
  const [minutes, setMinutes] = useState(parseInt(timeSettingsRef.pomodoro));
  const [seconds, setSeconds] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);
  const [, setNothing] = useState(0);

  return (
    <div className={`App ${fontRef.current}`}>
      <h1 className="app-title">PomoStudy</h1>
      <SecondsContext.Provider value={{ seconds, setSeconds }}>
        <ActiveContext.Provider value={{ pomodoroActive, setPomodoroActive }}>
          <MinutesContext.Provider value={{ minutes, setMinutes }}>
            <FontContext.Provider value={fontRef}>
              <TimeSettingsContext.Provider value={{ timeSettingsRef }}>
                <PomoStageContext.Provider value={{ pomoState, setPomoState }}>
                  <ColorContext.Provider value={globalColorRef}>
                    <PomoNav />
                    <PomoClock />
                    <PomoConfig reset={setNothing} />
                  </ColorContext.Provider>
                </PomoStageContext.Provider>
              </TimeSettingsContext.Provider>
            </FontContext.Provider>
          </MinutesContext.Provider>
        </ActiveContext.Provider>
      </SecondsContext.Provider>
    </div>
  );
}

export default App;
