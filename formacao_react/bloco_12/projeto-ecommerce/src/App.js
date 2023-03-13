import React, { Fragment } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./routes/Cart";
import Home from "./routes/Home";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <ToastContainer />
    </Fragment>
  );
}

export default App;
