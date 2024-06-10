import { useContext, useEffect, useRef } from "react";
import styles from "../styles/pomoClock.module.css";
import {
  ColorContext,
  TimeSettingsContext,
  PomoStageContext,
  MinutesContext,
  ActiveContext,
  SecondsContext,
} from "../App.js";
import { colorTranslator } from "./config/components/ColorInput.jsx";
import { sound } from "../Functions/sound.js";

const useMyHook = (callBack, delay = 1000) => {
  const savedCallBack = useRef();

  useEffect(() => {
    savedCallBack.current = callBack;
  }, [callBack]);

  useEffect(() => {
    const interval = setInterval(() => {
      savedCallBack.current();
    }, delay);
    return () => clearInterval(interval);
  }, [delay]);
};

const numberFormator = (number, size = 2) => {
  return String(number).padStart(size, "0");
};

const usePomodoro = (
  isActive,
  setMin,
  setSec,
  currPomoState,
  setPomoState,
  seconds,
  minutes,
  timeSettings,
  pomosCompletedForLong
) => {
  let pomosCompleted = useRef(0);
  let stagesCounter = useRef(1);
  let isShortBreak = useRef(true);

  useMyHook(() => {
    if (isActive) {
      setSec((sec) => sec - 1);
      if (seconds === 0) {
        setMin((min) => min - 1);
        setSec(59);
      }

      if (minutes === 0 && seconds === 0) {
        sound.play();
        // Condition that is triggered at the end of a stage

        if (stagesCounter.current % 2 !== 0) {
          // condition meaning: if the currentStage is pomodoro
          pomosCompleted.current += 1;

          // condition meaning: if is longBreak in the short/long intercalation
          if (pomosCompleted.current % pomosCompletedForLong === 0) {
            isShortBreak.current = false;
          } else {
            isShortBreak.current = true;
          }
        }

        stagesCounter.current += 1;

        resetTimeForNewStage(
          setMin,
          setSec,
          currPomoState,
          setPomoState,
          timeSettings,
          isShortBreak.current
        );
      }
    }
  }, 3);
};

// Function that resets the temporizer and, simultaneously, the stage on the pomoNav
const resetTimeForNewStage = (
  setMin,
  setSec,
  currPomoState,
  setPomoState,
  timeSettings,
  isShort
) => {
  setSec(0);
  const booleanAlternate = isShort ? "shortBreak" : "longBreak";
  switch (currPomoState) {
    case "pomodoro":
      setMin(timeSettings[`${booleanAlternate}`]);
      setPomoState(booleanAlternate);
      break;

    default:
      setMin(timeSettings.pomodoro);
      setPomoState("pomodoro");
      break;
  }
};

export default function PomoClock() {
  const globalColor = useContext(ColorContext);
  const { timeSettingsRef } = useContext(TimeSettingsContext);
  const { pomoState, setPomoState } = useContext(PomoStageContext);
  const { minutes, setMinutes } = useContext(MinutesContext);
  const { seconds, setSeconds } = useContext(SecondsContext);
  const { pomodoroActive, setPomodoroActive } = useContext(ActiveContext);

  usePomodoro(
    pomodoroActive,
    setMinutes,
    setSeconds,
    pomoState,
    setPomoState,
    seconds,
    minutes,
    timeSettingsRef,
    3
  );

  const handlePomodoroStartPause = () => {
    setPomodoroActive((prevActive) => !prevActive);
  };

  return (
    <div
      className={styles.pomoClock}
      style={{ border: `10px solid ${colorTranslator(globalColor.current)}` }}
    >
      <p className={styles.pomoTime}>
        {numberFormator(minutes)}:{numberFormator(seconds)}
      </p>
      <button
        type="button"
        className={styles.pauseButton}
        onClick={() => handlePomodoroStartPause()}
      >
        {pomodoroActive ? "PAUSE" : "START"}
      </button>
    </div>
  );
}
