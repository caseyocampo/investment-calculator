import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

function ErrorMessage() {
  return (
    <div className="mb-6 rounded-md border-2 border-solid border-gray-900 bg-orange-200 p-4">
      <h2 className="mb-4 font-bold text-orange-950">
        Could not process calculation
      </h2>
      <ul id="starting-amount-error" className="text-orange-950">
        <li>The Starting Amount field cannot be blank</li>
        <li>Please enter a starting amount in US Dollars</li>
      </ul>
    </div>
  );
}

test("sets the value to the upper version of the value", async () => {
  render(<ErrorMessage />);
  const heading = screen.getByRole("h2");
  expect(heading).toBe("Could not process calculation");
});
