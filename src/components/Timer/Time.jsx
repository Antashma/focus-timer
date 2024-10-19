import { useEffect } from "react"

function Time(props) {
  const {timerData, currentDuration, setCurrentDuration, on, setOn } = props;

  useEffect(() => {
    let timer;
    const docTitle = document.querySelector("title")
    if (on) {
      docTitle.textContent = displayTime(currentDuration)

      timer = setInterval(() => {
        countDown(currentDuration)
      }, 1000)
    } else if (!on) {
      docTitle.textContent = "Pomodoro Timer";
    }

    return () => clearInterval(timer)
  }, [on, currentDuration])


  function countDown({minutes, seconds}) {
    let newMinutes = minutes;
    let newSeconds = seconds;
    if (minutes === 0 && seconds === 0) {
      setOn(false)
    } else if (seconds === 0) { 
      newSeconds = 59;
      newMinutes -= 1;
    } else newSeconds -= 1
    setCurrentDuration({seconds: newSeconds, minutes: newMinutes})
  } 

  function displayTime(currentDuration) {
    const hoursSection = currentDuration.minutes < 10 ? "0" + currentDuration.minutes : currentDuration.minutes;
    const minutesSection = currentDuration.seconds < 10 ? "0" + currentDuration.seconds : currentDuration.seconds;
    return `${hoursSection}:${minutesSection}`;
  }

  return ( 
    <p className="time--container">{displayTime(currentDuration)}</p>
    );
}

export default Time;