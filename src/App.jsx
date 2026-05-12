import React from 'react'
function fruit(name) {
  alert("outer function")
}

const App = () => {

  // function fruit(name) {
  //   alert("inner function")
  // }

  return (
    <div>
      <button onClick={() => fruit('Apple')}>Apple</button>
      <button onClick={() => fruit('Banana')}>Banana</button>
    </div>
  )
}

export default App
