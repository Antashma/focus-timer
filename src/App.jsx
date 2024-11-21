import Timer from "./components/Timer/Timer.jsx"
import FocusText from "./components/Text/FocusText.jsx"
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>focus time</h1>
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
