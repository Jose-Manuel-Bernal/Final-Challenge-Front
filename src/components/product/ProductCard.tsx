import React, { useState } from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProduct,
  updateProvider,
} from "../../state/controllers/productController";
import { Product, Provider } from "../../state/entitiesInterfaces/interface";
import { deleteProduct, updateProduct } from "../../state/slices/productSlice";
import InputGroup from "react-bootstrap/InputGroup";
import { RootState } from "../../state/store";

type productProps = {
  product: Product;
};

const ProductCard: React.FC<productProps> = ({ product }) => {
  const dispatch = useDispatch();

  const providers = useSelector((state: RootState) => state.providers);

  const [providerIdToChange, setProviderIdToChange] = useState("");

  const deleteBtn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    prod: Product
  ) => {
    event.preventDefault();
    const status = await removeProduct(product);
    if (status === 200) {
      dispatch(deleteProduct(prod));
    }
  };

  const changeBtn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    prod: Product
  ) => {
    event.preventDefault();

    let providerToChange = providers.find(
      (provider) => provider.id === providerIdToChange
    );

    if (providerToChange) {
      const productToUpdate: Product = {
        ...prod,
        provider: providerToChange,
      };
      let productUpdated = await updateProvider(productToUpdate);
      dispatch(updateProduct(productUpdated));
    }
  };

  const changingProvider = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProviderIdToChange(e.currentTarget.value);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Provided by: {product.provider.name}
        </Card.Subtitle>
        <Card.Text>{product.price} $</Card.Text>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">Change provider</InputGroup.Text>
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={(e) => changeBtn(e, product)}
          >
            Change
          </Button>
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
        </InputGroup>
        <br />
        <Button
          variant="outline-danger"
          onClick={(event) => deleteBtn(event, product)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
