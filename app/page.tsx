"use client"

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/main-bg.webp)" }}
      >
        <div className="pl-10 xl:pl-40 pb-16 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="lg:text-[50px] md:text-3xl text-2xl md:leading-[3.25rem] text-white font-semibold">
            Make anything possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              Flutter
            </span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base xl:w-full md:w-[70%] w-full">
            With Flutter, I can turn your ideas into fully functional apps across mobile, web, and desktop. Whether it’s a <strong>drum app</strong> that reacts to every tap with precision, a <strong>custom e-commerce platform</strong>, or an <strong>AI-powered assistant</strong>, Flutter’s powerful tools and flexible design system make it all possible. <span className="hidden md:block">Its cross-platform capabilities mean faster development without compromising performance or user experience, ensuring your vision comes to life on any device.</span>
          </p>

          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="https://drive.google.com/file/d/1hBB4d7HF6VlCgQIT4unJDT8SgYHKaJA1/view?usp=drive_link"
              target="_blank"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-trasparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              My projects
            </Link>

          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link
          href="https://drive.google.com/file/d/1hBB4d7HF6VlCgQIT4unJDT8SgYHKaJA1/view?usp=drive_link"
          target="_blank"
          className="rounded-[20px] group bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          Learn more
        </Link>

        <Link
          href="/my-projects"
          className="rounded-[20px] group bg-trasparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My projects
        </Link>
      </div>

      <div className="lg:absolute hidden lg:block bottom-0 right-0 z-[10]">
        <Image
          src="/horse.png"
          alt="horse"
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image
          src="/trees.webp"
          alt="trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div>

      <Image
        src="/stars.png"
        alt="stars"
        height={300}
        width={300}
        className="absolute top-0 left-0 z-[10]"
      />
    </main>
  );
}
