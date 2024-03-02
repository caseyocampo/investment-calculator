export default function Results({ startingAmount }: { startingAmount: number }) {
  return (
    <div id="results" className="max-w-lg w-96 p-8 sm:py-8 sm:px-0">
      <h2 className="text-2xl mb-4">Results</h2>
      <div className="flex justify-between mb-2 gap-8">
        <p className="mr-4 font-bold">End Balance</p>
        <p className="font-bold">$198,290.40</p>
      </div>

      <div className="flex justify-between mb-2 gap-8">
        <p className="mr-4">Starting Amount</p>
        <p>${startingAmount ? startingAmount : 0}</p>
      </div>

      <div className="flex justify-between mb-2 gap-8">
        <p className="mr-4">Total Contributions</p>
        <p>$120,000.00</p>
      </div>

      <div className="flex justify-between mb-2 gap-8">
        <p className="mr-4">Total Interest</p>
        <p>$58,290.40</p>
      </div>
    </div>
  )
}
