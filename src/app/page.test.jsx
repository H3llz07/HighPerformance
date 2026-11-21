import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "./page";

describe("HomePage", () => {
  it("renders without crashing and shows main content", () => {
    render(<HomePage />);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
  });
});
