import { render, screen } from "@testing-library/react";
import React from "react";

import { App } from "./app";

test("renders 'Sandro'", () => {
  render(<App />);
  const linkElement = screen.getByText(/Sandro/i);
  expect(linkElement).toBeInTheDocument();
});
