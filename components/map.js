import Image from 'next/image'

export default function SectionTwo() {
  return (
    <section className="min-w-screen relative mx-auto p-0 sm:p-2 md:p-4 lg:p-8 xl:p-16">
      <Image
        src="/assets/map/map.png"
        width={1500}
        height={1500}
        alt="logo"
        className="w-[100dvw]"
      />
      <div className="absolute w-full p-4 text-center font-pxl tracking-[-6px] text-foreground sm:text-start xl:-translate-y-44">
        <div className="flex items-center justify-center space-x-2 text-3xl font-bold sm:justify-start xl:text-6xl">
          <span>14+</span>
          <span className="text-primary xl:pr-8">REGIONS</span>
          <div className="mt-3 hidden h-2 w-full rounded-full border-2 border-foreground py-2 backdrop-blur-sm sm:block"></div>
        </div>
        <p className="mt-3 text-sm uppercase tracking-wide text-gray-300 sm:text-base">
          Serving across the globe with a network of{' '}
          <span className="font-bold text-foreground">banks</span>
        </p>
      </div>
    </section>
  )
}
