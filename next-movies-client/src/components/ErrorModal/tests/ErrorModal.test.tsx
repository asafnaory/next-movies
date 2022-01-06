import { getByText, render } from "@testing-library/react";
import { ReactPortal } from "react";
import ReactDOM from "react-dom";
import ErrorModal from "../ErrorModal";

describe("ErrorModal", () => {
  ReactDOM.createPortal = (node: React.ReactNode) => node as ReactPortal;

  it("should dispay correct ", () => {
    // Arrage
    const { getByAltText, getByText } = render(<ErrorModal />);
    const nextLogo = getByAltText("Logo");
    // Act

    //Assert
    expect(nextLogo).toHaveAttribute("src", "next.png");
    getByText("Unfortunately there is a problem, pleast try again later");
    getByText("time");
  });
});
