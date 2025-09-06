"use client";

import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1E242C] py-10 px-10 flex flex-col items-center justify-center gap-8">
            {/* Navbar links */}
            <div className="flex items-center gap-12 text-gray-200">
                <a href="#home" className="flex items-center gap-2 hover:text-white transition">
                    <Image src="/home.png" alt="Home" width={20} height={20} />
                    <span>Home</span>
                </a>
                <a href="#about" className="flex items-center gap-2 hover:text-white transition">
                    <Image src="/user.png" alt="About" width={20} height={20} />
                    <span>About me</span>
                </a>
                <a href="#contact" className="flex items-center gap-2 hover:text-white transition">
                    <Image src="/phone.png" alt="Contact" width={20} height={20} />
                    <span>Contact</span>
                </a>
            </div>

            {/* Social media icons */}
            <div className="flex gap-6">
                <a
                    href="https://www.facebook.com/yourpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2A313A] hover:bg-[#3b3f45] transition"
                >
                    <Image
                        src="/facebook.png"
                        alt="Facebook"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>
                <a
                    href="https://www.instagram.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2A313A] hover:bg-[#3b3f45] transition"
                >
                    <Image
                        src="/instagram.png"
                        alt="Instagram"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>
                <a
                    href="https://www.twitter.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2A313A] hover:bg-[#3b3f45] transition"
                >
                    <Image
                        src="/twitter.png"
                        alt="Twitter"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>
                <a
                    href="https://www.youtube.com/yourchannel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2A313A] hover:bg-[#3b3f45] transition"
                >
                    <Image
                        src="/send.png"
                        alt="YouTube"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>
            </div>



            {/* Terms */}
            <p className="w-full text-sm text-gray-400 text-right">
                Terms of Service – Privacy Policy
            </p>
        </footer>
    );
}
