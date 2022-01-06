import { render } from "@testing-library/react";
import { ReactPortal } from "react";
import userEvent from "@testing-library/user-event";
import ReactDOM from "react-dom";
import Header from "../Header";
import * as reactRedux from "react-redux";

ReactDOM.createPortal = (node: React.ReactNode) => node as ReactPortal;

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");

describe("Header", () => {
  it("should render next logo", () => {
    // Arrage
    const { getByAltText } = render(<Header />);
    const logo = getByAltText("Logo");
    // Act

    //Assert
    expect(logo).toHaveAttribute("src", "logo.png");
  });
});
