import React from "react";
import { useDispatch } from "react-redux";
import { Provider } from "../../state/entitiesInterfaces/interface";
import { removeProvider } from "../../state/controllers/providerController";
import { deleteProvider } from "../../state/slices/providerSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

type providerProps = {
  provider: Provider;
};

const ProviderComponent: React.FC<providerProps> = ({ provider }) => {
  const dispatch = useDispatch();

  const deleteBtn = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    prov: Provider
  ) => {
    event.preventDefault();
    const status = await removeProvider(provider);
    if (status === 200) {
      dispatch(deleteProvider(prov));
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{provider.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Phone Number:</Card.Subtitle>
        <Card.Text>{provider.phoneNumber}</Card.Text>
        <Button
          variant="outline-danger"
          onClick={(event) => deleteBtn(event, provider)}
        >
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProviderComponent;
