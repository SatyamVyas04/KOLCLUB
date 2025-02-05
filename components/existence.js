import Image from 'next/image'

export default function Existence() {
  return (
    <section className="bg-gradient-to-bl from-[#111] to-[#222] p-4 md:p-5 lg:p-6 xl:p-8">
      <h1 className="pr-6 text-end text-3xl uppercase tracking-tighter xl:text-7xl">
        <span className="font-pxl">Reason</span> of Existence
      </h1>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 p-2 md:p-4 xl:grid-cols-2 xl:p-16">
        <div className="relative xl:col-span-2">
          <h1 className="absolute left-6 top-2 font-bold xl:top-8 xl:text-5xl">
            The Crypto Concierge
          </h1>
          <p className="absolute bottom-2 left-6 mt-2 text-sm xl:top-20 xl:text-lg">
            Your one-stop shop for all your crypto needs.
          </p>
          <Image
            src="/assets/existence/imagetop.png"
            height={1000}
            width={1000}
            alt="image"
            className="w-full"
          />
        </div>
        <Image
          src="/assets/existence/imagemidleft.png"
          height={1000}
          width={1000}
          alt="image"
        />
        <Image
          src="/assets/existence/imagemidright.png"
          height={1000}
          width={1000}
          alt="image"
        />
        <Image
          src="/assets/existence/imagebottomleft.png"
          height={1000}
          width={1000}
          alt="image"
        />
        <Image
          src="/assets/existence/imagebottomright.png"
          height={1000}
          width={1000}
          alt="image"
        />
      </div>
    </section>
  )
}
