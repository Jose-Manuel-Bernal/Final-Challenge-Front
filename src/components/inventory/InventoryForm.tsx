import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import Button from "react-bootstrap/Button";
import { Inventory, Product } from "../../state/entitiesInterfaces/interface";
import { SaveInventory } from "../../state/controllers/inventoryController";
import { addNewInventory } from "../../state/slices/inventorySlice";

interface IProps {}

const InventoryForm: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const productList = ({} = useSelector(
    (state: RootState) => state.products.productList
  ));

  const [minInventory, setMin] = useState("");
  const [maxInventory, setMax] = useState("");
  const [stockInventory, setStock] = useState("");
  const [idProductForInventory, setIdProduct] = useState("");

  const addInventory = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let productForInventory = productList.find(
      (product: Product) => product.id === idProductForInventory
    );
    if (minInventory && maxInventory && stockInventory && productForInventory) {
      const inventoryToSave: Inventory = {
        min: parseInt(minInventory),
        max: parseInt(maxInventory),
        stock: parseInt(stockInventory),
        product: productForInventory,
      };
      let inventorySaved = await SaveInventory(inventoryToSave);
      dispatch(addNewInventory(inventorySaved));
      setMin("");
      setMax("");
      setStock("");
      setIdProduct("");
    }
  };

  const addingMinimum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMin(e.target.value);
  };

  const addingMaximum = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(e.target.value);
  };

  const addingStock = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStock(e.target.value);
  };

  const changingProduct = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdProduct(e.target.value);
  };

  return (
    <Form>
      <div className="container pt-4 pb-2">
        <div>
          <h3>Add new inventory</h3>
        </div>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Minimum:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the minimum"
            onChange={addingMinimum}
            value={minInventory}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Maximum:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the maximum"
            onChange={addingMaximum}
            value={maxInventory}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Stock:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the maximum"
            onChange={addingStock}
            value={stockInventory}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Product:</Form.Label>
          <Form.Select
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={(e) => changingProduct(e)}
          >
            <option value="" key={"..."}>
              ...
            </option>
            {productList.map((product: Product) => {
              return (
                <option value={product.id} key={product.id}>
                  {product.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Text className="text-muted">
            Select the provider for the product
          </Form.Text>
        </Form.Group>

        <Button variant="outline-primary" size="lg" onClick={addInventory}>
          Add inventory
        </Button>
      </div>
    </Form>
  );
};

export default InventoryForm;
