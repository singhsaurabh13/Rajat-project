import { useState } from 'react'

import './App.css'
import Navbar from './Component/NAvbar'
import {Outlet} from 'react-router-dom'
import Footer from './Component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
         </>
  )
}

export default App
