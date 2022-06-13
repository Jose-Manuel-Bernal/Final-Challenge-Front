import React from "react";
import ProviderForm from "../components/provider/ProviderForm";
import ProviderList from "../components/provider/ProviderList";

const ProvidersPage = () => {
  return (
    <div>
      <div>
        <h1>Providers</h1>
        <br />
        <br />
        <br />
      </div>
      <div>
        <ProviderForm />
        <br />
        <br />
        <ProviderList />
      </div>
    </div>
  );
};

export default ProvidersPage;
