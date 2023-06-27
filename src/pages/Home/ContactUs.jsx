import React from "react";
import Lottie from "lottie-react";
import contactUs from "../../assets/contact-us.json";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const ContactUs = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    if (data) {
      toast.success("Message sent! We'll contact you soon...");
      reset();
    }
    console.log(data);
  };

  return (
    <div className="my-36">
      <h2 className="text-center font-extrabold text-2xl lg:text-5xl">
        Contact Us
      </h2>
      <hr className="border-t border-gray-400 w-3/12 lg:w-1/6 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        Let's Connect and Celebrate Japanese Culinary Excellence. We are
        thrilled to connect with fellow culinary enthusiasts and food lovers who
        share our passion for Japanese cuisine.
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Lottie className="lg:h-[100vh]" animationData={contactUs} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 mx-auto p-10 rounded-xl space-y-6"
        >
          <label className="flex flex-col gap-y-2 text-lg font-medium">
            Your name
            <input
              required
              {...register("name")}
              className="py-3 px-4 rounded-full shadow-2xl"
              type="text"
              name="name"
              placeholder="your name"
            />
          </label>
          <label className="flex flex-col gap-y-2 text-lg font-medium">
            Your email
            <input
              required
              {...register("email")}
              className="py-3 px-4 rounded-full shadow-2xl"
              type="email"
              name="email"
              placeholder="your email"
            />
          </label>
          <label className="flex flex-col gap-y-2 text-lg font-medium">
            Phone number
            <input
              required
              {...register("number")}
              className="py-3 px-4 rounded-full shadow-2xl"
              type="text"
              name="number"
              defaultValue="+880"
            />
          </label>
          <label className="flex flex-col gap-y-2 text-lg font-medium">
            Your message
            <textarea
              className="px-4 rounded-xl shadow-2xl"
              required
              {...register("message")}
              type="text"
              name="message"
              placeholder="Enter your message"
              cols="15"
              rows="5"
            ></textarea>
          </label>

          <input
            className="px-5 py-3 cursor-pointer border-black border-b border-r-2 text-lg font-semibold hover:bg-black hover:text-white rounded-full shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150"
            type="submit"
            value="Send"
          />
        </form>
      </div>

      <Toaster />
    </div>
  );
};

export default ContactUs;
