import { Meta } from 'components/Meta';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import emailjs from '@emailjs/browser';
import { createRef, useEffect, useState } from 'react';

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().required()
}).required();

const contactPage = () => {
  const [successMessage, setSuccessMessage] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const form = createRef()

  useEffect(() => {
    const timer = setTimeout(() => setSuccessMessage(null), 3000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  const onSubmit = () => {
    emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      )
      .then(
        (result) => {
          reset();
          setSuccessMessage('Your message has been sent !');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return(
    <div>
      <Meta title='Contact' />
      <div>
        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
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
            name="message"
          />

          { successMessage && <p className='bg-green-500 p-3 text-gray-100 mb-2 rounded-md shadow-md animate-bounce'>{ successMessage }</p> }

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default contactPage;
