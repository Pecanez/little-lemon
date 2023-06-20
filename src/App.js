import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import About from "./routes/About";
import Menu from "./routes/Menu";
import ReservationsSuccess from "./routes/ReservationsSuccess";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations-success" element={<ReservationsSuccess />} />
      </Routes>
    </>
  );
}

export default App;
