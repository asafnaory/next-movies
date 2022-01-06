import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MOCK_MOVIES } from "../../../mocks/movies-mock";
import Footer from "../Footer";

Object.defineProperty(window, "location", {
  writable: true,
  value: { assign: jest.fn() },
});

jest.mock("react-redux", () => ({
  useSelector: () => MOCK_MOVIES,
  useDispatch: () => jest.fn(),
}));

describe("Footer", () => {
  it("should render social media logos", () => {
    // Arrage
    const { getByAltText } = render(<Footer />);
    const facebook = getByAltText("facebook");
    const instagram = getByAltText("instagram");
    const linkedin = getByAltText("linkedin");
    const youtube = getByAltText("youtube");
    const twitter = getByAltText("twitter");
    // Act

    //Assert
    expect(facebook).toHaveAttribute("src", "facebook.png");
    expect(instagram).toHaveAttribute("src", "instagram.png");
    expect(linkedin).toHaveAttribute("src", "linkedin.png");
    expect(youtube).toHaveAttribute("src", "youtube.png");
    expect(twitter).toHaveAttribute("src", "twitter.png");
  });
  it("should navigate to facebook when clicked", () => {
    // Arrage
    const { getByAltText } = render(<Footer />);
    const facebook = getByAltText("facebook");

    // Act
    userEvent.click(facebook);

    //Assert
    expect(window.location.assign).toBeCalledWith(
      "https://www.facebook.com/NextInsuranceIL"
    );
  });
  it("should navigate to facebook when clicked", () => {
    // Arrage
    const { getByAltText } = render(<Footer />);
    const twitter = getByAltText("twitter");

    // Act
    userEvent.click(twitter);

    //Assert
    expect(window.location.assign).toBeCalledWith("https://www.twitter.com");
  });
  it("should navigate to facebook when clicked", () => {
    // Arrage
    const { getByAltText } = render(<Footer />);
    const instagram = getByAltText("instagram");

    // Act
    userEvent.click(instagram);

    //Assert
    expect(window.location.assign).toBeCalledWith(
      "https://www.instagram.com/nextinsurance/"
    );
  });
  it("should navigate to facebook when clicked", () => {
    // Arrage
    const { getByAltText } = render(<Footer />);
    const youtube = getByAltText("youtube");

    // Act
    userEvent.click(youtube);

    //Assert
    expect(window.location.assign).toBeCalledWith(
      "https://www.youtube.com/c/NextInsurance"
    );
  });
  it("should navigate to facebook when clicked", () => {
    // Arrage
    const { getByAltText } = render(<Footer />);
    const linkedin = getByAltText("linkedin");

    // Act
    userEvent.click(linkedin);

    //Assert
    expect(window.location.assign).toBeCalledWith(
      "https://www.linkedin.com/company/nextinsurance/"
    );
  });
});
