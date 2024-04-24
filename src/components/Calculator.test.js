import { getByRole, getByTestId, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import "@testing-library/jest-dom";

test("on first page load, starting amount input should be empty", async () => {
  render(<Calculator />);

  const container = <Calculator />;
  const element = screen.getByTestId("starting-amount-input").value;
  expect(element).toEqual("");
});
