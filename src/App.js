import React from "react";
import Home from "./Home";
import Cartpage from "./Cartpage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cartpage" element={<Cartpage />} />
      </Routes>
    </>
  );
};

export default App;
