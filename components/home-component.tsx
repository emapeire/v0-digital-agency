import Image from "next/image"
import Link from "next/link"

export default function HomeComponent() {
  return (
    <div className="flex flex-col h-screen space-y-24 mb-44">
      <section className="w-full h-[40%]">
        <div className="px-4 md:px-6 h-full flex flex-col justify-center items-center text-center space-y-4">
          <Image
            alt="Logo"
            className="self-center"
            height="100"
            src="/next.svg"
            style={{
              aspectRatio: "100/100",
              objectFit: "fill",
              filter: "invert(1)"
            }}
            width="100"
          />
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-white">Welcome to Our Digital Agency</h1>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200 pb-4">
            We provide innovative digital solutions that drive growth.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md px-8 py-4 text-ms font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90 focus-visible:ring-zinc-300"
            href="/contact-us"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <section className="w-full h-[40%]">
        <div className="px-4 md:px-6 h-full flex flex-col justify-center items-center space-y-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">Social Proof</h2>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200">
            Trusted by many businesses worldwide.
          </p>
          <div className="flex space-x-10">
            <Image
              alt="Logo"
              className="self-center mb-8"
              height="100"
              src="/vercel.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "fill",
                filter: "invert(1)"
              }}
              width="100"
            />
            <Image
              alt="Logo"
              className="self-center mb-8"
              height="100"
              src="/next.svg"
              style={{
                aspectRatio: "100/100",
                objectFit: "fill",
                filter: "invert(1)"
              }}
              width="100"
            />
          </div>
          <section className="w-full h-[40%] text-zinc-50">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tighter">Testimonials</h3>
            <div className="flex overflow-x-auto scrollbar-hide space-x-8 p-8">
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">
                  This is the best agency I&apos;ve ever worked with. Their services are top-notch.
                </p>
                <p className="text-zinc-500 mt-2">- John Doe, CEO of Company</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">
                  I would recommend this agency to anyone looking for a digital partner.
                </p>
                <p className="text-zinc-500 mt-2">- Jane Smith, Founder of Startup</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">Their team is highly professional and delivers on time.</p>
                <p className="text-zinc-500 mt-2">- Mark Taylor, Manager at Business</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">
                  The results were beyond our expectations. Highly recommended!
                </p>
                <p className="text-zinc-500 mt-2">- Lisa Brown, Director of Corporation</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
