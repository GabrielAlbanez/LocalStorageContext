import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Screens/Home";
import Carrinho from "../Screens/Carrinho";
import Compra from "../Screens/Compra";
import { ValorProvider } from "../context/Valor";

export default function Rotas() {
  return (
    <ValorProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compra" element={<Carrinho />} />
        <Route path="/carrinho" element={<Compra />} />
      </Routes>
    </BrowserRouter>
    </ValorProvider>
  );
}
