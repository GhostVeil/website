import Image from 'next/image'
import { Montserrat } from 'next/font/google';

const font = Montserrat({
  weight: '100',
  subsets: ['latin']
})

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-ghost-black">
      <div className="relative flex place-items-center flex-col">
        <Image
          className="relative"
          src="./GhostVeil.png"
          alt="GhostVeil Logo"
          width={400}
          height={400}
          priority
        />
        <div className={`text-6xl ${font.className}`}>
          GhostVeil
        </div>
        <p className="text-white text-opacity-60">
          Coming soon
        </p>
      </div>
    </main>
  )
}
