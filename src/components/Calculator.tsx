import { useState } from "react"

import Results from "./Results"

export default function Calculator() {
  const [startingAmount, setStartingAmount] = useState(0)
  const [errorMessage, setErrorMessage] = useState(false)

  function calculate() {
    const entered = (document.getElementById("initial-investment") as HTMLInputElement).value
    setStartingAmount(Number(entered))
    if (!entered) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
    }
  }

  return (
    <main className="max-w-4xl m-auto">
      <p className="mb-8">An investment calculator that helps calculate and view projected investments.</p>

      <div className="flex flex-col gap-8 sm:gap-16 sm:justify-between sm:flex-row">
        <div id="form" className="bg-white p-8 rounded-lg">
          <form className="max-w-lg">
            <fieldset>
              <legend className="text-2xl mb-4">Enter investment numbers</legend>
              <div className="flex justify-between mb-2">
                <label htmlFor="initial-investment" className="mr-4">
                  Starting Amount ($)
                </label>
                <input type="text" id="initial-investment" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="years" className="mr-4">
                  Projected Years
                </label>
                <input type="text" id="years" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="return-rate" className="mr-4">
                  Return Rate (%)
                </label>
                <input type="text" id="return-rate" />
              </div>

              <div className="flex justify-between mb-2">
                <label htmlFor="compound" className="mr-4">
                  Compound
                </label>
                <select id="compound">
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
                <input type="text" id="additional-contribution" />
              </div>

              <p className="mt-8 mb-4">Choose a time of contribution and a contribution interval below.</p>

              <div className="flex justify-between mb-2">
                <label htmlFor="contribute-start" className="mr-4">
                  Time of Contribution
                </label>
                <fieldset className="flex gap-2" id="time-of-contribution">
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
                <label htmlFor="contribution-interval" className="mr-4">
                  Contribution Interval
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

              <button
                type="submit"
                className="bg-blue-800 text-white mt-4 w-full outline-offset-4 hover:bg-blue-900"
                onClick={e => {
                  e.preventDefault()
                  calculate()
                }}
              >
                Calculate
              </button>

              {errorMessage ? (
                <section className="bg-red-100 rounded-lg p-4 mt-4 ">
                  <p id="starting-amount-error" className="text-red-950">
                    Please enter a starting amount.
                  </p>
                </section>
              ) : null}
            </fieldset>
          </form>
        </div>

        <Results startingAmount={startingAmount} />
      </div>
    </main>
  )
}
