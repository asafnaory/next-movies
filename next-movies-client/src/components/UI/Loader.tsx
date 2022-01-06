import classes from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={classes.main}>
      <div className={classes.loader}>
        <div className={classes["loader__filmstrip"]}></div>
        <p className={classes["loader__text"]}>loading</p>
      </div>
    </div>
  );
};

export default Loader;
