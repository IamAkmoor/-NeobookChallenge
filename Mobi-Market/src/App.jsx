import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SidebarBackground from './components/SidebarBackground'
import SignUp from './components/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="app__body">
        <div className="login">
          <div className="login__container">
            <SidebarBackground/>
            <Login/>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
