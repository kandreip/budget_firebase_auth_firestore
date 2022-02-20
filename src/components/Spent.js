import React from "react";

const Spent = ({ spentCalc }) => {
  return <div className="spent">Spent so far: £{spentCalc()}</div>;
};

export default Spent;
