import { useState } from "react"
import Counter from "./Counter.jsx"

const App = () => {

  const [name, setName] = useState('Vivek')
  const handleName = ()=> {
    setName("Avantika");
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleName}>Change name</button>
      <Counter />
    </div>
  )
}

export default App
