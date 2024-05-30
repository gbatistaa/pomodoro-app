import { createContext, useState } from "react";
import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoNav from "./components/PomoNav";
import PomoConfig from "./components/config/components/PomoConfig";

export const ColorContext = createContext();
export const TimeContext = createContext();

function App() {
  const [globalColor, setGlobalColor] = useState("#f87070");
  const [timeState, setTimeState] = useState("longBreak");

  return (
    <div className="App">
      <h1 className="app-title">pomodoro</h1>
      <TimeContext.Provider value={{ timeState, setTimeState }}>
        <ColorContext.Provider value={{ globalColor, setGlobalColor }}>
          <PomoNav />
          <PomoClock />
          <PomoConfig />
        </ColorContext.Provider>
      </TimeContext.Provider>
    </div>
  );
}

export default App;
