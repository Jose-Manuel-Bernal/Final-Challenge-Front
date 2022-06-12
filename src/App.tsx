import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import BillsPage from "./pages/bill/BillsPage";
import InventoryPage from "./pages/inventory/InventoryPage";
import ProductsPage from "./pages/product/ProductsPage";
import ReceiptsPage from "./pages/receipt/ReceiptsPage";
import ProvidersPage from "./pages/provider/ProvidersPage";

function App() {
  return (
    <div>
      {/* <nav className="navbar">
        <Link to="/"></Link>
      </nav> */}
      {/* <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/bill" element={<BillsPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/provider" element={<ProvidersPage />} />
        <Route path="/receipt" element={<ReceiptsPage />} />
      </Routes> */}
    </div>
  );
}

export default App;
