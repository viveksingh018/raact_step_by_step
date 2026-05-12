

const App = () => {

  const userName = "";
  let x = 20;
  let y = 30;

  function operation(a, b, oppr) {
    if (oppr === "=") {
      return a + b
    } else if (oppr === "-") {
      return a - b
    } else {
      return a * b;
    }
  }

  return (
    <div>
      <h1>{userName ? userName : 'userNotFound'}</h1>
      <h1>{x + y}</h1>
      <button onClick={() => alert("Hii Vivek")}>Click</button>
      <h1>{operation(10, 4, "-")}</h1>
    </div>
  )
}

export default App
