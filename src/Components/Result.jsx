import React from "react";
import { calculateInvestmentResults } from "../util/investment";

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

  return <div>Result</div>;
}

export default Result;
