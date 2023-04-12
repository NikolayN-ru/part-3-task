import React from "react";
import "../../../setupTests";
import { shallow } from "enzyme";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./Menu";
import { brandAdded, resetBrand } from "../../redux/brandActive";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe("Menu", () => {
  let mockDispatch;
  let mockUseSelector;

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    mockUseSelector = jest.fn();
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        brands: {
          brands: [
            { id: 1, code: "brand1" },
            { id: 2, code: "brand2" },
            { id: 3, code: "brand3" },
          ],
        },
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the correct number of checkboxes", () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(3);
  });

  it('dispatches brandAdded action when "Применить" button is clicked', () => {
    const wrapper = shallow(<Menu />);
    const button = wrapper.find("button.success");
    button.simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(brandAdded([]));
  });

  it('dispatches resetBrand action when "Х сбросить" button is clicked', () => {
    const wrapper = shallow(<Menu />);
    const button = wrapper.find("button.reset");
    button.simulate("click");
    expect(mockDispatch).toHaveBeenCalledWith(resetBrand());
  });
});
