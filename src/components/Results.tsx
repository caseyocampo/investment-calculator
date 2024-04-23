export default function Results({
  localStartingAmount,
  localYearsInvested,
  localReturnRate,
  //   localAdditionalContribution,
}: {
  localStartingAmount: number;
  localYearsInvested: number;
  localReturnRate: number;
  //   localAdditionalContribution: number;
}) {
  const principalInvestment = localStartingAmount;
  const annualInterestRate = localReturnRate / 100;
  const compoundInterest = (
    localStartingAmount * Math.pow(1 + annualInterestRate, localYearsInvested) -
    localStartingAmount
  ).toFixed(2);
  const endBalance = localStartingAmount + Number(compoundInterest);
  const startingAmountFormatted = new Intl.NumberFormat().format(
    principalInvestment,
  );
  const interestFormatted = new Intl.NumberFormat().format(
    Number(compoundInterest),
  );

  const endBalanceFormatted = new Intl.NumberFormat().format(
    Number(endBalance),
  );

  return (
    <section
      aria-label="Results"
      id="results"
      className="h-fit w-auto rounded-md bg-[#F4EEE6] p-6 sm:w-96 sm:p-8"
    >
      <h2 className="mb-4 text-2xl">Results</h2>
      <div
        className="mb-2 flex flex-row justify-between sm:flex-col sm:justify-start md:flex-row md:justify-between md:gap-8"
        aria-live="polite"
        aria-atomic="true"
        data-testid="end-balance"
      >
        <p className="mr-4 font-bold">End balance</p>
        <p className="font-bold">${endBalanceFormatted}</p>
      </div>

      <div
        className="mb-2 flex flex-row justify-between sm:flex-col sm:justify-start md:flex-row md:justify-between md:gap-8"
        aria-live="polite"
        aria-atomic="true"
        data-testid="starting-amount"
      >
        <p className="mr-4">Starting amount</p>
        <p>${startingAmountFormatted ? startingAmountFormatted : 0}</p>
      </div>

      {/* <div className="mb-2 flex flex-row justify-between sm:flex-col sm:justify-start md:flex-row md:justify-between md:gap-8">
        <p className="mr-4">Total contributions</p>
        <p>${localAdditionalContribution}</p>
      </div> */}

      <div
        className="mb-2 flex flex-row justify-between sm:flex-col sm:justify-start md:flex-row md:justify-between md:gap-8"
        aria-live="polite"
        aria-atomic="true"
        data-testid="total-interest"
      >
        <p className="mr-4">Total interest</p>
        <p>${interestFormatted}</p>
      </div>
      <p className="mt-8 text-orange-950 opacity-75">
        Based on calculations from{" "}
        <a href="https://www.calculator.net/investment-calculator.html">
          calculator.net
        </a>
        .
      </p>
    </section>
  );
}
