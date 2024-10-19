import Time from "./Time";
import { useEffect, useState } from "react";
import presetTimers from "../../data/timer";
import "./style.css";

const initialTimer = {
    id: 1,
    name: "10 minute",
    duration: 10
}

function Timer() {
    const [timer, setTimer] = useState(initialTimer)
    const [timerIsOn, setTimerIsOn] = useState(false)
    const [currentDuration, setCurrentDuration] = useState({minutes: timer.duration, seconds:0});

    const displayPresetTimers = presetTimers.map(preset => {
        return <button className={`timer--preset-btn ${timer.id === preset.id ? "selected" : ""}`} id={preset.id} key={preset.id} onClick={() => setTimer(preset)}>{preset.name}</button>
    })

    useEffect(() => {
        setCurrentDuration({minutes: timer.duration, seconds: 0})
    }, [timer])

    return (
        <div className="timer--container">

          
                <section className="timer--preset-container">
                    {displayPresetTimers}
                </section>
                <Time 
                    currentDuration={currentDuration}
                    setCurrentDuration={setCurrentDuration}
                    on={timerIsOn}
                    setOn={setTimerIsOn}
                    timerData={timer}
                />

                <section className="timer--timer-btn-container">

                    <button 
                        onClick={() => setTimerIsOn(!timerIsOn)}
                    >
                        {!timerIsOn ? "Start" : "Pause"}
                    </button>

                    <button onClick={() => {
                        setCurrentDuration({minutes: timer.duration, seconds: 0});
                        setTimerIsOn(false); 
                    }}
                    >Stop</button>

                    <button onClick={() => setCurrentDuration({minutes: timer.duration, seconds: 0})}>
                        Reset
                    </button>
                </section>
        </div>
        );
}

export default Timer;