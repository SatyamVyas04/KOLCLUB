import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Desktop: background covers full section; Mobile: background behind text container */}
      <div className="hidden lg:block">
        <Image
          src="/assets/hero/hero.png"
          alt="hero"
          fill
          className="absolute -z-10 object-cover"
        />
      </div>
      <div className="block lg:hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/hero/hero.png"
            alt="hero"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <nav className="flex flex-row items-center justify-between p-4 md:p-5 lg:p-6 xl:items-start xl:p-12">
        <Image
          src="/assets/hero/logo.png"
          alt="logo"
          width={1000}
          height={1000}
          className="min-h-4 w-[150px] md:min-h-8 md:w-[200px] lg:min-h-12 lg:w-[250px]"
          style={{ filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.75))' }}
        />
        <button className="relative z-10 rounded-full border-2 border-secondary bg-foreground px-2 py-1 text-sm uppercase text-secondary transition-all hover:border-foreground hover:bg-[#333] hover:text-foreground md:px-4 md:py-2 md:text-base">
          Contact
        </button>
      </nav>
      <div
        className="absolute inset-0 flex items-center justify-center space-y-2"
        style={{ filter: 'drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.75))' }}
      >
        <section className="xl:gap-6m flex flex-col items-center gap-2 rounded-lg bg-opacity-50 p-6 text-center font-semibold uppercase tracking-tighter md:gap-3 lg:gap-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl">Welcome to</h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl">The Future of </h2>
          <h1 className="bold lg:text-10xl scale-125 font-pxl text-6xl tracking-[-8px] md:text-9xl">
            Crypto
          </h1>
        </section>
      </div>
    </section>
  )
}
