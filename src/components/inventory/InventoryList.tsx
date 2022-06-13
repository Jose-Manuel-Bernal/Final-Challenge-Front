import React, { useState } from "react";
import { useSelector } from "react-redux";
import { storeType } from "../../state/store";
import InventoryCard from "./InventoryCard";
import CardGroup from "react-bootstrap/CardGroup";
import { Inventory } from "../../state/entitiesInterfaces/interface";

function InventoryList() {
  const inventories = useSelector((state: storeType) => state.inventories);

  return (
    <div className="container pt-4 pb-2">
      <h3>Inventory List</h3>
      <CardGroup>
        {inventories.map((inventory: Inventory) => (
          <InventoryCard inventory={inventory} />
        ))}
      </CardGroup>
    </div>
  );
}

export default InventoryList;
