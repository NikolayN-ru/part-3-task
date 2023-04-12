import "../../../setupTests";
import { useSelector } from "react-redux";
import { shallow } from "enzyme";
import Catalog from "./Catalog";
import Item from "../Item/Item";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("Catalog component", () => {
  let wrapper;
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue(products);
    wrapper = shallow(<Catalog />);
  });

  afterEach(() => {
    useSelector.mockClear();
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the correct number of items", () => {
    expect(wrapper.find(Item)).toHaveLength(products.length);
  });

  it("should pass the correct props to the Item component", () => {
    const itemWrapper = wrapper.find(Item).first();
    expect(itemWrapper.props()).toEqual(products[0]);
  });
});
