import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
       </Routes>
    </Router>
  </StrictMode>,
)
