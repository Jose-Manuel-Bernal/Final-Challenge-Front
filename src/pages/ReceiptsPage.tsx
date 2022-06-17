import React from "react";
import ReceiptForm from "../components/receipt/ReceiptForm";
import ReceiptList from "../components/receipt/ReceiptList";

const ReceiptsPage = () => {
  return (
    <div>
      <div>
        <h1>Receipts</h1>
        <br />
        <br />
        <br />
      </div>
      <div>
        <ReceiptForm />
        <br />
        <br />
        <ReceiptList />
      </div>
    </div>
  );
};

export default ReceiptsPage;
