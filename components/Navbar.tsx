import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[80px] bg-black/60 flex justify-between items-center px-10 md:px-20">
      <Link href={`/`} className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Alex{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            Osuya{" "}
          </span>
        </h1>
      </Link>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social) => (
          <Link key={social.link} href={social.link}>
            <Image
              key={social.name}
              src={social.src}
              alt={social.name}
              width={28}
              height={28}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
