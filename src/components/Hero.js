import React, { useState, useEffect } from "react";

import AddTransaction from "./AddTransaction";
import Transactions from "./Transactions";
import Search from "./Search";
import Chart from "./Chart";
import Budget from "./Budget";
import Spent from "./Spent";
import Remaining from "./Remaining";
import fire from "../fire";

const Hero = ({ handleLogout }) => {
  const [transaction, setTransaction] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addTransactionn = (nameText, costText, valueText) => {
    let cost;
    if (valueText === "expense") {
      cost = -parseInt(costText);
    } else if (valueText === "income") {
      cost = parseInt(costText);
    }

    fire
      .firestore()
      .collection("users")
      .doc(fire.auth().currentUser.uid)
      .collection("transactionsList")
      .add({
        name: nameText,
        cost: cost,
        type: valueText,
      });
  };

  useEffect(() => {
    const list = fire
      .firestore()
      .collection("users")
      .doc(fire.auth().currentUser.uid)
      .collection("transactionsList")
      .onSnapshot((snapshot) => {
        const newTrasaction = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setTransaction(newTrasaction);
      });

    return () => list();
  }, []);

  const remainingCalc = () => {
    if (transaction) {
      const sum = transaction
        .map((datum) => datum.cost)
        .reduce((a, b) => a + b, 0);
      return sum;
    }
  };

  const budgetCalc = () => {
    if (transaction) {
      const incomeFind = transaction.filter((trans) => trans.type === "income");
      const sum = incomeFind
        .map((datum) => datum.cost)
        .reduce((a, b) => a + b, 0);
      return sum;
    }
  };

  const spentCalc = () => {
    if (transaction) {
      const expenseFind = transaction.filter(
        (trans) => trans.type === "expense"
      );
      const dif = expenseFind
        .map((datum) => datum.cost)
        .reduce((a, b) => a - b, 0);
      return dif;
    }
  };

  const removeTransaction = (id) => {
    fire
      .firestore()
      .collection("users")
      .doc(fire.auth().currentUser.uid)
      .collection("transactionsList")
      .doc(id)
      .delete();
  };

  let emailName = fire.auth().currentUser.email;
  let name = emailName.substring(0, emailName.indexOf("@"));
  let finalName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <section className="hero">
      <nav>
        <h2>Welcome {finalName}</h2>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="container">
        <div className="header">
          <div className="title">
            <h1>My budget monitor</h1>
          </div>
        </div>
        <div className="status">
          <Budget budgetCalc={budgetCalc} />
          <Remaining remainingCalc={remainingCalc} />
          <Spent spentCalc={spentCalc} />
        </div>
        <div className="chart">
          <Chart remainingCalc={remainingCalc} spentCalc={spentCalc} />
        </div>
        <div>
          <h2 className="title">Transactions</h2>
          <Search handleSearchText={setSearchText} />
          <Transactions
            transaction={transaction.filter((trans) =>
              trans.name.toLocaleLowerCase().includes(searchText)
            )}
            onTime={removeTransaction}
          />
        </div>
        <div>
          <h2 className="title">Add Transaction</h2>
          <AddTransaction onSave={addTransactionn} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
