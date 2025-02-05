import Image from 'next/image'

export default function Mission() {
  return (
    <div className="flex flex-col items-start justify-between lg:flex-row xl:px-12">
      <div className="w-full p-4 text-center sm:text-start">
        {/* Mission Header */}
        <div className="flex flex-col items-center space-x-2 text-3xl font-bold tracking-tight sm:flex-row sm:items-start xl:text-6xl">
          <span className="font-pxl text-foreground">MISSION</span>
          <div className="mt-4 h-6 w-full rounded-full border-2 border-foreground backdrop-blur-sm sm:max-w-2xl"></div>
        </div>
        <p className="text-sm text-foreground sm:text-base">for 2025</p>

        {/* Mission Text & Image */}
        <div className="relative flex flex-col items-center justify-between gap-6 xl:flex-row xl:gap-12">
          <p className="mt-4 max-w-2xl text-justify text-sm font-semibold leading-relaxed text-foreground sm:text-base xl:mt-0">
            Our mission is to build a vibrant and inclusive community that
            empowers individuals to thrive in the dynamic world of
            cryptocurrencies. By fostering connections, sharing knowledge, and
            providing valuable resources, we aim to equip everyone—whether
            beginners or experts—with the tools and confidence needed to succeed
            in the evolving landscape of decentralized finance.
          </p>
          <Image
            src="/assets/mission/mission.png"
            width={800}
            height={500}
            alt="Mission"
            className="max-w-xl -translate-y-24 mix-blend-lighten"
          />
        </div>
      </div>
    </div>
  )
}
