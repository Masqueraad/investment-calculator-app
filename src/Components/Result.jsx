import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({
  initialInvestmentInput,
  annualInvestmentInput,
  expectedReturnInput,
  durationInput,
}) {
  const result = calculateInvestmentResults({
    initialInvestment: initialInvestmentInput,
    annualInvestment: annualInvestmentInput,
    expectedReturn: expectedReturnInput,
    duration: durationInput,
  });
  console.log(result);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
        </tr>
      </thead>
      <tbody>
        {result.map((data) => {
          const totalInvestment =
            data.valueEndOfYear - data.annualInvestment * data.year;

          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
