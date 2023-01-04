import classNames from "classnames";
import React from "react";

interface PropTypes {
  children: React.ReactChild;
}

export const Button = ({ children }: PropTypes) => {
  const classes = classNames(
    "px-3 py-2 border-3 bg-secondary text-white font-semibold hover:opacity-80"
  );

  return <button className={classes}>{children}</button>;
};
