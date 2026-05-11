import React from 'react'

const App = () => {

  const userName = "Vivek Singh";
  let x = 20;
  let y = 30;


  return (
    <div>
      <h1>{userName}</h1>
      <h1>{x + y}</h1>
      <button onClick={()=>alert("Hii Vivek")}>Click</button>
    </div>
  )
}

export default App
