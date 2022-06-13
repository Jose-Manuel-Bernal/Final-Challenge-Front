import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "../../state/entitiesInterfaces/interface";
import { storeType } from "../../state/store";
import ProviderComponent from "./ProviderComponent";

function ProviderList() {
  const providers = useSelector((state: storeType) => state.providers);

  return (
    <div>
      <h2>Providers list</h2>
      {providers.map((provider: Provider) => (
        <ProviderComponent provider={provider} />
      ))}
    </div>
  );
}

export default ProviderList;
