import React from "react";

const OrderRow = ({ order, handleStatus}) => {
  const { name, _id, email, service, paymentId, status } = order;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{service}</td>
      <td>{paymentId}</td>
      <td>
        <button
          onClick={() => handleStatus(_id)}
          className="btn-sm btn-blueCyan text-light"
        >
          {status}
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
