import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Item from "./Item";
import "../../../../setupTests";

describe("Item component", () => {
  const item = {
    title: "Test item",
    image: "test-image.jpg",
    regular_price: {
      value: 10,
      currency: "USD",
    },
    brand: "Test brand",
  };
  const toggleModal = jest.fn();
  const setData = jest.fn();

  it("renders the component with correct data", () => {
    const { getByText, getByAltText } = render(
      <Item item={item} toggleModal={toggleModal} setData={setData} />
    );

    expect(getByText(item.title)).toBeInTheDocument();
    expect(
      getByText(`${item.regular_price.value} ${item.regular_price.currency}`)
    ).toBeInTheDocument();
    expect(getByText(`brand - ${item.brand}`)).toBeInTheDocument();
  });

  it("calls toggleModal and setData functions when clicked", () => {
    const { getByTestId } = render(
      <Item item={item} toggleModal={toggleModal} setData={setData} />
    );
  });
});
