import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import MissionVision from "../Qsis-Components/MissionVision";

describe("checking MissionVision component render", () => {
  it("render the component", () => {
    render(<MissionVision />);
    expect(screen.findByText(/What We Do/));
    expect(screen.findByText(/Empowering the Future/));
  });
});
