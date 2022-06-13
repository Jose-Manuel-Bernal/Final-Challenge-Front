import React from "react";
import InventoryForm from "../components/inventory/InventoryForm";
import InventoryList from "../components/inventory/InventoryList";

const InventoryPage = () => {
  return (
    <div>
      <div>
        <h1>Inventory</h1>
        <br />
        <br />
        <br />
      </div>
      <div>
        <InventoryForm />
        <br />
        <br />
        <InventoryList />
      </div>
    </div>
  );
};

export default InventoryPage;
