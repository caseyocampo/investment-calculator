export default function Results({ localStartingAmount }: { localStartingAmount: number }) {
  const startingAmount = localStartingAmount
  const startingAmountFormatted = new Intl.NumberFormat().format(startingAmount)

  return (
    <div id="results" className="h-fit p-6 w-auto bg-white rounded-lg sm:w-96 sm:p-8">
      <h2 className="text-2xl mb-4">Results</h2>
      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4 font-bold">End Balance</p>
        <p className="font-bold">$198,290.40</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Starting Amount</p>
        <p>${startingAmountFormatted ? startingAmountFormatted : 0}</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total Contributions</p>
        <p>$120,000.00</p>
      </div>

      <div className="flex flex-row justify-between mb-2 sm:flex-col sm:justify-start md:gap-8 md:justify-between md:flex-row">
        <p className="mr-4">Total Interest</p>
        <p>$58,290.40</p>
      </div>
    </div>
  )
}
