import { useState } from 'react'
import './App.css'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="app__body">
        <Login/>
      </div>
    </div>

  )
}

export default App
