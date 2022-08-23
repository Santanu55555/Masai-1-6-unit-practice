import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Stopwatch = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [milisec, setMilisec] = useState(0);
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    let id = null;
    if (timer) {
      id = setInterval(() => {
        if (milisec < 100) {
          setMilisec((prevMs) => prevMs + 1);
        }
        if (milisec === 99) {
          setMilisec(0);
          if (sec < 59) {
            setSec((prevSec) => prevSec + 1);
          } else {
            setMin((prevMin) => prevMin + 1);
            setSec(0);
          }
        }
      }, 10);
    } else {
      clearInterval(id);
    }

    return () => {
      clearInterval(id);
    };
  }, [timer, sec, milisec]);

  return (
    <>
      <div className={styles.time}>
        <span>{min < 10 ? `0${min}` : min}</span>m:
        <span>{sec < 10 ? `0${sec}` : sec}</span>s:
        <span>{milisec < 10 ? `0${milisec}` : milisec}</span>ms
      </div>
      <div className={styles.btn}>
        {timer ? (
          <button onClick={() => setTimer(false)}>Stop</button>
        ) : (
          <button onClick={() => setTimer(true)}>Start</button>
        )}

        <button
          onClick={() => {
            setMin(0);
            setSec(0);
            setMilisec(0);
            setTimer(false);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default Stopwatch;
