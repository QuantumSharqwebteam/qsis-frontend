import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import Service from "../Qsis-Components/Service";

describe("checking render the Service component", () => {
  it("render the service component", () => {
    render(<Service />);
    expect(screen.findByText(/Service Repertoire/));
  });

  it("render the service cards", () => {
    render(<Service />);
    expect(screen.findByText(/AI/));
    expect(screen.findByText(/App Development/));
    expect(screen.findByText(/Embedded System/));
    expect(screen.findByText(/Innovative Solutions/));
  });
});
