export default function Results({ localStartingAmount, localYearsInvested, localReturnRate }: { localStartingAmount: number; localYearsInvested: number; localReturnRate: number }) {
  const startingAmount = localStartingAmount
  const returnRate = localReturnRate / 100
  const compoundInterest = (localStartingAmount * Math.pow(1 + returnRate, localYearsInvested) - localStartingAmount).toFixed(2)
  const endBalance = localStartingAmount + Number(compoundInterest)
  const startingAmountFormatted = new Intl.NumberFormat().format(startingAmount)
  const interestFormatted = new Intl.NumberFormat().format(Number(compoundInterest))
  const endBalanceFormatted = new Intl.NumberFormat().format(Number(endBalance))

  return (
    <section aria-label="Results" id="results" className="h-fit p-6 w-auto bg-[#F4EEE6] rounded-md sm:w-96 sm:p-8">
      <h2 className="text-2xl mb-4">Results</h2>
      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4 font-bold">End balance</p>
        <p className="font-bold">${endBalanceFormatted}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Starting bmount</p>
        <p>${startingAmountFormatted ? startingAmountFormatted : 0}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total contributions</p>
        <p>$0</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total interest</p>
        <p>${interestFormatted}</p>
      </div>
      <p className="mt-8 text-orange-950 opacity-75">These results are based on annual compount interest.</p>
    </section>
  )
}
