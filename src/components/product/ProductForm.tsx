import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Provider, Product } from "../../state/entitiesInterfaces/interface";
import Button from "react-bootstrap/Button";
import { storeType } from "../../state/store";
import { saveProduct } from "../../state/controllers/productController";
import { addNewProduct } from "../../state/slices/productSlice";

interface IProps {}

const ProductForm: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const providers = useSelector((state: storeType) => state.providers);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [idProviderForProduct, setIdProvider] = useState("");

  const addingName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value);
  };

  const addingPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const changingProvider = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdProvider(e.currentTarget.value);
  };

  const addProduct = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let providerForProduct = providers.find(
      (provider) => provider.id === idProviderForProduct
    );
    if (productName && price && providerForProduct) {
      const productToSave: Product = {
        name: productName,
        price: parseFloat(price),
        provider: providerForProduct,
      };
      let productSaved = await saveProduct(productToSave);
      dispatch(addNewProduct(productSaved));
      setProductName("");
      setPrice("");
      setIdProvider("");
    }
  };

  return (
    <Form>
      <div className="container pt-4 pb-2">
        <div>
          <h3>Add new product</h3>
        </div>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={addingName}
            value={productName}
            required
          />
          <Form.Text className="text-muted">
            Write the name of the product
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the price"
            onChange={addingPrice}
            value={price}
            required
          />
          <Form.Text className="text-muted">
            Write the price for the provider
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Provider:</Form.Label>
          <Form.Select
            aria-label="Example text with button addon"
            aria-describedby="basic-addon1"
            onChange={(e) => changingProvider(e)}
          >
            <option value="" key={"..."}>
              ...
            </option>
            {providers.map((provider) => {
              return (
                <option value={provider.id} key={provider.id}>
                  {provider.name}
                </option>
              );
            })}
          </Form.Select>
          <Form.Text className="text-muted">
            Select the provider for the product
          </Form.Text>
        </Form.Group>

        <Button variant="outline-primary" size="lg" onClick={addProduct}>
          Add product
        </Button>
      </div>
    </Form>
  );
};

export default ProductForm;
