import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import TimerInput from "./TimerInput";

const Timer = () => {
  const [min, setMin] = useState(5);
  const [sec, setSec] = useState(0);
  const [timer, setTimer] = useState(false);
  const [input, setInput] = useState(false);

  useEffect(() => {
    let id = null;
    if (timer) {
      id = setInterval(() => {
        if (sec > 0) {
          setSec((prevSec) => prevSec - 1);
        }
        if (sec === 0) {
          if (min === 0) {
            clearInterval(id);
          } else {
            setMin((prevMin) => prevMin - 1);
            setSec(59);
          }
        }
      }, 1000);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  });

  return (
    <>
      {input ? (
        <TimerInput setMin={setMin} />
      ) : (
        <div
          className={styles.time}
          onClick={() => {
            setInput(true);
            setTimer(false);
            setSec(0);
          }}
        >
          <span>{min}</span>m:
          <span>{sec < 10 ? `0${sec}` : sec}</span>s
        </div>
      )}
      <div className={styles.btn}>
        {timer ? (
          <button onClick={() => setTimer(false)}>Stop</button>
        ) : (
          <button
            onClick={() => {
              setTimer(true);
              setInput(false);
            }}
          >
            Start
          </button>
        )}

        <button
          onClick={() => {
            setMin(5);
            setSec(0);
            setTimer(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Timer;
