// jest.mock('react-dom');

import { render } from "@testing-library/react";
import { ReactPortal } from "react";
import ReactDOM from "react-dom";
import userEvent from "@testing-library/user-event";
import MovieItem from "../MovieItem";
import { MOCK_MOVIES } from "../../../mocks/movies-mock";

ReactDOM.createPortal = (node: React.ReactNode) => node as ReactPortal;

describe("MovieItem ", () => {
  it("should create a movie item", () => {
    // Arrage
    const { getByText } = render(<MovieItem {...MOCK_MOVIES[0]} />);
    //Act

    //Assert
    getByText("title1 (released1)");
    getByText("rating1");
  });
  it('should open modal when click on "read more" ', () => {
    // Arrage
    const { getByRole, getByText, findByTestId } = render(
      <MovieItem {...MOCK_MOVIES[0]} />
    );
    const readMore = getByRole("button");

    //Act
    userEvent.click(readMore);

    //Assert
    findByTestId("movie-modal");
    getByText("title1");
    getByText("synopsis1");
    getByText(`rating1/10`);
    getByText(`Back to list`);
  });
});
