import { Meta } from 'components/Meta';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'components/Input';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
}).required();

const contactPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
  };

  return(
    <div>
      <Meta title='Contact' />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            errors={errors}
            placeholder="Enter your full name"
            label="name"
          />
          <Input
            register={register}
            errors={errors}
            placeholder="Enter your email address"
            label="email"
          />
          <Input
            long
            register={register}
            errors={errors}
            placeholder="Enter your message"
            label="message"
          />

          <button className="p-3 my-3 bg-sky-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default contactPage;
