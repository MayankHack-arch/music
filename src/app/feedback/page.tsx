"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/moving-border";
// Example Aceternity component to add an extra attractive element
import { AceternityBadge } from "@/components/ui/aceternity"; 

function FeedbackForm() {
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Feedback submitted:", { subject, description });
    // You may add further handling logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
      {/* Background remains unchanged */}
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="max-w-2xl mx-auto p-6 relative z-10">
        <h1 className="text-2xl md:text-5xl text-center font-sans font-bold mb-6 text-white">
          Feedback
        </h1>
        <p className="text-neutral-300 max-w-lg mx-auto my-4 text-center">
          We value your feedback! Please let us know what you’d like to tell us.
        </p>

        {/* Feedback form container with semi-transparent green/dark-blue background */}
        <div className="bg-green-500/10 dark:bg-blue-900/10 rounded-xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="subject" className="block text-white text-sm font-medium mb-2">
                What you want to tell us
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Enter the subject"
                className="w-full p-4 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-teal-500 bg-transparent text-white placeholder-white"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-white text-sm font-medium mb-2">
                Explain your thoughts
              </label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Enter your feedback here..."
                className="w-full p-4 rounded-lg border border-white focus:outline-none focus:ring-2 focus:ring-teal-500 bg-transparent text-white placeholder-white"
                rows={6}
                required
              ></textarea>
            </div>
            <div>
              <Button
                type="submit"
                borderRadius="1.8rem"
                className="w-full py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Submit Feedback
              </Button>
            </div>
          </form>
        </div>
        {/* Example Aceternity component to add an attractive touch */}
        <div className="mt-8">
          <AceternityBadge message="We appreciate your feedback!" />
        </div>
      </div>
    </div>
  );
}

export default FeedbackForm;
