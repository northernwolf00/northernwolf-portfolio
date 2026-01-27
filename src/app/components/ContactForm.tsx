"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Add form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full max-w-2xl">
            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm sm:text-base"
                    required
                />
            </div>

            {/* Email Field */}
            <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all text-sm sm:text-base"
                    required
                />
            </div>

            {/* Message Field */}
            <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Your Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={5}
                    className="w-full px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-3.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl sm:rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none text-sm sm:text-base"
                    required
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black text-sm sm:text-base md:text-lg font-bold rounded-full hover:from-cyan-500 hover:to-cyan-600 active:scale-95 transition-all shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-2 sm:gap-3"
            >
                Send Message
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </form>
    );
}
