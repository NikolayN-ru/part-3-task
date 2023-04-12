import "../../../setupTests";
import { shallow } from "enzyme";
import Header from "./Header";
import Mail from "../Icons/mail";
import Point from "../Icons/point";
import MenuHeader from "../MenuHeader/MenuHeader";

describe("Header component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
  });
  it("should render a div with class 'wrap'", () => {
    expect(wrapper.find("div.wrap")).toHaveLength(1);
  });

  it("should render a Mail icon", () => {
    expect(wrapper.find(Mail)).toHaveLength(1);
  });

  it("should render a Point icon", () => {
    expect(wrapper.find(Point)).toHaveLength(1);
  });

  it("should render a MenuHeader component", () => {
    expect(wrapper.find(MenuHeader)).toHaveLength(1);
  });
});
