import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Home from "../Qsis-Components/Home";
import { MemoryRouter } from "react-router-dom";

describe("checking the Our work component", () => {
  it("rendering the all card", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.findByText(/Automatic Irrigation System/));
    expect(screen.findByText(/Lane Change Detection/));
    expect(screen.findByText(/Number Plate Extractor/));
    expect(screen.findByText(/Object Detector/));
    expect(screen.findByText(/Helmet Violation Detection/));
    expect(screen.findByText(/No Parking Alarming System/));
  });
});
