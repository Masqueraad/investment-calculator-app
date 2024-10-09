import React from "react";

function UserInput({
  initialInvestmentValue,
  annualInvestmentValue,
  expectedReturnValue,
  durationValue,
  onChangeInitialInvestmentValue,
  onChangeAnnualInvestmentValue,
  onChangeExpectedReturnValue,
  onChangeDurationValue,
}) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>initialInvestment</label>
          <input
            type="number"
            value={initialInvestmentValue}
            onChange={onChangeInitialInvestmentValue}
          />
        </p>
        <p>
          <label>annualInvestment</label>
          <input
            type="number"
            value={annualInvestmentValue}
            onChange={onChangeAnnualInvestmentValue}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expectedReturn</label>
          <input
            type="number"
            value={expectedReturnValue}
            onChange={onChangeExpectedReturnValue}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={durationValue}
            onChange={onChangeDurationValue}
          />
        </p>
      </div>
    </div>
  );
}

export default UserInput;
