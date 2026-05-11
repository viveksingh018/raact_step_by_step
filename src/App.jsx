import Login,{Profile,Setting, userKey} from './UserLogin'
const App = () => {
  return (
    <div>
      <Login />
      <Profile />
      <Setting />
      <h1>{userKey}</h1>
    </div>
  )
}

export default App
