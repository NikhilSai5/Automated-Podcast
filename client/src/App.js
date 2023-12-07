import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Summery from "./Pages/Summery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summery" element={<Summery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
