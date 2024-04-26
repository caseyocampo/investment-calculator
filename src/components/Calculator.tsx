import { useState } from 'react'
import Errors from './Errors'
import Results from './Results'

export default function Calculator() {
  let getLocalStartingAmount = localStorage.getItem('localStartingAmount')
  let getLocalYearsInvested = localStorage.getItem('localYearsInvested')
  let getLocalReturnRate = localStorage.getItem('localReturnRate')

  const [localStartingAmount, setLocalStartingAmount] = useState(getLocalStartingAmount)
  const [localYearsInvested, setLocalYearsInvested] = useState(getLocalYearsInvested)
  const [localReturnRate, setLocalReturnRate] = useState(getLocalReturnRate)
  const [errorStartingAmount, setErrorStartingAmount] = useState(false)
  const [errorNoLetters, setErrorNoLetters] = useState(false)

  function calculate() {
    const startingAmount = (document.getElementById('starting-amount') as HTMLInputElement)?.value
    const yearsInvested = (document.getElementById('years') as HTMLInputElement)?.value
    const returnRate = (document.getElementById('return-rate') as HTMLInputElement)?.value

    const regex = '.*[a-zA-Z].*'
    const foundInStartingAmount = startingAmount.match(regex)
    const foundInYearsInvested = yearsInvested.match(regex)
    const foundInReturnRate = returnRate.match(regex)
    if (foundInStartingAmount || foundInYearsInvested || foundInReturnRate) {
      setErrorNoLetters(true)
    } else {
      localStorage.setItem('localStartingAmount', startingAmount)
      localStorage.setItem('localYearsInvested', yearsInvested)
      localStorage.setItem('localReturnRate', returnRate)

      const localStartingAmount = localStorage.getItem('localStartingAmount')
      const localYearsInvested = localStorage.getItem('localYearsInvested')
      const localReturnRate = localStorage.getItem('localReturnRate')

      setLocalStartingAmount(localStartingAmount)
      setLocalYearsInvested(localYearsInvested)
      setLocalReturnRate(localReturnRate)
      setErrorNoLetters(false)
    }
    if (!startingAmount) {
      setErrorStartingAmount(true)
    } else {
      setErrorStartingAmount(false)
    }
  }

  return (
    <main className="m-auto max-w-4xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:gap-6">
        <div id="form" className="rounded-md bg-[#F4EEE6] p-6 sm:w-[550px] sm:p-8">
          <Errors errorStartingAmount={errorStartingAmount} errorNoLetters={errorNoLetters} />
          <section aria-label="Investment calculator">
            <form className="max-w-lg">
              <fieldset>
                <legend className="mb-2 text-2xl">Investment Details</legend>
                <p className="mb-8 text-amber-950 opacity-75">*All fields below are required</p>
                <div className="mb-2 flex flex-col justify-between md:flex-row">
                  <label htmlFor="starting-amount" className="mr-4">
                    Starting amount ($)
                  </label>
                  <input
                    type="text"
                    id="starting-amount"
                    defaultValue={localStartingAmount ? localStartingAmount : ''}
                    aria-describedby={errorStartingAmount ? 'starting-amount-error' : undefined}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    data-testid="starting-amount-input"
                  />
                </div>

                <div className="mb-2 flex flex-col justify-between md:flex-row">
                  <label htmlFor="years" className="mr-4">
                    Years of growth
                  </label>
                  <input
                    type="text"
                    id="years"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    defaultValue={localYearsInvested ? localYearsInvested : ''}
                    aria-describedby={errorNoLetters ? 'letters-error' : undefined}
                  />
                </div>

                <div className="mb-2 flex flex-col justify-between md:flex-row">
                  <label htmlFor="return-rate" className="mr-4">
                    Annual rate of return (%)
                  </label>
                  <input
                    type="text"
                    id="return-rate"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    defaultValue={localReturnRate ? localReturnRate : ''}
                    aria-describedby={errorNoLetters ? 'letters-error' : undefined}
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-950 text-white outline-offset-4 hover:bg-opacity-95"
                  onClick={(e) => {
                    e.preventDefault()
                    calculate()
                  }}
                >
                  Calculate
                </button>
              </fieldset>
            </form>
          </section>
        </div>

        <Results
          localStartingAmount={Number(localStartingAmount) ? Number(localStartingAmount) : 0}
          localYearsInvested={Number(localYearsInvested) ? Number(localYearsInvested) : 0}
          localReturnRate={Number(localReturnRate) ? Number(localReturnRate) : 0}
        />
      </div>
    </main>
  )
}
