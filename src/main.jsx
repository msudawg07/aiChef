import { StrictMode } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        {/* <Route path='/recipes' element={<Recipes/>} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
