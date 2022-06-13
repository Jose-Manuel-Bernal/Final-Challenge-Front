import React from "react";
import { useDispatch } from "react-redux";
import { Provider } from "../../state/entitiesInterfaces/interface";
import { removeProvider } from "../../state/services/providerService";
import { deleteProvider } from "../../state/slices/providerSlice";

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
    <div>
      <div className="card-provider">
        <h4 className="card-provider-name">{provider.name}</h4>
        <h4 className="card-provider-phn">{provider.phoneNumber}</h4>
        <button
          className="btn btn-danger"
          onClick={(event) => deleteBtn(event, provider)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProviderComponent;
