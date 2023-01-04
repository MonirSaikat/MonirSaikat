import classNames from "classnames";

export const Button = ({ children }) => {
  const classes = classNames(
    "px-3 py-2 border-3 bg-secondary text-white font-semibold hover:opacity-80"
  );

  return <button className={classes}>{children}</button>;
};
