import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it } from "vitest";
import AboutUs from "../Qsis-Pages/About";

describe("About Us component", () => {
  // checking component render
  it("Render the component", () => {
    render(<AboutUs />);
    expect(screen.queryByText(/About Us/));
  });

  // checking external map
  it("render the map", async () => {
    render(<AboutUs />);
    await expect(screen.getByTestId(/map/));
  });
});
