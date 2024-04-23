import { render, screen } from "@testing-library/react";
import Errors from "../components/Errors";
import "@testing-library/jest-dom";

test("on empty starting amount submission, announce error message", async () => {
  render(<Errors />);

  //   screen.debug();

  const section = screen.getByLabelText("Error messages");
  expect(section).toHaveAttribute("aria-live", "assertive");
});
