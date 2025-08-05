import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./Home";
import Country from "./Country";
import State from "./State";
import District from "./District";

function App() {
  return (
    <BrowserRouter>
      {/* ✅ Navbar with Dark Grey Background & Professional Font */}
      <nav className="navbar navbar-expand-lg px-4 custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold text-white" to="/home">MyApp</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/country">Country</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/state">State</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white fw-semibold" to="/district">District</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ✅ Page Content */}
      <div className="container mt-4">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/country" element={<Country />} />
          <Route path="/state" element={<State />} />
          <Route path="/district" element={<District />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
