import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="flex items-center gap-12 text-gray-200">
      <Link href="/#home" className="flex items-center gap-2 hover:text-white transition">
        <Image src="/home.png" alt="Home" width={20} height={20} />
        <span>Home</span>
      </Link>

      <Link href="/#about" className="flex items-center gap-2 hover:text-white transition">
        <Image src="/user.png" alt="About" width={20} height={20} />
        <span>About me</span>
      </Link>

      {/* <Link href="/blocs" className="relative group flex items-center gap-2 px-4 py-1.5 rounded-full overflow-hidden transition-all duration-300">
        <span className="relative z-10 flex items-center gap-2 font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300 text-sm">
          <Image src="/book.png" alt="Blocs" width={18} height={18} className="transition-all" />
          Blocs
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300 rounded-full"></div>
        <div className="absolute inset-0 border border-cyan-400/20 group-hover:border-transparent rounded-full transition-colors"></div>
      </Link> */}


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
