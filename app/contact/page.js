
"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend or email service
    // to actually deliver messages.
    console.log("Contact form submitted:", formData);
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 text-emerald-900 sm:px-8">

      {/* Page heading */}
      <section className="mb-12 text-center">
        <p className="mb-3 text-sm font-bold tracking-[0.25em] text-lime-600">
          We're here to help
        </p>

        <h1 className="text-4xl font-extrabold text-amber-500 md:text-5xl
          [text-shadow:2px_2px_0px_#78350f,4px_4px_6px_rgba(0,0,0,0.7)]">
          Contact Us
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cyan-900">
          Have a question, found a bug, or have an idea to make
          Clutter better? 
        </p>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-cyan-900">
          We'd love to hear from you.
        </p>
      </section>

      {/* Main content */}
      <section className="grid grid-cols-1 items-start gap-8 lg:grid-cols-5">

        {/* Left information panel */}
        <div className="space-y-6 lg:col-span-2">

          <div className="rounded-3xl border border-amber-800/50
            bg-amber-950/40 p-7 md:p-8">

            <h2 className="text-2xl font-bold text-slate-900">
              Get in Touch
            </h2>

            <p className="mt-4 leading-7 text-slate-800">
              Whether you're having trouble shortening a URL or
              simply want to share feedback, send us a message.
              We're always looking for ways to improve your experience.
            </p>

            <div className="mt-8 space-y-6">

              {/* General inquiries */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-2xl border border-amber-800/50 bg-amber-900/60
                  text-xl text-amber-100">
                  ✉
                </div>

                <div>
                  <h3 className="font-bold text-emerald-900">
                    General Inquiries
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Questions, suggestions, and general feedback.
                  </p>
                </div>
              </div>

              {/* Technical support */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-2xl border border-amber-800/50 bg-amber-900/60
                  text-xl text-amber-100">
                  ⚙
                </div>

                <div>
                  <h3 className="font-bold text-emerald-900">
                    Technical Support
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Report broken links, errors, or unexpected behavior.
                  </p>
                </div>
              </div>

              {/* Feedback */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center
                  rounded-2xl border border-amber-800/50 bg-amber-900/60
                  text-xl text-amber-100">
                  ✨
                </div>

                <div>
                  <h3 className="font-bold text-emerald-900">
                    Suggestions & Ideas
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    Tell us what features you'd like to see next.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Small brand card */}
          <div className="rounded-3xl border border-amber-800/40
            bg-amber-950/40 p-6 transition-all duration-300
            hover:border-lime-700/50
            hover:drop-shadow-[0_0_12px_rgba(190,242,100,0.12)]">

            <h3 className="text-lg font-bold text-lime-900">
              ✂️ Let's cut the clutter.
            </h3>

            <p className="mt-2 leading-7 text-cyan-900">
              Your feedback helps us make link sharing simpler,
              cleaner, and more convenient.
            </p>
          </div>

        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-amber-800/50
              bg-amber-950/40 p-6 shadow-xl shadow-black/10
              sm:p-8 md:p-10"
          >

            <h2 className="text-2xl font-bold text-slate-900">
              Send Us a Message
            </h2>

            <p className="mt-2 mb-8 text-sm leading-6 text-slate-800">
              Fill in the details below and let us know how we can help.
            </p>

            {/* Name and email */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-bold text-slate-600"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border-2 border-gray-600
                    bg-transparent px-4 py-3 text-gray-800
                    placeholder:text-slate-700
                    hover:border-gray-500 focus:border-gray-700
                    focus:outline-none focus:ring-2 focus:ring-gray-400
                    transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-600"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border-2 border-gray-600
                    bg-transparent px-4 py-3 text-gray-800
                    placeholder:text-slate-700
                    hover:border-gray-500 focus:border-gray-700
                    focus:outline-none focus:ring-2 focus:ring-gray-400
                    transition-colors duration-300"
                />
              </div>

            </div>

            {/* Subject */}
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-bold text-slate-600"
              >
                Subject
              </label>

              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border-2 border-gray-600
                    bg-transparent px-4 py-3 text-gray-800
                    placeholder:text-slate-700
                    hover:border-gray-500 focus:border-gray-700
                    focus:outline-none focus:ring-2 focus:ring-gray-400
                    transition-colors duration-300"
              >
                <option className="bg-gray-400" value="General Inquiry">
                  General Inquiry
                </option>
                <option className="bg-gray-400" value="Technical Support">
                  Technical Support
                </option>
                <option className="bg-gray-400" value="Bug Report">
                  Bug Report
                </option>
                <option className="bg-gray-400" value="Feature Suggestion">
                  Feature Suggestion
                </option>
                <option className="bg-gray-400" value="Other">
                  Other
                </option>
              </select>
            </div>

            {/* Message */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-slate-600"
              >
                Your Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                maxLength={2000}
                className="w-full rounded-xl border-2 border-gray-600
                    bg-transparent px-4 py-3 text-gray-800
                    placeholder:text-slate-700
                    hover:border-gray-500 focus:border-gray-700
                    focus:outline-none focus:ring-2 focus:ring-gray-400
                    transition-colors duration-300"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center
                justify-center gap-2 rounded-full bg-amber-900
                px-6 py-3.5 font-bold text-amber-100
                transition-all duration-300 hover:bg-amber-800
                hover:drop-shadow-[0_0_12px_rgba(180,83,9,0.7)]
                cursor-pointer sm:w-auto"
            >
              <span>Send Message</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300
                  group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M22 2 11 13" />
                <path d="m22 2-7 20-4-9-9-4Z" />
              </svg>
            </button>

          </form>
        </div>

      </section>

      {/* Footer note */}
      <p className="pt-10 pb-4 text-center text-sm text-cyan-900">
        Thanks for helping make Clutter better. ✨
      </p>

    </main>
  );
}
