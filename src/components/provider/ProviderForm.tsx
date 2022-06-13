import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Provider } from "../../state/entitiesInterfaces/interface";
import Button from "react-bootstrap/Button";
import { saveProvider } from "../../state/controllers/providerController";
import { addNewProvider } from "../../state/slices/providerSlice";

interface IProps {}

const ProviderForm: React.FC<IProps> = () => {
  const dispatch = useDispatch();

  const [providerName, setProviderName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const addingName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProviderName(e.target.value);
  };

  const addingNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const addProvider = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (providerName && phoneNumber) {
      const providerToSave: Provider = {
        name: providerName,
        phoneNumber: phoneNumber,
      };
      let providerSaved = await saveProvider(providerToSave);
      dispatch(addNewProvider(providerSaved));
      setProviderName("");
      setPhoneNumber("");
    }
  };

  return (
    <Form>
      <div className="container pt-4 pb-2">
        <div>
          <h3>Add new provider</h3>
        </div>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={addingName}
            value={providerName}
            required
          />
          <Form.Text className="text-muted">
            Write the name of the provider
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the phone number"
            onChange={addingNumber}
            value={phoneNumber}
            required
          />
          <Form.Text className="text-muted">
            Write the phone number of the provider
          </Form.Text>
        </Form.Group>
        <Button variant="outline-primary" size="lg" onClick={addProvider}>
          Add provider
        </Button>
      </div>
    </Form>
  );
};

export default ProviderForm;
