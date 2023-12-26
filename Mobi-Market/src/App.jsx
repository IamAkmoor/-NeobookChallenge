import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import SidebarBackground from './components/SidebarBackground'
import SignUp from './components/SignUp'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="app__body">
          <SidebarBackground/>
          {/* <Login/> */}
          <SignUp/>
      </div>
    </div>
  )
}

// I STOPPED HERE TO FIGURE OUT REACT ROUTER 

export default App
