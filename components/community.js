import Image from 'next/image'
import { OrbitingCircles } from '@/components/ui/orbiting-circles'

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col items-center justify-center">
      <Image
        src="/assets/hero/logo.png"
        width={200}
        height={200}
        alt="logo"
        className="z-10"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[200px] w-[200px] rounded-full bg-gradient-to-r from-zinc-700 to-black opacity-50 xl:h-[500px] xl:w-[500px]" />
      </div>

      <OrbitingCircles iconSize={80}>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-black/50 px-4 text-center text-sm text-white">
          VIRTUAL+IRL EVENTS
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-black/50 px-4 text-center text-sm text-white">
          COMMUNITY PROMOTION
        </div>
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-black/50 px-4 text-center text-sm text-white">
          AWARENESS ACTIVATOR
        </div>
      </OrbitingCircles>

      <OrbitingCircles iconSize={60} radius={180} reverse speed={2}>
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/50 p-4 text-center text-sm text-white">
          MENTORS
        </div>
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/50 p-4 text-center text-sm text-white">
          DEALFLOW
        </div>
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/50 p-4 text-center text-sm text-white">
          FUNDS
        </div>
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/50 p-4 text-center text-sm text-white">
          USERS
        </div>
      </OrbitingCircles>

      <OrbitingCircles iconSize={60} radius={240} speed={1.5}>
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/50 p-4 text-center text-sm text-white">
          BUILDERS
        </div>
        <div className="flex h-28 w-28 items-center justify-center rounded-full bg-black/50 p-4 text-center text-sm text-white">
          SERVICE PROVIDER
        </div>
      </OrbitingCircles>
    </div>
  )
}

export default function Community() {
  return (
    <section className="relative mb-0 flex w-full flex-col items-center justify-between overflow-clip bg-gradient-to-br from-[#222] to-[#111] p-4 !pb-0 !pt-0 xl:flex-row xl:items-start xl:justify-evenly xl:px-16 xl:py-16">
      <div className="space-y-3">
        <OrbitingCirclesDemo />
        <h1 className="font-pxl text-3xl uppercase md:text-4xl xl:text-6xl">
          Ecosystem Growth
        </h1>
        <div className="pb-12 text-lg">
          Access new projects, builders, developers or users to drive specific
          growth KPIs.
        </div>
      </div>
      <div className="flex flex-col items-end space-y-3 text-right">
        <h1 className="z-10 font-pxl text-3xl uppercase md:text-4xl xl:text-6xl">
          Community Building
        </h1>
        <div className="z-10 text-lg">
          Events, Podcasts, Marketing & PR to drive culture, awareness and
          engagement.
        </div>
        <Image
          src="/assets/community/Mosaic.png"
          width={900}
          height={900}
          alt="mosaic"
          className="bottom-0 right-0 -z-0 w-fit object-contain xl:absolute xl:h-[600px]"
        />
      </div>
    </section>
  )
}
