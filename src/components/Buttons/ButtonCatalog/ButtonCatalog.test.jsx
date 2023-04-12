import React from "react";
import { render, screen } from "@testing-library/react";
import ButtonCatalog from "./ButtonCatalog";

describe("ButtonCatalog", () => {
  it("renders the button with the correct text and icon", () => {
    render(<ButtonCatalog />);
    const button = screen.getByRole("button");
    const buttonText = screen.getByText("Каталог", { selector: "span" });
    expect(button).toBeInTheDocument();
    expect(buttonText).toBeInTheDocument();
  });

  it("has the correct class name", () => {
    render(<ButtonCatalog />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("button");
  });
});