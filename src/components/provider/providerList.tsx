import React from "react";
import { useSelector } from "react-redux";
import { Provider } from "../../state/entitiesInterfaces/interface";
import { RootState } from "../../state/store";
import ProviderComponent from "./ProviderComponent";
import CardGroup from "react-bootstrap/CardGroup";

function ProviderList() {
  const providers = useSelector((state: RootState) => state.providers);

  return (
    <div className="container pt-4 pb-2">
      <h3>Providers list</h3>
      <CardGroup>
        {providers.map((provider: Provider) => (
          <ProviderComponent provider={provider} key={provider.id} />
        ))}
      </CardGroup>
    </div>
  );
}

export default ProviderList;
