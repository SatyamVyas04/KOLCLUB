import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-4">
      <main>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={400}
          height={75}
          priority
        />
      </main>
      <p className="font-pxl text-4xl">Testing Test Selections</p>
    </div>
  )
}
