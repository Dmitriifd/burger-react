import style from "./Container.module.css";
import classNames from "classnames";

const Container = ({ className, children }) => {
  return (
    <div className={classNames(style.container, className)}>{children}</div>
  );
};

export { Container };
