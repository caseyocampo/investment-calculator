export default function Results() {
  return (
    <div id="results" className="max-w-lg">
      <h2 className="text-2xl mb-4">Results</h2>
      <div className="flex justify-between mb-2 gap-8">
        <p className="mr-4 font-bold">End Balance</p>
        <p className="font-bold">$198,290.40</p>
      </div>

      <div className="flex justify-between mb-2 gap-8">
        <p className="mr-4">Starting Amount</p>
        <p>$20,000.00</p>
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
