import classNames from "classnames";

export const ProjectHeading = ({ children, icon }) => {
  const classes = classNames(
    "text-2xl mb-2 text-gray-800 font-semibold inline-flex items-center"
  );

  return (
    <h2 className={classes}>
      <span className="mr-1 dark:text-gray-300">{children}</span>
      <div className="dark:text-gray-200">{icon}</div>
    </h2>
  );
};
