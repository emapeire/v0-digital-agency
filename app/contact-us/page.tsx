import Image from "next/image";

export default function ContactUs() {
  return (
    <section className="pt-24 mb-44">
      <h1 className="text-4xl font-bold text-center tracking-tighter text-white">
        Contact Us
      </h1>
      <p className="mx-auto max-w-[700px] text-xl md:text-2xl text-zinc-200 mt-4 text-center">
        Have questions or want to discuss a project? <br />
        Reach out to us, and our team will get back to you swiftly.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-10">
        <div className="flex flex-col space-y-4">
          <Image
            src="/device-mobile.svg"
            alt="Phone icon"
            width={50}
            height={50}
            style={{
              aspectRatio: "50/50",
              objectFit: "fill",
              filter: "invert(1)"
            }}
            className="self-center"
          />
          <span className="text-white">+1 (123) 456-7890</span>
        </div>
        <div className="flex flex-col space-y-4">
          <Image
            src="/mail-icon.svg"
            alt="Email icon"
            width={50}
            height={50}
            style={{
              aspectRatio: "50/50",
              objectFit: "fill",
              filter: "invert(1)"
            }}
            className="self-center"
          />
          <span className="text-white">contact@ourdigitalagency.com</span>
        </div>
        <div className="flex flex-col space-y-4">
          <Image
            src="/map-pin.svg"
            alt="Location icon"
            width={50}
            height={50}
            style={{
              aspectRatio: "50/50",
              objectFit: "fill",
              filter: "invert(1)"
            }}
            className="self-center"
          />
          <span className="text-white">123 Digital Street, Tech City</span>
        </div>
      </div>
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-white">Send Us a Message</h2>
        <form className="mt-8 mx-auto max-w-xl">
          <input
            type="text"
            placeholder="Your Name"
            className="mb-4 w-full p-2 rounded bg-white text-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="mb-4 w-full p-2 rounded bg-white text-black"
          />
          <textarea
            placeholder="Your Message"
            className="mb-4 w-full p-2 rounded bg-white text-black"
            rows={4}
          ></textarea>
          <button className="bg-zinc-50 text-zinc-900 px-6 py-2 rounded font-medium hover:bg-zinc-50/90">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
