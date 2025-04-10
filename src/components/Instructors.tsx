'use client'
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { WavyBackground } from "./ui/wavy-background";

function Instructors() {

    const people = [
        {
          id: 1,
          name: "Ava Harmony",
          designation: "Lead Vocalist",
          image:
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 2,
          name: "Miles Rhodes",
          designation: "Jazz Saxophonist",
          image:
            "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 3,
          name: "Luna Keys",
          designation: "Music Producer",
          image:
            "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 4,
          name: "Kai Beats",
          designation: "Hip-Hop DJ",
          image:
            "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 5,
          name: "Nova Strings",
          designation: "Classical Violinist",
          image:
            "https://images.unsplash.com/photo-1521334884684-d80222895322?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
        {
          id: 6,
          name: "Echo Blaze",
          designation: "Electronic Composer",
          image:
            "https://images.unsplash.com/photo-1607093800858-6f4f6e08ce4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
        },
      ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Meet our instructors</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Who will make you what you want</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Instructors