import React from "react";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Avatar,
  Backdrop,
  CircularProgress,
  Container,
  IconButton,
} from "@mui/material";
import SimpleBackdrop from "./components/ui/Modal";

function App() {
  return (
    <React.Fragment>
      <SimpleBackdrop />
      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
