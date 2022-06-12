import React from "react";
import { useState, useEffect } from "react";
import { providersSlice } from "../../features/providerSlice";
import ProviderComponent from "./ProviderComponent";

function providerList() {
  const [provider, setProvider] = useState([]);
  const providers = () => {};

  providers();

  // const providerView = provider.map((prov) => {
  //   return <ProviderComponent />;
  // });
  return (
    <div>
      <h1>Providers</h1>
    </div>
  );
}

export default providerList;
