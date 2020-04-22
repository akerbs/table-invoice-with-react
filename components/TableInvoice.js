import React, { useState } from "react";
import PriceInput from "./PriceInput";
import CountInput from "./CountInput";

const totalSum = items =>
  items.reduce((sum, item) => sum + item.count * item.price, 0);

const TableInvoice = props => {
  const [invoiceItems, setInvoiceItems] = useState(props.items);

  const changePriceOfItem = (itemIndex, item) => price => {
    const changedItems = [...invoiceItems];
    changedItems[itemIndex] = { name: item.name, price, count: item.count };
    setInvoiceItems(changedItems);
  };

  const changeCountOfItem = (itemIndex, item) => count => {
    const changedItems = [...invoiceItems];
    changedItems[itemIndex] = { name: item.name, price: item.price, count };
    setInvoiceItems(changedItems);
  };

  const removeItem = itemIndex =>
    setInvoiceItems(
      invoiceItems.slice(0, itemIndex).concat(invoiceItems.slice(itemIndex + 1))
    );

  return (
    <table className="table table-striped">
      <thead className="thead-dark">
        <tr>
          <th></th>
          <th>Count</th>
          <th>Name</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {invoiceItems.map((item, itemIndex) => (
          <InvoiceItem
            {...item}
            key={`item-${itemIndex}`}
            setPrice={changePriceOfItem(itemIndex, item)}
            setCount={changeCountOfItem(itemIndex, item)}
            remove={() => removeItem(itemIndex)}
          />
        ))}
        <tr>
          <td colSpan="3"></td>
          <td style={{ borderTop: "2px solid black" }}>
            ${totalSum(invoiceItems)}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

const InvoiceItem = props => {
  return (
    <tr>
      <td style={{ color: "red" }} onClick={props.remove}>
        <i class="fas fa-trash-alt"></i>
      </td>
      <td>
        <CountInput count={props.count} setCount={props.setCount} />
      </td>
      <td>{props.name}</td>
      <td className="price">
        <PriceInput price={props.price} onPriceChange={props.setPrice} />
      </td>
      <td>${props.count * props.price}</td>
    </tr>
  );
};

export default TableInvoice;
