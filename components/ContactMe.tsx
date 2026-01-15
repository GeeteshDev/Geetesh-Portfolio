import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.subject || "Contact from portfolio");
    const body = encodeURIComponent(
      `Hi, my name is ${formData.name}.\n\n${formData.message}\n\n(${formData.email})`
    );
    window.location.href = `mailto:geeteshaheriya99@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center
                 text-center md:text-left max-w-7xl mx-auto
                 px-5 md:px-10 py-16"
    >
      <h3 className="uppercase tracking-[12px] sm:tracking-[15px] text-gray-500 text-lg sm:text-2xl mb-4">
        Contact
      </h3>

      <h4 className="text-xl sm:text-2xl md:text-4xl font-semibold text-center leading-snug max-w-3xl">
        I have just got what you need.{" "}
        <span className="underline decoration-[#F7AB0A]/50">Let’s Talk.</span>
      </h4>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 w-full max-w-2xl mx-auto flex flex-col gap-2"
        autoComplete="off"
      >
        <div className="flex flex-col md:flex-row gap-2">
          <input {...register('name')} placeholder="Name" className="contactInput flex-1" type="text" />
          <input {...register('email')} placeholder="Email" className="contactInput flex-1" type="email" />
        </div>
        <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />

        {/* shorter message box on small screens */}
        <textarea
          {...register('message')}
          placeholder="Message"
          className="contactInput min-h-[100px] sm:min-h-[140px] md:min-h-[140px]"
        />

        <button
          type="submit"
          className="bg-[#F7AB0A] px-8 py-4 rounded-md text-black font-bold text-lg w-full md:w-auto mx-auto"
        >
          Submit
        </button>
      </form>

      {/* Bottom contact info */}
      <div className="w-full max-w-2xl mx-auto mt-6 pt-6 border-t border-white/10 pb-12 sm:pb-0">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-6 text-gray-300/90 text-sm">
          <a
            href="tel:+919907430506"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#F7AB0A] h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25A2.25 2.25 0 0 0 21.75 19.5v-1.37c0-.52-.35-.97-.85-1.09l-4.42-1.11a1 1 0 0 0-1.18.42l-.97 1.29a1 1 0 0 1-1.21.38 12.04 12.04 0 0 1-7.14-7.14 1 1 0 0 1 .38-1.21l1.29-.97a1 1 0 0 0 .42-1.17L6.96 3.1a1.13 1.13 0 0 0-1.09-.85H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            +91 9907430506
          </a>

          <a
              href="mailto:geeteshaheriya99@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors break-all max-w-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#F7AB0A] h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75m19.5 0v.24a2.25 2.25 0 0 1-1.07 1.92l-7.5 4.62a2.25 2.25 0 0 1-2.36 0L3.32 8.91A2.25 2.25 0 0 1 2.25 6.99V6.75" />
            </svg>
            geeteshaheriya99@gmail.com
          </a>
        </div>
      </div>

    </section>
  );
}
