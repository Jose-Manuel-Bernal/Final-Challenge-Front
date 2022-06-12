import React from "react";
import { Provider } from "../../features/interface";
import { providersSlice } from "../../features/providerSlice";

type providerProps = {
  provider: Provider;
};

// const deleteProvider = (provider: Provider) => {
//   dispatch(deleteProviderThunk(provider.id));
// };

const ProviderComponent: React.FC<providerProps> = ({ provider }) => {
  return (
    <div>
      <div className="card-provider">
        <h4 className="card-provider-name">{provider.name}</h4>
        <h4 className="card-provider-phn">{provider.phoneNumber}</h4>
        {/* <button className="btn btn-danger" onClick={deleteProvider(provider)}>
        Delete
      </button> */}
      </div>
    </div>
  );
};

export default ProviderComponent;
