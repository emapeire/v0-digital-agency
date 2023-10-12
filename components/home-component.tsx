import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
}

interface LogoImageProps {
  src: string;
  alt: string;
}

interface LinkButtonProps {
  href: string;
  children: ReactNode;
}

export default function HomeComponent() {
  return (
    <div className="flex flex-col h-screen space-y-24 mb-44">
      <HeroSection />
      <SocialProofSection />
    </div>
  );
}

function HeroSection() {
  return (
    <SectionContainer>
      <LogoImage src="/next.svg" alt="Logo" />
      <h1 className="text-2xl md:text-4xl font-bold tracking-tighter text-white">
        Welcome to Our Digital Agency
      </h1>
      <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200 pb-4">
        We provide innovative digital solutions that drive growth.
      </p>
      <LinkButton href="/contact-us">Contact Us</LinkButton>
    </SectionContainer>
  );
}

function SocialProofSection() {
  return (
    <SectionContainer>
      <h2 className="text-2xl md:text-4xl font-bold tracking-tighter">Social Proof</h2>
      <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200">
        Trusted by many businesses worldwide.
      </p>
      <LogosContainer />
      <Testimonials />
    </SectionContainer>
  );
}

function SectionContainer({ children }: SectionContainerProps) {
  return (
    <section className="w-full h-[40%]">
      <div className="px-4 md:px-6 h-full flex flex-col justify-center items-center text-center space-y-4">
        {children}
      </div>
    </section>
  );
}

function LogoImage({ src, alt }: LogoImageProps) {
  return (
    <Image
      alt={alt}
      className="self-center"
      height="100"
      src={src}
      style={{
        aspectRatio: "100/100",
        objectFit: "fill",
        filter: "invert(1)"
      }}
      width="100"
    />
  );
}

function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link
      className="inline-flex h-10 items-center justify-center rounded-md px-8 py-4 text-ms font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 bg-zinc-50 text-zinc-900 hover:bg-zinc-50/90 focus-visible:ring-zinc-300"
      href={href}
    >
      {children}
    </Link>
  );
}

function LogosContainer() {
  return (
    <div className="flex space-x-10">
      <LogoImage src="/vercel.svg" alt="Vercel Logo" />
      <LogoImage src="/next.svg" alt="Next.js Logo" />
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      text: "This is the best agency I've ever worked with. Their services are top-notch.",
      author: "John Doe, CEO of Company",
    },
    {
      text: "I would recommend this agency to anyone looking for a digital partner.",
      author: "Jane Smith, Founder of Startup",
    },
    {
      text: "Their team is highly professional and delivers on time.",
      author: "Mark Taylor, Manager at Business",
    },
    {
      text: "The results were beyond our expectations. Highly recommended!",
      author: "Lisa Brown, Director of Corporation",
    },
  ];

  return (
    <section className="w-full h-[40%] text-zinc-50 py-12">
      <h3 className="text-2xl md:text-4xl font-bold tracking-tighter">Testimonials</h3>
      <div className="flex overflow-x-auto scrollbar-hide space-x-8 p-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 w-80 bg-white rounded-xl p-8 shadow-md">
            <p className="font-semibold text-zinc-900">{testimonial.text}</p>
            <p className="text-zinc-500 mt-2">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
