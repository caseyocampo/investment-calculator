import { useState } from "react"

import Results from "./Results"

export default function Calculator() {
  let getLocalStartingAmount = localStorage.getItem("localStartingAmount")

  const [localStartingAmount, setLocalStartingAmount] = useState(getLocalStartingAmount)
  const [errorMessage, setErrorMessage] = useState(false)

  // @TODO: refactor naming of variables
  function calculate() {
    const startingAmountEntered = (document.getElementById("initial-investment") as HTMLInputElement).value
    localStorage.setItem("localStartingAmount", startingAmountEntered)
    const localStartingAmount = localStorage.getItem("localStartingAmount")
    setLocalStartingAmount(localStartingAmount)
    if (!startingAmountEntered) {
      setErrorMessage(true)
    } else {
      setErrorMessage(false)
    }
  }

  return (
    <main className="max-w-4xl m-auto">
      <p className="mb-8">An investment calculator that helps calculate and view projected investments.</p>

      <div className="flex flex-col gap-4 sm:gap-8 sm:justify-between sm:flex-row">
        <div id="form" className="bg-white p-6 sm:p-8 rounded-lg">
          <form className="max-w-lg">
            <fieldset>
              <legend className="text-2xl mb-4">Enter investment numbers</legend>
              <div className="flex flex-col justify-between mb-2 md:flex-row">
                <label htmlFor="initial-investment" className="mr-4">
                  Starting Amount ($)
                </label>
                <input type="text" id="initial-investment" defaultValue={localStartingAmount ? localStartingAmount : ""} aria-describedby="starting-amount-error" />
              </div>

              <div className="flex flex-col justify-between mb-2 md:flex-row">
                <label htmlFor="years" className="mr-4">
                  Projected Years
                </label>
                <input type="text" id="years" />
              </div>

              <div className="flex flex-col justify-between mb-2 md:flex-row">
                <label htmlFor="return-rate" className="mr-4">
                  Return Rate (%)
                </label>
                <input type="text" id="return-rate" />
              </div>

              <div className="flex flex-col justify-between mb-2 md:flex-row">
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

              <div className="flex flex-col justify-between mb-2 md:flex-row">
                <label htmlFor="additional-contribution" className="mr-4">
                  Additional Contribution
                </label>
                <input type="text" id="additional-contribution" />
              </div>

              <p className="mt-8 mb-4">Choose a time of contribution and a contribution interval below.</p>

              <div className="flex flex-col justify-between mb-2 md:flex-row">
                <p className="mr-4 mb-4 md:mb-0">Time of Contribution</p>
                <fieldset className="flex gap-2 flex-col" id="time-of-contribution">
                  <legend className="sr-only">select a time of contribution</legend>

                  <div>
                    <input className="mr-1" type="radio" id="beginning-month" name="contribute-start" value="beginning-month" defaultChecked />
                    <label htmlFor="beginning-month">Beginning of the month</label>
                  </div>

                  <div>
                    <input className="mr-1" type="radio" id="beginning-year" name="contribute-start" value="beginning-year" defaultChecked />
                    <label htmlFor="beginning-year">Beginning of the year</label>
                  </div>

                  <div>
                    <input className="mr-1" type="radio" id="end-month" name="contribute-start" value="end-month" />
                    <label htmlFor="end-month">End of the month</label>
                  </div>

                  <div>
                    <input className="mr-1" type="radio" id="end-year" name="contribute-start" value="end-year" />
                    <label htmlFor="end-year">End of the year</label>
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

              <section aria-live="assertive">
                {errorMessage ? (
                  <div className="bg-red-100 rounded-lg p-4 mt-4 ">
                    <span className="sr-only">Error message</span>
                    <p className="text-red-950 font-bold mb-4">Could not process calculation</p>
                    <ul id="starting-amount-error" className="text-red-950">
                      <li className="ml-4">Please enter a starting amount in US Dollars</li>
                    </ul>
                  </div>
                ) : null}
              </section>
            </fieldset>
          </form>
        </div>

        <Results localStartingAmount={localStartingAmount ? Number(localStartingAmount) : 0} />
      </div>
    </main>
  )
}
