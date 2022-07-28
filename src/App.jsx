import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Series from "./components/Series";
import SeriesProvider from "./contexts/SeriesContext"
import "./App.css";

function App() {
  return (
    <div className="App">
      <SeriesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/series" element={<Series />} />
          </Routes>
        </Router>
      </SeriesProvider>
    </div>
  );
}

export default App;
