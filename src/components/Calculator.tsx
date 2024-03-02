export default function Calculator() {
  return (
    <section className="max-w-3xl m-auto">
      <p className="mb-8">An investment calculator used to calculate and view projected investments.</p>

      <div className="flex flex-col gap-8 sm:justify-between sm:flex-row">
        <div id="form">
          <form className="max-w-lg">
            <fieldset>
              <legend className="text-2xl mb-4">Add investment numbers</legend>
              <div className="flex justify-between mb-2">
                <label htmlFor="initial-investment" className="mr-4">
                  Starting Amount
                </label>
                <input type="number" id="initial-investment" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="years" className="mr-4">
                  After (years)
                </label>
                <input type="number" id="years" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="return-rate" className="mr-4">
                  Return Rate
                </label>
                <input type="number" id="return-rate" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="compoud" className="mr-4">
                  Compoud
                </label>
                <select id="compoud">
                  <option value="1">Annually</option>
                  <option value="2">Semi-Annually</option>
                  <option value="3">Quarterly</option>
                  <option value="4">Monthly</option>
                  <option value="5">Semi-Monthly</option>
                  <option value="6">Bi-Weekly</option>
                  <option value="7">Weekly</option>
                  <option value="8">Daily</option>
                  <option value="9">Continuously</option>
                </select>
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="additional-contribution" className="mr-4">
                  Additional Contribution
                </label>
                <input type="number" id="additional-contribution" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="additional-contribution" className="mr-4">
                  Contribute at the
                </label>
                <fieldset className="flex gap-2">
                  <legend className="sr-only">Select a contribution interval</legend>

                  <div>
                    <input className="mr-1" type="radio" id="beginning" name="contribute-start" value="beginning" defaultChecked />
                    <label htmlFor="beginning">Beginning</label>
                  </div>

                  <div>
                    <input className="mr-1" type="radio" id="end" name="contribute-start" value="end" />
                    <label htmlFor="end">End</label>
                  </div>
                </fieldset>
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="additional-contribution" className="mr-4">
                  Of each
                </label>
                <fieldset className="flex gap-2">
                  <legend className="sr-only">Select a contribution interval</legend>
                  <div>
                    <input className="mr-1" type="radio" id="month" name="contribute-interval" value="month" defaultChecked />
                    <label htmlFor="month">Month</label>
                  </div>

                  <div>
                    <input className="mr-1" type="radio" id="year" name="contribute-interval" value="year" />
                    <label htmlFor="year">Year</label>
                  </div>
                </fieldset>
              </div>

              <button type="submit" className="bg-green-800 text-white mt-4 hover:bg-green-900">
                Calculate
              </button>
            </fieldset>
          </form>
        </div>

        <div id="results" className="max-w-lg">
          <h2 className="text-2xl mb-4">Results</h2>
          <div className="flex justify-between mb-2">
            <p className="mr-4 font-bold">End Balance</p>
            <p className="font-bold">$198,290.40</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="mr-4">Starting Amount</p>
            <p>$20,000.00</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="mr-4">Total Contributions</p>
            <p>$120,000.00</p>
          </div>

          <div className="flex justify-between mb-2">
            <p className="mr-4">Total Interest</p>
            <p>$58,290.40</p>
          </div>
        </div>
      </div>
    </section>
  )
}
