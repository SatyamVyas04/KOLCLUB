import Image from 'next/image'

export default function Gateway() {
  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-hidden p-2 md:p-3 lg:p-4 xl:p-12">
      {/* Background Design */}
      <Image
        src="/assets/gateway/design.png"
        alt="Design Background"
        layout="fill"
        objectFit="cover"
        className="absolute -z-30 opacity-50"
      />

      {/* Monkey Main Image */}
      <Image
        src="/assets/gateway/monkeymain.png"
        alt="Monkey Main"
        layout="fill"
        objectFit="contain"
        className="absolute bottom-0 left-1/2 -z-20 h-[90vh] w-auto -translate-y-[15%] scale-105 lg:translate-y-0"
      />

      {/* Tooltip: Web3 Impact */}
      <div className="bg-foreground/10 absolute bottom-[20%] left-[30%] hidden scale-125 rounded-lg border border-foreground px-4 py-2 text-center text-sm font-semibold text-white backdrop-blur-md xl:block">
        86% <br /> Web3 Impact
      </div>

      {/* Tooltip: KOL Community */}
      <div className="bg-foreground/10 backdrop-blmd-sm absolute right-[30%] top-[50%] hidden scale-125 rounded-lg border border-foreground px-4 py-2 text-center text-sm font-semibold text-white xl:block">
        KOL <br /> Community
      </div>

      {/* Content Container - Logo and Text */}
      <div className="relative mt-20 flex w-full flex-col items-center xl:mt-32 xl:-translate-y-[30%]">
        {/* Logo Blur Overlay */}
        <Image
          src="/assets/hero/logoblur.png"
          alt="Logo Blur"
          layout="fill"
          objectFit="contain"
          className="absolute -z-10 mx-auto max-w-[95dvw] -translate-y-[40%] xl:-translate-y-[20%]"
          style={{
            maskImage:
              'linear-gradient(to right, rgba(0,0,0,1) 45%, rgba(0,0,0,0.7) 47.5%, rgba(0,0,0,0.7) 52.5%, rgba(0,0,0,1) 55%)'
          }}
        />

        {/* Text Content */}
        <section className="z-10 mt-[30vh] flex w-full translate-y-[60%] flex-col gap-8 lg:flex-row lg:justify-between xl:mt-[40vh] xl:-translate-y-[10%]">
          <div className="space-y-4 text-center lg:text-left">
            <h1 className="mx-auto max-w-lg text-3xl tracking-tighter xl:mx-0">
              Your Gateway to Exclusive Opportunities, Expert Guidance, and a
              Thriving Community.
            </h1>
            <button className="rounded-full border-2 border-secondary bg-foreground px-2 py-1 text-sm uppercase text-secondary transition-all hover:border-foreground hover:bg-[#333] hover:text-foreground md:px-4 md:py-2 md:text-base">
              Learn More
            </button>
          </div>
          <div className="text-center xl:text-left">
            <h1>20K+ KOL's are influencing the Web3 & Crypto World</h1>
          </div>
        </section>
      </div>
    </div>
  )
}
