export default function Results({ localStartingAmount, localYearsInvested, localReturnRate }: { localStartingAmount: number; localYearsInvested: number; localReturnRate: number }) {
  const startingAmount = localStartingAmount
  const startingAmountFormatted = new Intl.NumberFormat().format(startingAmount)

  // Compound interest: C.I.= P × (1 +R)powT - P
  // console.log(localStartingAmount * Math.pow(1 + returnRate, localYearsInvested) - localStartingAmount)
  const returnRate = localReturnRate / 100
  const interest = localStartingAmount * Math.pow(1 + returnRate, localYearsInvested) - localStartingAmount
  const interestFormatted = interest.toFixed(2)
  const endBalance = (localStartingAmount + Number(interestFormatted)).toFixed(2)
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
