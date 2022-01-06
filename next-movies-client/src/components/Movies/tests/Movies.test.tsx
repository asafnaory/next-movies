import React, { ReactPortal } from "react";
import * as reactRedux from "react-redux";
import { render } from "@testing-library/react";
import Movies from "../Movies";
import { MOCK_MOVIES } from "../../../mocks/movies-mock";
import ReactDOM from "react-dom";

ReactDOM.createPortal = (node: React.ReactNode) => node as ReactPortal;
const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
describe("Movies component", () => {
  it("should render 3 movies on the screen", () => {
    // Arrage

    useSelectorMock.mockReturnValueOnce({ filteredMovies: MOCK_MOVIES });
    const { getByText } = render(<Movies />);

    //Act

    //Assert
    getByText("EXPLORE YOUR NEXT MOVIES AND TV SHOWES");
    getByText("title1 (released1)");
    getByText("rating1");
    getByText("title2 (released2)");
    getByText("rating2");
    getByText("title3 (released3)");
    getByText("rating3");
  });
});
