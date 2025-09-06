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
            className="h-screen bg-[#1E242C] text-white flex flex-col justify-between"
        >
            {/* Main content */}
            <div className="flex flex-1 items-center justify-center px-10">
                <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl">
                    {/* Left side - Illustration + Text */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Got a project in<br />
                            <span className="text-teal-400">mind?</span>
                        </h2>

                        <div className="mt-10 flex flex-col md:flex-row gap-6 items-center">
                            {/* Left image */}
                            <div>
                                <Image
                                    src="/arrow_contact.png"
                                    alt="Envelope Illustration"
                                    width={200} // adjust as needed
                                    height={200}
                                    className="object-contain"
                                />
                            </div>

                            {/* Right image */}
                            <div>
                                <Image
                                    src="/contact.png"
                                    alt="Contact Illustration"
                                    width={200} // adjust as needed
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                        </div>


                    </div>

                    {/* Right side - Form */}
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </section>
    );
}
