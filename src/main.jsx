import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Survey from "./pages/Survey/Survey.jsx";
import Header from "./components/Header/Header.jsx";
import Results from "./pages/Results/Result.jsx";
import Freelances from "./pages/Freelances/Freelance.jsx";
import Error from "./components/Error/Error.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { ThemeProvider } from "./utils/Context/index.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Survey/:questionNumber" element={<Survey />}></Route>
        <Route path="/Result" element={<Results />}></Route>
        <Route path="/Freelances" element={<Freelances />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
     </ThemeProvider>
    </Router>
  </StrictMode>
);
