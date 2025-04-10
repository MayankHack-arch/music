"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {/* Background remains unchanged */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
      
      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <h1 className="text-xl md:text-5xl text-center font-sans font-bold mb-6 text-white">
          Contact Us
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-4 text-center">
          We&apos;re here to help with any questions about our courses, programs, or events.
          Reach out and let us know how we can assist you in your musical journey.
        </p>

        {/* Form container with 90% opaque green for light mode and dark blue for dark mode */}
        <div className="bg-green-500/10 dark:bg-blue-900/10 rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full p-4 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-teal-500 bg-transparent text-white placeholder-white"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              className="w-full p-4 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-teal-500 bg-transparent text-white placeholder-white"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
