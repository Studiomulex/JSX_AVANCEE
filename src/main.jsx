import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Survey from './pages/Survey/Survey.jsx'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Router>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/" element={<Survey/>}></Route>
       </Routes>
    </Router>
  </StrictMode>,
)
