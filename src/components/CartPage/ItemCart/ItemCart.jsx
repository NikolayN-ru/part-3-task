import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import ItemCart from "./ItemCart";
import { delItemCart } from "../../../redux/cartItemsApi";

jest.mock("react-redux", () => ({
useDispatch: jest.fn(),
}));

jest.mock("../../../redux/cartItemsApi", () => ({
delItemCart: jest.fn(),
}));

describe("ItemCart component", () => {
const item = {
id: 1,
title: "Test Item",
count: 2,
regular_price: {
value: 10,
},
};

beforeEach(() => {
useDispatch.mockReturnValue(jest.fn());
});

afterEach(() => {
jest.clearAllMocks();
});

it("renders item details correctly", () => {
const { getByText } = render();
expect(getByText(item.title)).toBeInTheDocument();
expect(getByText(`количество ${item.count}`)).toBeInTheDocument();
expect(getByText(`цена ${item.regular_price.value}`)).toBeInTheDocument();
});

it("dispatches delItemCart action on button click", () => {
const { getByText } = render();
const button = getByText("удалить товар из корзины");
fireEvent.click(button);
expect(delItemCart).toHaveBeenCalledWith(item.id);
});
});