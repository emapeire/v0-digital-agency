import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="pt-24 mb-44">
      <h1 className="text-4xl font-bold text-center tracking-tighter text-white">
        About Us
      </h1>
      <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200 mt-4 text-center">
        At [Our Digital Agency], we are committed to delivering top-notch digital solutions tailored to your needs.<br />
        With a dedicated team of experts, we strive to push the boundaries and exceed expectations.
      </p>
      <div className="mt-6 flex flex-col space-x-6">
        <Image
          src="/vercel.svg"
          alt="vercel logo"
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
          alt="nextjs logo"
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
