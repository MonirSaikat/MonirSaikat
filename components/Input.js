import classNames from 'classnames';

export const Input = ({ label, className, register, errors, long, ...rest }) => {
  const classes = classNames(
    'border-2 rounded-sm py-2 px-4 w-full outline-none focus:border-gray-700',
    {'border-red-500': errors[label]?.message}
  );

  const renderTextarea = (
    <textarea
      className={classes}
      id={label}
      type='text'
      {...register(label, { required: true })}
      {...rest}
    />
  );

  const renderInput = (
    <input
      className={classes}
      id={label}
      type='text'
      {...register(label, { required: true })}
      {...rest}
    />
  );

  return (
    <div className={`${className} mb-3`}>
      <label className='block mb-2 text-xl capitalize dark:text-gray-200' htmlFor={label}>{label}</label>
      {long ? renderTextarea : renderInput}
      <small className="text-red-600 font-semibold">{errors[label]?.message}</small>
    </div>
  );
};
