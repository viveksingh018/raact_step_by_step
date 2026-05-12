import Toggle from "./Toggle"
import { useState } from "react"

const App = () => {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <h1>Toggle in react js</h1>
      <button onClick={() => setDisplay(!display)}>toggle</button>
      {display? <Toggle /> : null}
    </div>
  )
}

export default App;
