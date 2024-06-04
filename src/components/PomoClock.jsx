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
  currStageRef,
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
          currStageRef,
          timeSettings,
          isShortBreak.current
        );
      }
    }
  });
};

// Function that resets the temporizer and, simultaneously, the stage on the pomoNav
const resetTimeForNewStage = (
  setMin,
  setSec,
  currStageRef,
  timeSettings,
  isShort
) => {
  setSec(0);
  if (currStageRef.current === "pomodoro") {
    if (isShort) {
      setMin(timeSettings.shortBreak);
      currStageRef.current = "shortBreak";
    } else {
      setMin(timeSettings.longBreak);
      currStageRef.current = "longBreak";
    }
  } else {
    setMin(timeSettings.pomodoro);
    currStageRef.current = "pomodoro";
  }
};

export default function PomoClock() {
  const { globalColor } = useContext(ColorContext);
  const { timeSettingsRef } = useContext(TimeSettingsContext);
  const { pomoStageRef } = useContext(PomoStageContext);

  const [minutes, setMinutes] = useState(parseInt(timeSettingsRef.pomodoro));
  const [seconds, setSeconds] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);

  usePomodoro(
    pomodoroActive,
    setMinutes,
    setSeconds,
    pomoStageRef,
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
      style={{ border: `10px solid ${globalColor}` }}
    >
      <h1 className={styles.pomoTime}>
        {numberFormator(minutes)}:{numberFormator(seconds)}
      </h1>
      <button
        type="button"
        className={styles.pauseButton}
        onClick={handlePomodoroStartPause}
      >
        {pomodoroActive ? "PAUSE" : "START"}
      </button>
    </div>
  );
}
