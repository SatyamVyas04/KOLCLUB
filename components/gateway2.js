import Image from 'next/image'

export default function CommunitySection() {
  return (
    <div className="relative z-10 flex w-full flex-col items-center justify-evenly gap-4 bg-gradient-to-b from-transparent via-[#2129e4] to-[#2129e4] px-4 py-12 md:px-8 lg:flex-row lg:px-16 xl:-translate-y-24">
      {/* Monkey Avatars Container */}
      <div className="flex h-fit w-fit max-w-lg items-center justify-center gap-3 rounded-3xl border border-white/20 bg-white/5 p-3 lg:max-w-xl">
        {/* Avatar 1 */}
        <Image
          src="/assets/gateway/card 1.png"
          alt="Avatar 1"
          width={120}
          height={120}
          className="w-full rounded-lg md:h-24 lg:h-32 xl:h-52"
        />
        {/* Avatar 2 */}
        <Image
          src="/assets/gateway/card 2.png"
          alt="Avatar 2"
          width={120}
          height={120}
          className="w-full rounded-lg md:h-24 lg:h-32 xl:h-52"
        />
        {/* Avatar 3 */}
        <Image
          src="/assets/gateway/card 3.png"
          alt="Avatar 3"
          width={120}
          height={120}
          className="w-full rounded-lg md:h-24 lg:h-32 xl:h-52"
        />
      </div>

      {/* Text Content */}
      <div className="text-center text-white lg:max-w-xl lg:text-right">
        <p className="mt-2 text-lg sm:text-xl lg:mt-4 lg:text-4xl">
          At{' '}
          <Image
            src="/assets/hero/logo.png"
            alt="Gateway"
            width={150}
            height={150}
            className="mx-3 inline"
          />
          we are passionate about empowering the next generation of crypto
          leaders.
        </p>
      </div>
    </div>
  )
}
