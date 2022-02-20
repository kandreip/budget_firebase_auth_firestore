import React, { useState } from "react";

const AddTransaction = ({ onSave }) => {
  const [nameText, setNameText] = useState("");
  const [costText, setCostText] = useState("");
  const [valueText, setValueText] = useState("income");

  const onSubmit = (event) => {
    event.preventDefault();
    if (isNaN(costText)) {
      alert("Cost value must be a number :)");
    } else if (nameText.trim().length > 0) {
      onSave(nameText, costText, valueText);
      setNameText("");
      setCostText("");
      setValueText("income");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="add-transaction">
        <div className="add-label">
          <label>Name:</label>
          <input
            className="label-input"
            type="text"
            placeholder="type to add name..."
            value={nameText}
            onChange={(event) => setNameText(event.currentTarget.value)}
          />
        </div>
        <div className="add-label">
          <label>Cost:</label>
          <input
            className="label-input"
            type="text"
            placeholder="type to add cost..."
            value={costText}
            onChange={(event) => setCostText(event.target.value)}
          />
        </div>
        <div className="add-label">
          <label>Type:</label>
          <select
            className="label-select"
            value={valueText}
            onChange={(event) => {
              const selectedType = event.target.value;
              setValueText(selectedType);
            }}
          >
            <option value="expense">expense</option>
            <option value="income">income</option>
          </select>
        </div>
      </div>

      <button className="save" type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default AddTransaction;
