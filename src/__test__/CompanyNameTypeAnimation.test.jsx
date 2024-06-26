import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import CompanyNameTypeAnimation from "../Qsis-Components/CompanyNameTypeAnimation";

describe("checking render the text animation", () => {
  // Rendering Typewritter animation
  it("renders the text animation", async () => {
    render(<CompanyNameTypeAnimation />);

    const typewriterElement = await screen.findByTestId("typewriter");

    expect(typewriterElement).toBeInTheDocument();
  });
});
