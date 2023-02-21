import classNames from "classnames";
import React from "react";

interface PropTypes {
  children: React.ReactChild;
  subtitle?: boolean;
  className?: string;
}

export const SectionTitle = ({ children, subtitle, className }: PropTypes) => {
  const classes = classNames(
    className,
    {
      "text-2xl": subtitle,
    },
    "text-4xl mb-5 font-bold text-sky-500 dark:text-gray-200"
  );

  return (
    <div>
      <h2 className={classes}>{children}</h2>
    </div>
  );
};
