import Image from "next/image";

export default function SocialProof() {
  return (
    <section className="pt-24 mb-44">
      <h1 className="text-4xl font-bold text-center tracking-tighter text-white">
        Social Proof
      </h1>
      <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200 mt-4 text-center">
        We&rsquo;re trusted by some of the biggest names in the industry. Here are a few of our esteemed partners and clients:
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <Image
          src="/vercel.svg"
          alt="Vercel logo"
          width={150}
          height={150}
          style={{
            aspectRatio: "150/150",
            objectFit: "fill",
            filter: "invert(1)"
          }}
          className="self-center"
        />
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={150}
          height={150}
          style={{
            aspectRatio: "150/150",
            objectFit: "fill",
            filter: "invert(1)"
          }}
          className="self-center"
        />
      </div>

    </section>
  );
}
