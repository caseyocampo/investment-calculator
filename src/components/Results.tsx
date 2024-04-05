export default function Results({
  localStartingAmount,
  localYearsInvested,
  localReturnRate,
  localAdditionalContribution,
}: {
  localStartingAmount: number
  localYearsInvested: number
  localReturnRate: number
  localAdditionalContribution: number
}) {
  const principalInvestment = localStartingAmount
  const annualInterestRate = localReturnRate / 100
  const compoundInterest = (localStartingAmount * Math.pow(1 + annualInterestRate, localYearsInvested) - localStartingAmount).toFixed(2)
  const endBalance = localStartingAmount + Number(compoundInterest)
  const startingAmountFormatted = new Intl.NumberFormat().format(principalInvestment)
  const interestFormatted = new Intl.NumberFormat().format(Number(compoundInterest))
  const endBalanceFormatted = new Intl.NumberFormat().format(Number(endBalance))
  const interestCompoundedPerYear = 12

  /* 
  A = P(1 + r/n) pow of nt + (1 + r/n) pow of nt -1 / (r/n)

  A = The future value of the investment/loan, including interest, as a dollar value
  P = principalInvestment = The principal investment (the initial deposit or amount), as a dollar value
  r = annualInterestRate = the annual interest rate, as a percent
  n = interestCompoundedPerYear = the number of times that interest is compounded per year, e.g. 12 times per year is equivalent to compounded monthly
  t = localYearsInvested = the number of years the money is invested or borrowed for, in years
*/
  return (
    <section aria-label="Results" id="results" className="h-fit p-6 w-auto bg-[#F4EEE6] rounded-md sm:w-96 sm:p-8">
      <h2 className="text-2xl mb-4">Results</h2>
      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4 font-bold">End balance</p>
        <p className="font-bold">${endBalanceFormatted}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Starting amount</p>
        <p>${startingAmountFormatted ? startingAmountFormatted : 0}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total contributions</p>
        <p>${localAdditionalContribution}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total interest</p>
        <p>${interestFormatted}</p>
      </div>
      <p className="mt-8 text-orange-950 opacity-75">These results are based on annual compound interest.</p>
    </section>
  )
}
