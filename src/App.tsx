import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import BillsPage from "./pages/bill/BillsPage";
import InventoryPage from "./pages/inventory/InventoryPage";
import ProductsPage from "./pages/product/ProductsPage";
import ReceiptsPage from "./pages/receipt/ReceiptsPage";
import ProvidersPage from "./pages/provider/ProvidersPage";
import NavigationBar from "./components/visualComponents/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/bill" element={<BillsPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/provider" element={<ProvidersPage />} />
        <Route path="/receipt" element={<ReceiptsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
