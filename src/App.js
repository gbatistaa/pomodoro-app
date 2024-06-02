import { createContext, useState, useReducer } from "react";
import "./App.css";
import PomoClock from "./components/PomoClock";
import PomoNav from "./components/PomoNav";
import PomoConfig from "./components/config/components/PomoConfig";

export const ColorContext = createContext();
export const PomoStageContext = createContext();
export const TimeSettingsContext = createContext();

function App() {
  const [globalColor, setGlobalColor] = useState("#f87070");
  const [pomoStage, setPomoStage] = useState("pomodoro");

  const initialTimeState = {
    pomodoro: 25,
    shortBreak: 5,
    longBreak: 10,
  };

  const reducer = (state, { type, increase }) => {
    switch (type) {
      case "set-pomodoro":
        console.log(state);
        return {
          ...state,
          pomodoro: increase ? state.pomodoro + 1 : state.pomodoro - 1,
        };

      case "set-shortBreak":
        return {
          ...state,
          shortBreak: increase ? state.shortBreak + 1 : state.shortBreak - 1,
        };

      case "set-longBreak":
        return {
          ...state,
          longBreak: increase ? state.longBreak + 1 : state.longBreak - 1,
        };

      default:
        break;
    }
  };

  const [timeStates, dispatch] = useReducer(reducer, initialTimeState);

  return (
    <div className="App">
      <h1 className="app-title">pomodoro</h1>
      <TimeSettingsContext.Provider value={{ timeStates, dispatch }}>
        <PomoStageContext.Provider value={{ pomoStage, setPomoStage }}>
          <ColorContext.Provider value={{ globalColor, setGlobalColor }}>
            <PomoNav />
            <PomoClock />
            <PomoConfig />
          </ColorContext.Provider>
        </PomoStageContext.Provider>
      </TimeSettingsContext.Provider>
    </div>
  );
}

export default App;
