import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Preferences from './components/Preferences/Preferences'

function App() {
const [token , setToken] = useState();
if(!token){
  return < Login setToken={setToken}/>
}
  return (
    <div className='path'>
      <h2>Welcome</h2>
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/preferences" element={<Preferences />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
