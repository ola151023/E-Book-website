import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogIn from './Components/LogIn'
import AppRouter from './AppRouter.jsx'
import NavBar from './Components/GENERAL/NavBar.jsx'

import { BrowserRouter as Router } from 'react-router-dom'; 
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <NavBar />
    <AppRouter />
  </Router>
  )
}

export default App
