import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/navbar";

import About from "./components/about";
import Home from "./components/home";
import Contact from "./components/contact";
import House from "./components/house";
import Apartment from "./components/apartment";
import Plot from "./components/plot";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/house" element={<House />} />
          <Route path="/plot" element={<Plot />} />
          <Route path="/apartment" element={<Apartment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
