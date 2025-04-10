"use client"
import React from 'react';
import courseData from '../data/music_courses.json';
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';

type Props = {}
interface Course{
      id: number,
      slug: string,
      title: string,
      description: string,
      price: number,
      instructors: string[],
      isFeatured: boolean,
}

function FeaturedSection({}: Props) {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div className="">
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured Courses</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p>
            </div>
        </div>
        <div className="mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {featuredCourses.map((course: Course) => (
  <div key={course.id} className="flex justify-center">
    <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
      <div className="p-4 sm:p-6 flex flex-col items-center flex-grow">
        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          {course.title}
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
          {course.description}
        </p>
        <Link href={`/courses/${course.slug}`}>Learn more</Link>
      </div>
    </BackgroundGradient>
  </div>
))}

            </div>
        </div>
        <div className="mt-20 text-center">
        <Link
  href="/courses"
  className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-teal-500 rounded-xl shadow-md group hover:shadow-lg"
>
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500 to-cyan-600 group-hover:from-teal-600 group-hover:to-cyan-700"></span>
  <span className="absolute inset-0 w-full h-full bg-black opacity-20 group-hover:opacity-10"></span>
  <span className="relative z-10">View All Courses</span>
</Link>

        </div>
    </div>
  )
}

export default FeaturedSection