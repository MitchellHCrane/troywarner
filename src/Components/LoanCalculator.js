import "../css/loanCalculator.css";
import MortgageCalculator from "mortgage-calculator-react";

function LoanCalculator() {
  return (
    <div className="loanCalculator-div">
      <h2>Loan Calculator</h2>
      <p>Let Us Help You Calculate Your Monthly Payments</p>

      <div className="mortgageCalculator">
        <MortgageCalculator
          price={500000}
          downPayment={100000}
          interestRate={0.035}
          months={360}
          additionalPrincipalPayment={0}
          insuranceRate={0}
          taxRate={0}
          mortgageInsuranceEnabled={false}
        />
      </div>
    </div>
  );
}

export default LoanCalculator;
