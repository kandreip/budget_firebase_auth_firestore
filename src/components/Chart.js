import React from "react";
import { Doughnut } from "react-chartjs-2";

const Chart = ({ remainingCalc, spentCalc }) => {
  return (
    <div>
      <Doughnut
        data={{
          labels: ["Remaining", "Spent so far"],
          datasets: [
            {
              data: [remainingCalc(), spentCalc()],

              backgroundColor: ["rgb(218, 201, 110)", "rgb(207, 46, 18)"],

              borderColor: ["rgb(218, 201, 110)", "rgb(207, 46, 18)"],
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default Chart;
