"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState, useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const [showDropdown, setShowDropdown] = useState(false);

  const topics = [
    { name: "Samsara", path: "/samsara" },
    { name: "Pattica Samuppada", path: "/pattica-samuppada" },
    { name: "Avijja", path: "/avijja" },
    { name: "Nirvana", path: "/nirvana" },
    { name: "Anicca", path: "/anicca" },
    { name: "Anatta", path: "/anatta" },
    { name: "Brahmavihara", path: "/brahmavihara" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen flex flex-col items-center px-6">
      {/* Header */}
      <header className="w-full flex justify-between items-center py-6 max-w-7xl relative">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text">
          Namo Buddhaya
        </h1>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <motion.li
              className="relative cursor-pointer transition duration-200 dropdown"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <motion.span whileHover={{ scale: 1.1, color: "#facc15" }}>
                Topics
              </motion.span>
              {showDropdown && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-700 shadow-lg rounded-lg overflow-hidden"
                >
                  {topics.map((topic, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-800 cursor-pointer"
                      onClick={() => {
                        router.push(topic.path);
                        setShowDropdown(false);
                      }}
                    >
                      {topic.name}
                    </li>
                  ))}
                </motion.ul>
              )}
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1, color: "#facc15" }}
              className="cursor-pointer transition duration-200"
            >
              Support
            </motion.li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        className="flex flex-col items-center text-center py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-6xl font-extrabold leading-tight tracking-tight max-w-3xl">
          The Path to{" "}
          <span className="bg-gradient-to-r from-yellow-500 to-orange-600 text-transparent bg-clip-text">
            Enlightenment
          </span>
        </h2>
        <p className="mt-6 text-lg font-light max-w-2xl text-gray-300">
          Unravel the Four Noble Truths and embark on a journey toward Nirvana.
        </p>
        <motion.button
          className="mt-8 px-8 py-4 bg-yellow-500 text-gray-900 rounded-xl text-lg font-bold tracking-wide shadow-lg hover:bg-yellow-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => router.push('/four_noble_truths')}
        >
          Start Exploring
        </motion.button>
      </motion.section>

       {/* Quotes & Zen Images Section */}
       <section className="w-full max-w-6xl mx-auto py-20 space-y-14">
        {/* First Block: Image Left, Quote Right */}
        <motion.div
          className="flex flex-col md:flex-row items-center md:justify-between gap-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Image (40%) */}
          <div className="md:w-[50%] flex justify-center">
            <div className="relative w-[250px] h-[250px] md:w-[280px] md:h-[280px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/buddha.jpg"
                alt="Buddhist Scene"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Quote (60%) */}
          <div className="md:w-[60%] px-4 text-center md:text-left">
            <motion.p
              className="text-3xl md:text-4xl font-extrabold italic leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              "Peace comes from within. <br /> Do not seek it without."
            </motion.p>
          </div>
        </motion.div>

        {/* Second Block: Quote Left, Image Right */}
        <motion.div
          className="flex flex-col md:flex-row-reverse items-center md:justify-between "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Image (40%) */}
          <div className="md:w-[60%] flex justify-center">
            <div className="relative w-[250px] h-[250px] md:w-[280px] md:h-[280px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/KungfuPanda.jpg"
                alt="Buddha Meditation"
                layout="fill"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
          </div>

          {/* Quote (60%) */}
          <div className="md:w-[80%] px-20 text-center md:text-left">
            <motion.p
              className="text-3xl md:text-4xl font-extrabold italic leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              "The mind is everything. <br /> What you think you become."
            </motion.p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}