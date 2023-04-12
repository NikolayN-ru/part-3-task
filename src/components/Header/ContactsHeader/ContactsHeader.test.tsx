import "../../../setupTests";
import { render } from "@testing-library/react";
import ContactsHeader from "./ContactsHeader";

describe("ContactsHeader", () => {
  it("renders phone number", () => {
    const { getByText } = render(<ContactsHeader />);
    const phoneNumber = getByText((content, element) => {
      return (
        content.includes("+7 (777) 490-00-91")
      );
    });
    expect(phoneNumber).toBeInTheDocument();
  });

  it("renders working hours", () => {
    const { getByText } = render(<ContactsHeader />);
    const workingHours = getByText((content, element) => {
      return (
        content.includes("время работы: 9:00-20:00")
      );
    });
    expect(workingHours).toBeInTheDocument();
  });

  it("renders call me image", () => {
    const { getByAltText } = render(<ContactsHeader />);
    const callMeImage = getByAltText("callme");
    expect(callMeImage).toBeInTheDocument();
  });

  it("renders call me link", () => {
    const { getByText } = render(<ContactsHeader />);
    const callMeLink = getByText((content, element) => {
      return (
        content.includes("Заказать звонок")
      );
    });
    expect(callMeLink).toBeInTheDocument();
  });
});