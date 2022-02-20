import React from "react";
import { FaTimes } from "react-icons/fa";
const Transactions = ({ transaction, onTime }) => {
  return (
    <div className="transactions">
      {transaction.map((tr) => (
        <div key={tr.id} className={tr.type}>
          <div className="transaction-name"> {tr.name}</div>
          <div className="transaction-cost">
            £ {tr.cost}
            <FaTimes className="delete" onClick={() => onTime(tr.id)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
