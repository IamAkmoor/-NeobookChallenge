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
        
            <SignUp/>
            
       
      </div>
    </div>
  )
}

export default App
