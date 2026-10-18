import Image from "next/image";
import localFont from "next/font/local";

const poppins = localFont({
  src: "../app/fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export default function Home() {
  return (
    <div>
      <main className="bg-amber-500">
        <section className="grid grid-cols-2 h-[50vh]">
          <div className="flex flex-col gap-5 items-center justify-center">
            <p className={`text-2xl font-bold text-amber-800 ${poppins.className}`}>
              Best URL Shortener
            </p>
            <p className="text-amber-950">
              Meet the most straightforward URL shortener on the internet
            </p>
          </div>
          <div className="relative">
            <Image alt="image" className="mix-blend-luminosity" src={"/vector.jpg"} fill={true}/>
          </div>
        </section>
      </main>
    </div>
  );
}
