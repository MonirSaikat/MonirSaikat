import classNames from 'classnames';

export const ProjectHeading = ({ children, icon }) => {
  const classes = classNames("text-2xl mb-2 text-gray-800 font-semibold inline-flex items-center")

  return (
    <h2 className={classes}>
      <span className='mr-1'>{children}</span>
      {icon}
    </h2>
  );
};
