"use client";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const font = Montserrat({
  weight: "100",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-ghost-black">
        <div className="relative flex place-items-center flex-col">
          <Image
            className="relative rounded-full bg-ghost-black--glow shadow-[0_0_100px_-30px_#191919,0_0_110px_30px_#1c1c1c,0_0_120px_0px_#1f1f1f]"
            src="./logo.png"
            alt="GhostVeil Logo"
            width={400}
            height={400}
            priority
          />
          <div className={`text-6xl z-10 ${font.className}`}>
            GhostVeil
          </div>
          <p className="text-white text-opacity-60 z-10">
            Coming soon
          </p>
        </div>
      </main>
    </>
  );
}
