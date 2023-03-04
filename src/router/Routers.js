import React from "react";
import { Route, Routes } from "react-router";
import Contact from "../components/Contact";
import Home from "../components/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contacto" element={<Contact />} />
    </Routes>
  );
};

export default Routers;
