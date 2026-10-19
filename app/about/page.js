
export default function About() {
  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 text-amber-600">

      {/* Heading */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-500
          [text-shadow:2px_2px_0px_#78350f,4px_4px_6px_rgba(0,0,0,0.7)]">
          About Clutter
        </h1>

        <p className="mt-5 text-lg text-amber-700 leading-relaxed max-w-2xl mx-auto">
          Long URLs are a mess. Let's cut them short.
          Clutter helps you turn long, messy links into
          clean, compact URLs that are easier to share.
        </p>
      </section>

      {/* Mission card */}
      <section className="mb-10 rounded-3xl border border-amber-800/50
        bg-amber-950/50 p-7 md:p-9 transition-all duration-300
        hover:border-amber-600/70
        hover:drop-shadow-[0_0_14px_rgba(180,83,9,0.25)]">

        <h2 className="mb-4 text-2xl font-bold text-amber-800">
          ✂️ Our Mission
        </h2>

        <p className="leading-8 text-lime-100">
          The internet is full of long links that are difficult to
          remember, share, and manage. Clutter is built around a
          simple idea: make links shorter, cleaner, and more convenient.
          Paste a long URL, choose a custom short name when available,
          and generate a compact link with just a click.
        </p>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold text-amber-500
          [text-shadow:2px_2px_4px_rgba(0,0,0,0.6)]">
          What Makes Clutter Useful?
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-amber-800/40
            bg-amber-950/40 p-6 transition-all duration-300
            hover:-translate-y-1 hover:border-lime-600/60
            hover:drop-shadow-[0_0_12px_rgba(190,242,100,0.15)]">

            <div className="flex justify-start items-center gap-3">
                <div className="mb-4 text-3xl">🔗</div>
                <h3 className="mb-2 text-xl font-bold text-amber-700">
                    Short & Simple
                </h3>
            </div>    
            
            <p className="leading-7 text-lime-100">
              Turn long, complicated URLs into shorter links
              that are easier to share.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-800/40
            bg-amber-950/40 p-6 transition-all duration-300
            hover:-translate-y-1 hover:border-lime-600/60
            hover:drop-shadow-[0_0_12px_rgba(190,242,100,0.15)]">

            <div className="flex justify-start items-center gap-3">
                <div className="mb-4 text-3xl">🎯</div>
                <h3 className="mb-2 text-xl font-bold text-amber-700">
                    Custom Short URLs
                </h3>    
            </div>
            
            <p className="leading-7 text-lime-100">
              Choose a preferred short alias to make your
              links more recognizable, when available.
            </p>
          </div>

          <div className="rounded-2xl border border-amber-800/40
            bg-amber-950/40 p-6 transition-all duration-300
            hover:-translate-y-1 hover:border-lime-600/60
            hover:drop-shadow-[0_0_12px_rgba(190,242,100,0.15)]">

            <div className="flex justify-start items-center gap-3">
                <div className="mb-4 text-3xl">⚡</div>
                <h3 className="mb-2 text-xl font-bold text-amber-700">
                    Easy to Use
                </h3>        
            </div>
            
            <p className="leading-7 text-lime-100">
              A simple interface keeps the process straightforward:
              enter your URL and generate your short link.
            </p>
          </div>

        </div>
      </section>

      {/* How it works */}
      <section className="mb-12 rounded-3xl border border-amber-800/50
        p-7 md:p-9">

        <h2 className="mb-6 text-2xl font-bold text-lime-400">
          How It Works
        </h2>

        <ol className="space-y-5">
          <li className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-amber-900 font-bold text-amber-100">
              1
            </span>
            <div>
              <h3 className="font-bold text-amber-600">
                Paste your long URL
              </h3>
              <p className="mt-1 text-cyan-900">
                Enter the destination link you want to shorten.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-amber-900 font-bold text-amber-100">
              2
            </span>
            <div>
              <h3 className="font-bold text-amber-600">
                Choose a custom alias
              </h3>
              <p className="mt-1 text-cyan-900">
                Optionally enter a preferred short name if your app
                supports custom aliases.
              </p>
            </div>
          </li>

          <li className="flex gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center
              rounded-full bg-amber-900 font-bold text-amber-100">
              3
            </span>
            <div>
              <h3 className="font-bold text-amber-600">
                Generate and share
              </h3>
              <p className="mt-1 text-cyan-900">
                Create your short link and share it wherever you need it.
              </p>
            </div>
          </li>
        </ol>
      </section>

      {/* Call to action */}
      <section className="pb-6 text-center">
        <h2 className="text-2xl font-bold text-amber-500">
          Ready to cut the clutter?
        </h2>

        <p className="mt-3 text-cyan-900">
          Your next clean, compact link is just a click away.
        </p>

        <a
          href="/generate"
          className="mt-6 inline-flex items-center gap-2 rounded-full
            bg-amber-900 px-6 py-3 font-bold text-amber-100
            transition-all duration-300 hover:bg-amber-800
            hover:drop-shadow-[0_0_12px_rgba(180,83,9,0.7)]"
        >
          ✂️ Shorten a URL
          <span aria-hidden="true">→</span>
        </a>
      </section>

    </main>
  );
}
