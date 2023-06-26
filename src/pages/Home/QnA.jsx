import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

const QnA = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isEmail, setIsEmail] = useState("");

  const onSubmit = (data) => {
    setIsEmail(data.email);
    console.log(data);
    handleSentEmail(data.email);
    reset();
  };

  const handleSentEmail = (email) => {
    if (email) {
      toast.success("Your email has been added");
    }
  };

  return (
    <div>
      <h2 className="text-center font-extrabold text-2xl lg:text-5xl">
        News Letter Subscription
      </h2>
      <hr className="border-t border-gray-400 w-2/3 lg:w-1/2 mx-auto" />
      <p className="text-lg mt-6 w-full lg:w-1/2 mx-auto text-center mb-16">
        Stay connected with the vibrant world of Japanese culinary delights by
        subscribing to our Japanese Chef Recipe Newsletter.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex justify-between border px-16 py-5 bg-base-100 shadow-2xl rounded-full w-1/2 mx-auto"
      >
        <input
          className="text-lg px-5 py-2 w-9/12 rounded-full"
          name="email"
          type="email"
          {...register("email", { required: true })}
          placeholder="yourname@email.com"
        />
        <input
          className={`px-4 py-1 cursor-pointer bg-black text-white rounded-full
          text-lg ${isEmail && "btn-disabled"}`}
          type="submit"
          value="Send"
        />
      </form>
      {isEmail && (
        <p className="text-center mt-6">
          <small>Note: Please refresh to add new Email!</small>
        </p>
      )}
      <Toaster />
    </div>
  );
};

export default QnA;
