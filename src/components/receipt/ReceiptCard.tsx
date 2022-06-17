import React, { useState } from "react";
import { Button, Card, Form, FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Receipt } from "../../state/entitiesInterfaces/interface";
import InputGroup from "react-bootstrap/InputGroup";
import { RootState } from "../../state/store";

type receiptProps = {
  receipt: Receipt;
};

const ReceiptCard: React.FC<receiptProps> = ({ receipt }) => {
  const dispatch = useDispatch();

  const dateForCard = receipt.date;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{receipt.product.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {`Date: ${dateForCard}`}
        </Card.Subtitle>
        <br />
        <Card.Text>{`Amount: ${receipt.amount}`}</Card.Text>
        <Card.Text>{`Provider's name: ${receipt.product.provider.name}`}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReceiptCard;
