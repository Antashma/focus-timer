import Timer from "./components/Timer/Timer.jsx"
import FocusText from "./components/Text/FocusText.jsx"
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>focus timer</h1>
        <p id="currentTimeAndDate">01:55PM 10/19/2024</p>
      </header>

      <main>
        <Timer />
        <FocusText />
      </main>

      <footer>
        <p>Created with ♥ by devantashma</p>
      </footer>
    </>
  )
}

export default App
