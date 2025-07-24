
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  // const api = import.meta.env.VITE_CLAUDE_API

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App