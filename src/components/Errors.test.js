import { render, screen } from "@testing-library/react";
import Errors from "./Errors";
import "@testing-library/jest-dom";

test("on empty starting amount submission, populate error message", async () => {
  render(<Errors errorStartingAmount="true" />);

  const section = screen.getByLabelText("Error messages");
  const errorMessage = screen
    .getAllByRole("listitem")
    .find(
      (listitem) =>
        listitem.textContent === "The Starting Amount field cannot be blank",
    );
  expect(errorMessage).toBeInTheDocument();
});
