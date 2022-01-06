import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import classes from "./Footer.module.scss";
import logo from "../../images/small-logo.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";

const Footer: React.FC<{ styles?: string }> = (props) => {
  const isLoading = useSelector(
    (state: RootState) => state.isLoading.isLoading
  );
  const movies = useSelector((state: RootState) => state.movies.allMovies);
  const noData = !isLoading && movies.length === 0;

  const navToUrl = (url: string) => {
    window.location.assign(url);
  };
  return (
    <footer
      className={
        noData ? `${classes.footer} ${classes["no-data"]}` : classes.footer
      }
    >
      <img className={classes["small-logo-img"]} src={logo} alt="Logo" />
      <div className={classes["contact-us"]}>Contact us</div>
      <div className={classes.text}>support@nextmovies.com</div>
      <div className={classes.text}>Mon - Fri | 6:00am - 5:00 pm PT</div>
      <div className={classes["social-media"]}>
        <img
          onClick={() => navToUrl("https://www.facebook.com/NextInsuranceIL")}
          className={classes.item}
          src={facebook}
          alt="facebook"
        />
        <img
          onClick={() =>
            navToUrl("https://www.linkedin.com/company/nextinsurance/")
          }
          className={classes.item}
          src={linkedin}
          alt="linkedin"
        />
        <img
          onClick={() => navToUrl("https://www.twitter.com")}
          className={classes.item}
          src={twitter}
          alt="twitter"
        />
        <img
          onClick={() => navToUrl("https://www.instagram.com/nextinsurance/")}
          className={classes.item}
          src={instagram}
          alt="instagram"
        />
        <img
          onClick={() => navToUrl("https://www.youtube.com/c/NextInsurance")}
          className={classes.item}
          src={youtube}
          alt="youtube"
        />
      </div>
    </footer>
  );
};

export default Footer;
