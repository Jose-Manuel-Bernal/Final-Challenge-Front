import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  Receipt,
  Product,
  Provider,
  Inventory,
} from "../../state/entitiesInterfaces/interface";
import Button from "react-bootstrap/Button";
import { RootState } from "../../state/store";
import { saveReceipt } from "../../state/controllers/receiptController";
import { addNewReceipt } from "../../state/slices/receiptSlice";
import { Alert } from "react-bootstrap";
import { updateInventory } from "../../state/controllers/inventoryController";
import { updateInventoryState } from "../../state/slices/inventorySlice";

interface IProps {}

const ReceiptForm: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const inventories = useSelector(
    (state: RootState) => state.inventories.inventoryList
  );

  const [idInventory, setIdInventory] = useState("");
  const [amount, setAmount] = useState("");
  const [fullAlert, setFullAlert] = useState(false);

  const changingInventory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdInventory(e.currentTarget.value);
  };

  const addingAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.currentTarget.value);
  };

  const addReceipt = async () => {
    let inventoryForChange = inventories.find(
      (inventory) => inventory.id === idInventory
    );
    let amountToUpdate = parseFloat(amount);
    let stockToUpdate: number = amountToUpdate + inventoryForChange!.stock;
    if (inventoryForChange) {
      const receiptToSave: Receipt = {
        product: inventoryForChange.product,
        amount: amountToUpdate,
      };
      const inventoryToUpdate: Inventory = {
        ...inventoryForChange,
        stock: stockToUpdate,
      };
      let receiptSaved = await saveReceipt(receiptToSave);
      dispatch(addNewReceipt(receiptSaved));
      let inventorySaved = await updateInventory(inventoryToUpdate);
      dispatch(updateInventoryState(inventorySaved));

      setIdInventory("");
      setAmount("");
      setFullAlert(false);
    }
  };

  const submitValidate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inventoryFiltered = inventories.find(
      (inventory) => inventory.id === idInventory
    );
    const flagForm =
      amount &&
      parseFloat(amount) + inventoryFiltered!.stock < inventoryFiltered!.max;
    setFullAlert(!flagForm);
    if (flagForm) {
      addReceipt();
    }
  };

  return (
    <Form onSubmit={(e) => submitValidate(e)}>
      <div className="container pt-4 pb-2">
        <div>
          <h3>Add new receipt</h3>
        </div>
        <br />
        <Form.Group>
          <Form.Label>Product from inventory:</Form.Label>
          <Form.Select
            name="selectInput"
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={(e) => changingInventory(e)}
          >
            <option value="" key={"..."}>
              ...
            </option>
            {inventories.map((inventory) => {
              return (
                <option value={inventory.id} key={inventory.id}>
                  {inventory.product.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Text className="text-muted">Select the product</Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Amount:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the amount"
            onChange={addingAmount}
            value={amount}
            required
            name="amountInput"
          />
          <Form.Text className="text-muted">
            Write the amount of unities
          </Form.Text>
        </Form.Group>
        <br />
        <Alert variant="warning" show={fullAlert}>
          Stock above maximum capability
        </Alert>

        <Button
          variant="outline-primary"
          size="lg"
          onSubmit={addReceipt}
          type={"submit"}
        >
          Add receipt
        </Button>
      </div>
    </Form>
  );
};

export default ReceiptForm;
