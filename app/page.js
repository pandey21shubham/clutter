import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "../app/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div>
      <main className="bg-amber-500">
        <section className="grid grid-cols-2 lg:h-[50vh]  ">
          <div className="flex flex-col gap-3 p-2 items-center justify-center">
            <p
              className={`lg:text-5xl md:text-4xl text-2xl text-center font-bold text-amber-800 ${poppins.className}`}
            >
              Best URL Shortener
            </p>
            <p className="text-amber-950 text-center">
              Meet the most straightforward URL shortener on the internet
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
              <Link href="/shorten">
                <button className="flex items-center gap-2 bg-amber-100 hover:bg-amber-50 rounded-full p-1 lg:p-3 cursor-pointer text-amber-900 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(253,230,138,0.8)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {" "}
                    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />{" "}
                    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />{" "}
                  </svg>
                  <span>Try Now</span>
                </button>
              </Link>
              <Link href="/github">
                <button className="flex items-center gap-2 bg-amber-100 hover:bg-amber-50 rounded-full p-1 lg:p-3 cursor-pointer text-amber-900 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(253,230,138,0.8)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.76 1.92 3.72 1.47.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.28-2.6 5.23-5.08 5.5.4.35.75 1.03.75 2.08V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                  <span>GitHub</span>
                </button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <Image
              alt="image"
              className="mix-blend-luminosity"
              src={"/vector.jpg"}
              fill={true}
            />
          </div>
        </section>
      </main>
      <div className="flex justify-center items-center pt-20">
        <Link href="/shorten">
          <span
            className="bg-amber-950 p-3 text-amber-50 rounded-full cursor-pointer
              transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(120,53,15,0.45)]
        "
          >
            Try it & you will 💖 it.
          </span>
        </Link>
      </div>
    </div>
  );
}
