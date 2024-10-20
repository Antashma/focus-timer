import { useState, useEffect } from "react";
import "./FocusText.css"


const initialTextState = "Focusing";

function FocusText() {
  const [text, setText] = useState(initialTextState)

  return (
    <>
        <section id="sessionFocus">
            <input id="focusTextInput" type="text" />
        </section>
    </>
  )
}

export default FocusText;
