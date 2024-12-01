import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Survey from './pages/Survey/Survey.jsx'
import Header from './components/Header/Header.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <Header/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Survey" element={<Survey/>}></Route>
       </Routes>
    </Router>
  </StrictMode>,
)
