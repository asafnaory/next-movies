import { render } from "@testing-library/react";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";
import MovieItemModal from "../MovieItemModal";
import { MOCK_MOVIES } from "../../../mocks/movies-mock";

ReactDOM.createPortal = (node: React.ReactNode) => node as ReactPortal;

const MovieItemModalProps = {
  title: MOCK_MOVIES[0].title,
  summary: MOCK_MOVIES[0].synopsis,
  largeimage: MOCK_MOVIES[0].largeimage,
  runtime: MOCK_MOVIES[0].runtime,
  rating: MOCK_MOVIES[0].rating,
  toggleModal: () => {},
};
describe("MovieItemModal", () => {

  it("should render modal properly ", () => {
    // Arrage
    const { getByText } = render(
      <MovieItemModal {...MovieItemModalProps} />
    );

    //Act

    //Assert
    getByText(MovieItemModalProps.title);
    getByText(MovieItemModalProps.summary);
    getByText(`${MovieItemModalProps.rating}/10`);
  });
});
