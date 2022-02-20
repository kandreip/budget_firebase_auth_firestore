import React from "react";

const Budget = ({ budgetCalc }) => {
  return <div className="budget">Budget: £{budgetCalc()}</div>;
};

export default Budget;
