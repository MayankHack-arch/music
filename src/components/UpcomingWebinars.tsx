'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {

    const featuredWebinars = [
        {
          title: "Mastering Music Production",
          description:
            "Dive deep into mixing, mastering, and modern production techniques with Grammy-winning engineers.",
          link: "https://musiccompany.com/webinars/production",
        },
        {
          title: "The Business of Music",
          description:
            "Learn how to navigate contracts, royalties, and distribution in today's music industry landscape.",
          link: "https://musiccompany.com/webinars/business",
        },
        {
          title: "Songwriting Secrets",
          description:
            "Join top songwriters as they break down their creative process and how to write compelling lyrics and melodies.",
          link: "https://musiccompany.com/webinars/songwriting",
        },
        {
          title: "Live Performance & Stage Presence",
          description:
            "Discover tips for engaging live audiences, from small venues to stadiums, with expert performance coaches.",
          link: "https://musiccompany.com/webinars/performance",
        },
        {
          title: "Sync Licensing 101",
          description:
            "An introduction to getting your music placed in film, TV, and commercials — a growing revenue stream for artists.",
          link: "https://musiccompany.com/webinars/sync",
        },
        {
          title: "DIY Recording Setup",
          description:
            "A guide to building a professional-grade home studio on a budget, perfect for indie artists and producers.",
          link: "https://musiccompany.com/webinars/recording",
        },
      ];
      
  return (
    <div className='p-12 bg-gray-900 '>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your musical journey</p>
            </div>
            <div className="mt-10">
                <HoverEffect 
                items={featuredWebinars}
                />
            </div>
            <div className="mt-10 text-center">
            <Link
  href="/courses"
  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-teal-500 rounded-xl shadow-md group hover:shadow-lg"
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-cyan-600 group-hover:from-teal-600 group-hover:to-cyan-700"></span>
  <span className="absolute inset-0 w-full h-full bg-black opacity-20 group-hover:opacity-10"></span>
  <span className="relative z-10">View Webinars</span>
</Link>

            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars