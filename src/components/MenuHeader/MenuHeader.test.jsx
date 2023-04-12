import React from "react";
import '../../../setupTests';
import { shallow } from "enzyme";
import MenuHeader from "./MenuHeader";

describe("MenuHeader", () => {
  it("renders a list with four items", () => {
    const wrapper = shallow(<MenuHeader />);
    expect(wrapper.find("li")).toHaveLength(4);
  });

  it("renders the correct text for each item", () => {
    const wrapper = shallow(<MenuHeader />);
    expect(wrapper.find("li").at(0).text()).toEqual("О компании");
    expect(wrapper.find("li").at(1).text()).toEqual("Доставка и оплата");
    expect(wrapper.find("li").at(2).text()).toEqual("Возврат");
    expect(wrapper.find("li").at(3).text()).toEqual("Контакты");
  });

  it("renders the correct class name for the wrapper", () => {
    const wrapper = shallow(<MenuHeader />);
    expect(wrapper.find("ul").hasClass("wrapper")).toEqual(true);
  });
});
