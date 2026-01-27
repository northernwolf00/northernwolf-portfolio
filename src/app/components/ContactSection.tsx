"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Footer from "./Footer";
import ContactForm from "./ContactForm";
import Image from "next/image";

export default function ContactSection() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        // You can integrate EmailJS, Nodemailer API, or a backend here
    };

    return (
        <section
            id="contact"
            className="min-h-screen text-white flex flex-col justify-between py-16 sm:py-20"
        >
            {/* Main content */}
            <div className="flex flex-1 items-center justify-center px-3 sm:px-4 md:px-6 lg:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full max-w-6xl">
                    {/* Left side - Illustration + Text */}
                    <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                            Got a project in<br />
                            <span className="text-teal-400">mind?</span>
                        </h2>

                        <div className="mt-4 sm:mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center md:justify-start">
                            {/* Left image */}
                            <div>
                                <Image
                                    src="/arrow_contact.png"
                                    alt="Envelope Illustration"
                                    width={150}
                                    height={150}
                                    className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px]"
                                />
                            </div>

                            {/* Right image */}
                            <div>
                                <Image
                                    src="/contact.png"
                                    alt="Contact Illustration"
                                    width={150}
                                    height={150}
                                    className="object-contain w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-[200px] lg:h-[200px]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="order-1 md:order-2">
                        <ContactForm />
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}
