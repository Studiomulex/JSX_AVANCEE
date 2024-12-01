import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Survey from "./pages/Survey/Survey.jsx";
import Header from "./components/Header/Header.jsx";
// j'ajoute mes composants
import Client from "./components/Clients/Client.jsx";
import FreelanceForm from "./components/FreelanceForm/FreelanceForm.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* j'imbrique cela dans survey */}
        <Route path="/Survey" element={<Survey />}>
          <Route path="Client" element={<Client />}></Route>
          <Route path="Freelances" element={<FreelanceForm />}></Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
