import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import ReceiptCard from "./ReceiptCard";
import CardGroup from "react-bootstrap/CardGroup";
import { Receipt } from "../../state/entitiesInterfaces/interface";

function ReceiptList() {
  const receiptList = useSelector(
    (state: RootState) => state.receipts.receiptList
  );

  return (
    <div>
      <h3>Receipt List</h3>
      <CardGroup>
        {receiptList.map((receipt: Receipt) => (
          <ReceiptCard receipt={receipt} key={receipt.id} />
        ))}
      </CardGroup>
    </div>
  );
}

export default ReceiptList;
