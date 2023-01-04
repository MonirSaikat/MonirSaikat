import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { Meta } from "components/Meta";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { createRef, useEffect, useState } from "react";
import { SectionTitle } from "components/SectionTitle";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
  })
  .required();

const contactPage = () => {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const form = createRef<HTMLFormElement>();

  useEffect(() => {
    const timer = setTimeout(() => setSuccessMessage(null), 3000);
    return () => clearTimeout(timer);
  }, [successMessage]);

  const onSubmit = () => {
    emailjs
      .sendForm(
        process.env.SERVICE_ID || "",
        process.env.TEMPLATE_KEY || "",
        form.current || "",
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          reset();
          setSuccessMessage("Your message has been sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Meta title="Contact" />
      <div>
        <SectionTitle className="mb-0">Contact me</SectionTitle>
        <p className="mb-3 dark:text-gray-200">
          Have an idea to implement ? Just leave me a message here.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
          <Input
            register={register}
            errors={errors as any}
            placeholder="Enter your full name"
            label="name"
          />
          <Input
            register={register}
            errors={errors as any}
            placeholder="Enter your email address"
            label="email"
          />
          <Input
            long
            register={register}
            errors={errors as any}
            placeholder="Enter your message"
            label="message"
            name="message"
          />

          {successMessage && (
            <p className="bg-green-500 p-3 text-gray-100 mb-2 rounded-md shadow-md animate-bounce">
              {successMessage}
            </p>
          )}

          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default contactPage;
