import Image from 'next/image'

export default function GrowthChallenges() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-br from-[#222] to-[#111] px-6 py-16 lg:px-20">
      {/* Background Image */}
      <Image
        src="/assets/growth/growth.png"
        alt="Background"
        layout="fill"
        objectFit="contain"
        className="absolute inset-0 object-right"
      />

      {/* Cards Section */}
      <div className="z-10 mt-12 grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          className="relative flex flex-col items-center justify-center rounded-xl border border-white/20 bg-black/40 p-6 text-center text-white backdrop-blur-md transition-all duration-300 hover:bg-zinc-900/60"
          style={{
            boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
            borderImageSource:
              'linear-gradient(90deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))'
          }}
        >
          <h3 className="font-pxl text-3xl uppercase xl:text-4xl">
            GTM Strategy
          </h3>
          <div className="mt-2 w-14 border-b border-gray-400"></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Launch Strategy</li>
            <li>Roadmap + Positioning</li>
            <li>User Acquisition</li>
          </ul>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-xl border border-white/20 bg-black/40 p-6 text-center text-white backdrop-blur-md transition-all duration-300 hover:bg-zinc-900/60"
          style={{
            boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
            borderImageSource:
              'linear-gradient(90deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))'
          }}
        >
          <h3 className="font-pxl text-3xl uppercase xl:text-4xl">
            Tokenomics
          </h3>
          <div className="mt-2 w-14 border-b border-gray-400"></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Tokenomics Review</li>
            <li>Airdrop Planning</li>
            <li>TGE Launch Support</li>
            <li>Post-TGE Support</li>
          </ul>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-xl border border-white/20 bg-black/40 p-6 text-center text-white backdrop-blur-md transition-all duration-300 hover:bg-zinc-900/60"
          style={{
            boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
            borderImageSource:
              'linear-gradient(90deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))'
          }}
        >
          <h3 className="font-pxl text-3xl uppercase xl:text-4xl">
            Growth Support
          </h3>
          <div className="mt-2 w-14 border-b border-gray-400"></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Strategy + Advisory</li>
            <li>Ecosystem Partnership</li>
            <li>Marketing & Awareness</li>
          </ul>
        </div>

        <div className="sm:col-span-2">
          <h2 className="z-10 text-start text-3xl font-semibold uppercase text-white sm:text-4xl">
            We help you with the biggest
            <span className="block font-pxl text-5xl sm:text-6xl">
              Growth Challenges
            </span>
          </h2>
          <p className="z-10 mt-4 max-w-2xl text-start text-sm text-gray-400 sm:text-base">
            Lorem ipsum dolor sit amet consectetur. A ipsum sit nunc adipiscing
            sollicitudin ornare diam tempor nulla. Posuere et lectus urna
            integer viverra vel in commodo aliquet.
          </p>
        </div>

        <div
          className="relative flex flex-col items-center justify-center rounded-xl border border-white/20 bg-black/40 p-6 text-center text-white backdrop-blur-md transition-all duration-300 hover:bg-zinc-900/60"
          style={{
            boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.1)',
            borderImageSource:
              'linear-gradient(90deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))'
          }}
        >
          <h3 className="font-pxl text-3xl uppercase xl:text-4xl">
            Custom Intros
          </h3>
          <div className="mt-2 w-14 border-b border-gray-400"></div>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>Mentors, Advisors & KOLs</li>
            <li>Service Provider</li>
            <li>Chains & Protocols</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
