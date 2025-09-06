"use client";

import Image from "next/image";
import Navbar from "./Navbar";

export default function Footer() {
    return (
        <footer className="bg-[#1E242C] py-10 px-10 flex flex-col items-center justify-center gap-8">
            {/* Navbar links */}

            <Navbar/>
            {/* <div className="flex items-center gap-12 text-gray-200">
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
            </div> */}

            {/* Social media icons */}
            <div className="flex gap-6">
                <a
                    href="https://github.com/northernwolf00"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-[#2A313A] hover:bg-[#3b3f45] transition"
                >
                    <Image
                        src="/github.png"
                        alt="GitHub"
                        width={20}
                        height={20}
                        className="object-contain"
                    />
                </a>
                <a
                    href="https://www.instagram.com/guwanc_haldurdyyev/"
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
                    href="https://x.com/northernerwolf7?t=yv25QRaObsG-nQKI0stpVw&s=35"
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
                    href="https://t.me/northern_wolf00"
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
