import "../../../../setupTests";
import { shallow } from "enzyme";
import InputSearch from "./InputSearch";

describe("InputSearch", () => {
  it("renders input and search icon", () => {
    const wrapper = shallow(<InputSearch />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("Search")).toHaveLength(1);
  });

  it("renders input with placeholder", () => {
    const wrapper = shallow(<InputSearch />);
    expect(wrapper.find("input").prop("placeholder")).toEqual("Поиск...");
  });

  it("has correct class names", () => {
    const wrapper = shallow(<InputSearch />);
    expect(wrapper.find(".wrapper")).toHaveLength(1);
    expect(wrapper.find(".inputSearch")).toHaveLength(1);
    expect(wrapper.find(".search")).toHaveLength(1);
  });
});
