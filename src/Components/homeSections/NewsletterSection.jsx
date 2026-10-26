import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim()) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "newsletter subscriber",
          email: email.trim(),
          phone: "",
          looking: "newsletter",
          space: "",
          message: "newsletter signup from homepage.",
          source: "essentia environments website — newsletter",
        }),
      });
      if (!response.ok) throw new Error("failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-[#0a0a0a] border-t border-b border-white/10 py-8 md:py-10 px-4 md:px-16 lg:px-24 font-lato">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-10">
        <div>
          <h3 className="text-white text-xl md:text-2xl font-light lowercase tracking-tight mb-1">
            subscribe to our newsletter
          </h3>
          <p className="text-zinc-400 text-sm md:text-base font-light lowercase">
            sign up for updates on our latest projects, launches and stories.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full md:w-auto flex items-center gap-3">
          <div className="flex items-center w-full md:w-[320px] bg-black border border-zinc-700 focus-within:border-white/40 transition-colors">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="enter your email"
              aria-label="enter your email"
              className="flex-1 bg-transparent px-4 py-3 text-white text-sm font-light placeholder:text-zinc-600 focus:outline-none lowercase min-w-0"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              aria-label="subscribe"
              className="shrink-0 w-11 h-11 flex items-center justify-center text-white/70 hover:text-white disabled:opacity-50 transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>

      {status === "success" && (
        <p className="max-w-[1400px] mx-auto mt-4 text-emerald-400/80 text-xs md:text-sm font-light lowercase">
          thank you — you're subscribed.
        </p>
      )}
      {status === "error" && (
        <p className="max-w-[1400px] mx-auto mt-4 text-red-400/80 text-xs md:text-sm font-light lowercase">
          something went wrong. please try again or email us at info@essentia.in.
        </p>
      )}
    </section>
  );
};

export default NewsletterSection;
