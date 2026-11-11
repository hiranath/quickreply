export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#172033]">
      <header className="flex items-center justify-between border-b px-6 py-5">
        <h1 className="text-2xl font-bold text-[#142B4A]">
          Quick Reply
        </h1>
        <a
          href="#features"
          className="rounded-xl bg-[#7555D9] px-5 py-3 text-white"
        >
          Explore Features
        </a>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <p className="mb-5 font-semibold text-[#7555D9]">
          YOUR BUSINESS COMMUNICATION ASSISTANT
        </p>

        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Reply Faster.
          <br />
          Serve Better.
          <br />
          Grow Smarter.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Create professional customer replies in multiple
          languages with the power of AI.
        </p>

        <a
          href="#features"
          className="mt-9 inline-block rounded-xl bg-[#142B4A] px-8 py-4 font-semibold text-white"
        >
          Get Started
        </a>
      </section>

      <section id="features" className="bg-[#F6F8FC] px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Everything You Need to Reply Better
        </h2>

        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
          {[
            ["AI Reply Generator", "Generate professional replies instantly."],
            ["Ready-made Templates", "Use replies for common customer questions."],
            ["Multiple Languages", "Communicate in Hindi, English, Hinglish and Gujarati."],
            ["Custom Templates", "Save and reuse your own replies."],
            ["Favorites", "Keep your most-used replies accessible."],
            ["WhatsApp Sharing", "Share replies through WhatsApp."],
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-2xl border bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-bold text-[#142B4A]">
                {title}
              </h3>
              <p className="text-gray-600">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-500">
        © 2026 Quick Reply. All rights reserved.
      </footer>
    </main>
  );
          }
