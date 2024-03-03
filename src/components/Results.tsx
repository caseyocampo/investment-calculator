export default function Results({ localStartingAmount, localYearsInvested, localReturnRate }: { localStartingAmount: number; localYearsInvested: number; localReturnRate: number }) {
  // Compound interest: C.I.= P × (1 +R)powT - P
  const startingAmount = localStartingAmount
  const returnRate = localReturnRate / 100
  const compoundInterest = (localStartingAmount * Math.pow(1 + returnRate, localYearsInvested) - localStartingAmount).toFixed(2)
  const endBalance = localStartingAmount + Number(compoundInterest)
  const startingAmountFormatted = new Intl.NumberFormat().format(startingAmount)
  const interestFormatted = new Intl.NumberFormat().format(Number(compoundInterest))
  const endBalanceFormatted = new Intl.NumberFormat().format(Number(endBalance))

  return (
    <div id="results" className="h-fit p-6 w-auto bg-white rounded-lg sm:w-96 sm:p-8">
      <h2 className="text-2xl mb-4">Results</h2>
      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4 font-bold">End Balance</p>
        <p className="font-bold">${endBalanceFormatted}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Starting Amount</p>
        <p>${startingAmountFormatted ? startingAmountFormatted : 0}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total Contributions</p>
        <p>$0</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total Interest</p>
        <p>${interestFormatted}</p>
      </div>
    </div>
  )
}
