import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it } from "vitest";
import Form from "../Qsis-Components/Form";

// Grouping tests using describe
describe("Form Component", () => {
  // checking the form component render

  it("render the component", () => {
    render(<Form />);
    expect(screen.queryByText(/REST EASY, WE'RE HERE FOR YOU!/));
  });

  // checking the input fields are empty

  it("checking fields are empty", async () => {
    render(<Form />);

    await (() => {
      expect(screen.getByLabelText(/name/i)).toHaveValue("");
      expect(screen.getByLabelText(/email id/i)).toHaveValue("");
      expect(screen.getByLabelText(/phone number/i)).toHaveValue("");
      expect(screen.getByLabelText(/message/i)).toHaveValue("");
    });
  });
});
