export default function Errors({ errorStartingAmount = false, errorNoLetters = false }) {
  return (
    <>
      <section aria-live="assertive" aria-label={errorStartingAmount ? "Error messages" : ""}>
        {errorStartingAmount ? (
          <div className="bg-orange-200 rounded-md p-4 mb-6 border-2 border-solid border-gray-900">
            <p className="text-orange-950 font-bold mb-4">Could not process calculation</p>
            <ul id="starting-amount-error" className="text-orange-950">
              <li>The Starting Amount field cannot be blank</li>
              <li>Please enter a starting amount in US Dollars</li>
            </ul>
          </div>
        ) : null}
      </section>

      <section aria-live="assertive" aria-label={errorNoLetters ? "Error messages" : ""}>
        {errorNoLetters ? (
          <div className="bg-orange-200 rounded-md p-4 mb-6 border-2 border-solid border-gray-900">
            <p className="text-orange-950 font-bold mb-4">Could not process calculation</p>
            <ul id="starting-amount-error" className="text-orange-950">
              <li>The Starting Amount field cannot contain letters</li>
              <li>Please enter numeric characters only</li>
            </ul>
          </div>
        ) : null}
      </section>
    </>
  )
}
