import { useContext, useState, useEffect, useRef } from "react";
import styles from "../styles/pomoClock.module.css";
import { ColorContext, TimeSettingsContext, PomoStageContext } from "../App.js";

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
  setStage,
  currStage,
  seconds,
  minutes,
  timeSettings,
  pomosCompletedForLong,
  totalPomos
) => {
  // if the stage is "POMODORO" the stagesCounter will be odd:

  let pomosCompleted = useRef(0);
  let stagesCounter = useRef(1);
  let isShortBreak = useRef(true);
  useMyHook(() => {
    if (isActive) {
      setSec((min) => min - 1);
      if (seconds === 0) {
        setMin((min) => min - 1);
        setSec(59);
      }

      if (minutes === 0 && seconds === 0) {
        //Condition that is triggred at the end of a stage:

        if (stagesCounter.current % 2 !== 0) {
          // condition meaning: if the currentStage is pomodoro
          pomosCompleted.current += 1;

          // condition meaning: if is longBreak in the short/long intercalation:
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
          currStage,
          setStage,
          timeSettings,
          isShortBreak.current
        );
      }
    }
  }, 1000);
};

// function that resets the temporizer and, simuntaniously, the stage on the pomoNav:

const resetTimeForNewStage = (
  setMin,
  setSec,
  currStageName,
  setStage,
  timeSettings,
  isShort
) => {
  setSec(0);
  switch (currStageName) {
    case "pomodoro":
      setMin(timeSettings[`${isShort ? "shortBreak" : "longBreak"}`]);
      if (isShort) setStage("shortBreak");
      else setStage("longBreak");
      break;

    default:
      setMin(timeSettings.pomodoro);
      setStage("pomodoro");
      break;
  }
};

export default function PomoClock() {
  const { globalColor } = useContext(ColorContext);
  const { timeStates } = useContext(TimeSettingsContext);
  const { pomoStage, setPomoStage } = useContext(PomoStageContext);

  const [minutes, setMinutes] = useState(parseInt(timeStates.pomodoro));
  const [seconds, setSeconds] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);

  usePomodoro(
    pomodoroActive,
    setMinutes,
    setSeconds,
    setPomoStage,
    pomoStage,
    seconds,
    minutes,
    timeStates,
    3,
    6
  );

  const handlePomodoroStartPause = () => {
    setPomodoroActive((prevActive) => !prevActive);
  };

  return (
    <div
      className={styles.pomoClock}
      style={{ border: `10px solid ${globalColor}` }}
    >
      <h1 className={styles.pomoTime}>
        {numberFormator(minutes)}:{numberFormator(seconds)}
      </h1>
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
