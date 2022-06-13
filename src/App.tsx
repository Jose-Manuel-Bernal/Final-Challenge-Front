import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import BillsPage from "./pages/BillsPage";
import InventoryPage from "./pages/InventoryPage";
import ProductsPage from "./pages/ProductsPage";
import ReceiptsPage from "./pages/ReceiptsPage";
import ProvidersPage from "./pages/ProvidersPage";
import NavigationBar from "./components/visualComponents/NavigationBar";
import { useDispatch } from "react-redux";
import { getProviders } from "./state/controllers/providerController";
import { getAllProviders } from "./state/slices/providerSlice";
import { getProducts } from "./state/controllers/productController";
import { getAllProducts } from "./state/slices/productSlice";
import { getAllInventories } from "./state/slices/inventorySlice";
import { getInventories } from "./state/controllers/inventoryController";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getProviders().then((providers) => {
      dispatch(getAllProviders(providers));
    });
    getProducts().then((products) => {
      dispatch(getAllProducts(products));
    });
    getInventories().then((inventories) => {
      dispatch(getAllInventories(inventories));
    });
  }, []);

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
