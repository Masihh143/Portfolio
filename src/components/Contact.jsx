import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // prevent page refresh

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message.");
        console.error("Email error:", error);
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-20 gap-12"
    >
      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-1/2 flex flex-col gap-6 max-w-md"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="bg-transparent border-b border-white focus:outline-none placeholder-white/60 py-2"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="bg-transparent border-b border-white focus:outline-none placeholder-white/60 py-2"
        />
        <textarea
          name="message"
          placeholder="Share your thoughts"
          rows="4"
          required
          className="bg-transparent border-b border-white focus:outline-none placeholder-white/60 py-2"
        />
        <button
          type="submit"
          className="relative px-8 py-3 uppercase font-semibold text-sm text-black bg-white rounded-md transition-all overflow-hidden shadow-[0_0_20px_#00fff7]
            before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-cyan-400 before:to-blue-600
            before:rounded-md before:blur-[10px] before:opacity-70 before:scale-110"
        >
          <span className="relative z-10">Share your feedback</span>
        </button>
        {sent && <p className="text-green-400 text-sm mt-2">Message sent!</p>}
      </form>

      {/* Right Side Text */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl flex flex-col font-extrabold mb-35">
          <span className="text-white text-[80px] drop-shadow-[0_1px_10px_cyan]">Contact</span>
          <span className="text-cyan-400 text-[70px] pl-8 decoration-white">⎯⎯ Us</span>
        </h2>
        <p className="text-white/70 max-w-sm mx-auto md:mx-0">
          It is very important for us to keep in touch with you, so we are always
          ready to answer any question that interests you. Shoot!
        </p>
      </div>
    </section>
  );
}
