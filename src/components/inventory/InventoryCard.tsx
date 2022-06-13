import React, { useState } from "react";
import { Alert, Button, Card, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Inventory } from "../../state/entitiesInterfaces/interface";
import { removeInventory } from "../../state/controllers/inventoryController";
import { deleteInventory } from "../../state/slices/inventorySlice";

type inventoryProps = {
  inventory: Inventory;
};

const InventoryCard: React.FC<inventoryProps> = ({ inventory }) => {
  const dispatch = useDispatch();

  const [minAlert, setMinAlert] = useState(
    inventory.stock <= inventory.min && inventory.stock != 0
  );
  const [emptyAlert, setEmptyAlert] = useState(inventory.stock === 0);
  const [fullAlert, setFullAlert] = useState(inventory.stock === inventory.max);

  const deleteBtn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    inv: Inventory
  ) => {
    event.preventDefault();
    const status = await removeInventory(inventory);
    if (status === 200) {
      dispatch(deleteInventory(inv));
    }
  };

  //   validateMin();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{inventory.product.name}s</Card.Title>
        <Card.Text>
          Min: {inventory.min} Max: {inventory.max}
        </Card.Text>
        <Card.Text>In stock: {inventory.stock}</Card.Text>
        <br />
        <Alert variant="warning" show={minAlert}>
          Stock below the minimum
        </Alert>
        <Alert variant="danger" show={emptyAlert}>
          Stock empty
        </Alert>
        <Alert variant="success" show={fullAlert}>
          Stock at maximum
        </Alert>
        <br />
        <Button
          variant="outline-danger"
          onClick={(event) => deleteBtn(event, inventory)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default InventoryCard;
