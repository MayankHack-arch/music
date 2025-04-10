"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import courseData from "@/data/music_courses.json";
import Image from "next/image";

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-12 px-4 sm:px-8 pt-36">
      <h1 className="text-2xl sm:text-5xl md:text-7xl text-center font-sans font-bold mb-10 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {courseData.courses.map((course, index) => (
          <CardContainer key={course.id ?? course.slug ?? index} className="inter-var">
            <CardBody className="flex flex-col justify-between bg-white dark:bg-gray-800 relative group/card border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 w-full sm:w-[30rem]">
              <div>
                <CardItem translateZ="50" className="text-xl font-bold text-gray-800 dark:text-white">
                  {course.title}
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {course.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={course.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl transition-shadow duration-300"
                    alt={course.title}
                  />
                </CardItem>
              </div>
              <div className="flex justify-between items-center mt-4">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href="https://twitter.com/mannupaaji"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-blue-600 dark:text-blue-300 hover:underline"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-xs font-bold hover:opacity-90 transition-opacity duration-300"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Page;
