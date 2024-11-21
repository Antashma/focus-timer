import { useEffect, useState } from "react"

const initialDocTitle = document.querySelector("title").textContent;

function Time(props) {
  const {timerData, currentDuration, setCurrentDuration, on, setOn } = props;
  const [docTitle, setDocTitle] = useState(initialDocTitle)

  useEffect(() => {
    let endTime = Date.now() + currentDuration * 1000;
    let timer;
    if (on) {
      document.title = "Focusing... " + displayTime(currentDuration);
      timer = setInterval(() => {
        const now = Date.now()
        const newTimeLeft = Math.max(Math.round((endTime - now)/1000), 0);
        countDown(newTimeLeft)
      }, 1000)

    } else if (!on) {
      document.title = initialDocTitle;
    }

    return () => clearInterval(timer)
  }, [on, currentDuration])

  function countDown(timeLeftInSec) {
    if (timeLeftInSec === 0) setOn(false)
    setCurrentDuration(timeLeftInSec)
  } 

  function displayTime(currentDuration) {
    const minutes = Math.floor(currentDuration/60);
    const seconds = currentDuration%60;
    const minutesSection = minutes < 10 ? "0" + minutes : minutes;
    const secondsSection = seconds < 10 ? "0" + seconds : seconds;

    if(minutes <= 1) document.querySelector(".time--container").style.color = "pink";
    else document.querySelector(".time--container").style.color = "black";

    return `${minutesSection}:${secondsSection}`;
  }

  return ( 
    <p className="time--container">{displayTime(currentDuration)}</p>
    );
}

export default Time;