"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Top Image */}
      <Image
        src="/keyboard.png"
        alt="Keyboard Illustration"
        width={120}
        height={120}
        className="absolute -top-10 left-10 opacity-70"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="relative bg-[#1E242C] p-8 flex flex-col gap-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-white">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2A313A] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm font-semibold text-white">Your email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-[#2A313A] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="mb-2 text-sm font-semibold text-white">Your Message</label>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-[#2A313A] text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 self-start px-8 py-3 rounded-full bg-teal-400 text-black font-semibold hover:bg-teal-500 transition shadow-md"
        >
          Send Message
          <Image src="/send.png" alt="Send" width={24} height={24} />
        </button>
      </form>

      {/* Bottom-right Image */}
      <Image
        src="/envelope.png"
        alt="Envelope Illustration"
        width={80}
        height={80}
        className="absolute -bottom-8 right-8 opacity-70"
      />
    </div>
  );
}
