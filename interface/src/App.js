import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landingPage.js";
import Navbar from "./components/navbar.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" />
        <Route path="/register" />
      </Routes>
    </Router>
  );
}

export default App;
