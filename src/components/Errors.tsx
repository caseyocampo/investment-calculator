export default function Errors({ errorStartingAmount = false, errorNoLetters = false }) {
  return (
    <>
      <section aria-live="polite" aria-label={errorStartingAmount ? 'Error messages' : undefined}>
        {errorStartingAmount ? (
          <div className="mb-6 rounded-md border-2 border-solid border-gray-900 bg-orange-200 p-4" data-testid="error-messages">
            <h2 className="mb-4 font-bold text-orange-950">The Starting Amount field cannot be blank</h2>
            <ul id="starting-amount-error" className="text-orange-950">
              <li>Please enter a starting amount in US Dollars</li>
            </ul>
          </div>
        ) : null}
      </section>

      <section aria-live="polite" aria-label={errorNoLetters ? 'Error messages' : undefined}>
        {errorNoLetters ? (
          <div className="mb-6 rounded-md border-2 border-solid border-gray-900 bg-orange-200 p-4">
            <h2 className="mb-4 font-bold text-orange-950">Could not process calculation</h2>
            <ul id="letters-error" className="text-orange-950">
              <li>Please enter numeric characters only</li>
            </ul>
          </div>
        ) : null}
      </section>
    </>
  )
}
