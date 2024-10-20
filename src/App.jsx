import Header from "./Components/Header";
import Result from "./Components/Result";
import UserInput from "./Components/UserInput";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("15000");
  const [annualInvestment, setAnnualInvestment] = useState("100");
  const [expectedReturn, setExpectedReturn] = useState("10");
  const [duration, setDuration] = useState("10");

  const inputIsValid = duration >= 1;

  const handleInitialInvestment = (e) => {
    setInitialInvestment(e.target.value);
  };
  const handleAnnualInvestment = (e) => {
    setAnnualInvestment(e.target.value);
  };
  const handleExpectedReturn = (e) => {
    setExpectedReturn(e.target.value);
  };
  const handleDuration = (e) => {
    setDuration(e.target.value);
  };

  return (
    <>
      <Header />
      <UserInput
        initialInvestmentValue={+initialInvestment}
        annualInvestmentValue={+annualInvestment}
        expectedReturnValue={+expectedReturn}
        durationValue={+duration}
        onChangeInitialInvestmentValue={handleInitialInvestment}
        onChangeAnnualInvestmentValue={handleAnnualInvestment}
        onChangeExpectedReturnValue={handleExpectedReturn}
        onChangeDurationValue={handleDuration}
      />
      {inputIsValid ? (
        <Result
          initialInvestmentInput={+initialInvestment}
          annualInvestmentInput={+annualInvestment}
          expectedReturnInput={+expectedReturn}
          durationInput={+duration}
        />
      ) : (
        <p className="center">
          Duration can not be less than 1. Please, adjust the duration field
        </p>
      )}
    </>
  );
}

export default App;
