import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import Calculator from "./Calculator";
import "@testing-library/jest-dom";

test("on first page load, starting amount input should be empty", async () => {
  render(<Calculator />);

  const element = screen.getByTestId("starting-amount-input").textContent;
  expect(element).toEqual("");
});

test("error message should populate if an empty input is submitted", async () => {
  render(<Calculator />);

  const submitButton = screen.getByRole("button", { name: "Calculate" });
  fireEvent.click(submitButton);
  const errorMessages = screen.getByTestId("error-messages");
  expect(errorMessages).toBeInTheDocument();
});
