import Image from "next/image"
import Link from "next/link"

export default function HomeComponent() {
  return (
    <div key="1" className="flex flex-col h-screen justify-between text-sm">
      <section
        className="w-full h-[40%] bg-cover bg-center"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920)",
        }}
      >
        <div className="container px-4 md:px-6 h-full flex flex-col justify-center items-center space-y-4 text-center">
          <Image
            alt="Logo"
            className="self-center mb-8"
            height="60"
            src="/placeholder.svg"
            style={{
              aspectRatio: "60/60",
              objectFit: "cover",
            }}
            width="60"
          />
          <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-white">Welcome to Our Digital Agency</h1>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200">
            We provide innovative digital solutions that drive growth.
          </p>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md bg-zinc-900 px-8 text-xs font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
            href="#"
          >
            Contact Us
          </Link>
        </div>
      </section>
      <section className="w-full h-[40%] bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900">
        <div className="container px-4 md:px-6 h-full flex flex-col justify-center items-center space-y-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">Social Proof</h2>
          <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200">
            Trusted by many businesses worldwide.
          </p>
          <div className="flex space-x-4">
            <Image
              alt="Logo 1"
              className="self-center mb-8"
              height="60"
              src="/placeholder.svg"
              style={{
                aspectRatio: "60/60",
                objectFit: "cover",
              }}
              width="60"
            />
            <Image
              alt="Logo 2"
              className="self-center mb-8"
              height="60"
              src="/placeholder.svg"
              style={{
                aspectRatio: "60/60",
                objectFit: "cover",
              }}
              width="60"
            />
            <Image
              alt="Logo 3"
              className="self-center mb-8"
              height="60"
              src="/placeholder.svg"
              style={{
                aspectRatio: "60/60",
                objectFit: "cover",
              }}
              width="60"
            />
          </div>
          <section className="w-full h-[40%] bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tighter">Testimonials</h3>
            <div className="flex overflow-x-auto scrollbar-hide space-x-8 p-8">
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">
                  This is the best agency I&apos;ve ever worked with. Their services are top-notch.
                </p>
                <p className="text-zinc-400 mt-2">- John Doe, CEO of Company</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">
                  I would recommend this agency to anyone looking for a digital partner.
                </p>
                <p className="text-zinc-400 mt-2">- Jane Smith, Founder of Startup</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">Their team is highly professional and delivers on time.</p>
                <p className="text-zinc-400 mt-2">- Mark Taylor, Manager at Business</p>
              </div>
              <div className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
                <p className="font-semibold text-zinc-900">
                  The results were beyond our expectations. Highly recommended!
                </p>
                <p className="text-zinc-400 mt-2">- Lisa Brown, Director of Corporation</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
