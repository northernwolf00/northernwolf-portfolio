import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex items-center gap-12 text-gray-200">
      <a href="#home" className="flex items-center gap-2 hover:text-white transition">
        <Image src="/home.png" alt="Home" width={20} height={20} />
        <span>Home</span>
      </a>

      <a href="#about" className="flex items-center gap-2 hover:text-white transition">
        <Image src="/user.png" alt="About" width={20} height={20} />
        <span>About me</span>
      </a>

      <div className="relative">
        <button
          onClick={() => setShowContact(!showContact)}
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Image src="/phone.png" alt="Contact" width={20} height={20} />
          <span>Contact</span>
        </button>

        {showContact && (
          <div className="absolute mt-2 p-3 bg-[#222831] text-white rounded shadow-md w-70">
            <p>📞 +99364500768</p>
            <p>✉️ googadevgroup@gmail.com</p>
          </div>
        )}
      </div>
    </div>
  );
}
