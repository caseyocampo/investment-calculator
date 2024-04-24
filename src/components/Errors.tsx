export default function Errors({
  errorStartingAmount = false,
  errorNoLetters = false,
}) {
  return (
    <>
      {errorStartingAmount ? (
        <section aria-live="assertive" aria-label="Error messages">
          <div
            className="mb-6 rounded-md border-2 border-solid border-gray-900 bg-orange-200 p-4"
            data-testid="error-messages"
          >
            <h2 className="mb-4 font-bold text-orange-950">
              Could not process calculation
            </h2>
            <ul id="starting-amount-error" className="text-orange-950">
              <li>The Starting Amount field cannot be blank</li>
              <li>Please enter a starting amount in US Dollars</li>
            </ul>
          </div>
        </section>
      ) : null}

      {errorNoLetters ? (
        <section aria-live="assertive" aria-label="Error messages">
          <div className="mb-6 rounded-md border-2 border-solid border-gray-900 bg-orange-200 p-4">
            <h2 className="mb-4 font-bold text-orange-950">
              Could not process calculation
            </h2>
            <ul id="starting-amount-error" className="text-orange-950">
              <li>The Starting Amount field cannot contain letters</li>
              <li>Please enter numeric characters only</li>
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
}
