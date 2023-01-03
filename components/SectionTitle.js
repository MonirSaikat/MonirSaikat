import classNames from 'classnames';

export const SectionTitle = ({ children, subtitle = false }) => {
  const classes = classNames(
    {
      'text-2xl': subtitle
    },
    'text-4xl mb-5 font-bold text-gray-700'
  );

  return (
    <div>
      <h2 className={classes}>{children}</h2>
    </div>
  );
};
