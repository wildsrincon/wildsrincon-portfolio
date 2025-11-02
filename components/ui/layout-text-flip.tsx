"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 3000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize the interval configuration to mantener consistentes las dependencias
  const intervalConfig = React.useMemo(
    () => ({
      duration,
      wordsLength: words.length,
    }),
    [duration, words.length]
  );

  useEffect(() => {
    // ensure the current index is valid if words length changed
    setCurrentIndex((prev) => (prev >= intervalConfig.wordsLength ? 0 : prev));

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % intervalConfig.wordsLength);
    }, intervalConfig.duration);

    return () => clearInterval(interval);
  }, [intervalConfig]);

  return (
    <>
      <motion.span
        layoutId="subtext"
        className="text-2xl font-bold tracking-tight drop-shadow-lg md:text-4xl"
      >
        {text}
      </motion.span>

      <motion.span
        layout
        className="relative w-fit overflow-hidden rounded-md border border-transparent bg-white px-1 py-1 font-sans text-xl font-bold tracking-tight text-black shadow-sm ring shadow-black/10 ring-black/10 drop-shadow-lg md:text-4xl dark:bg-neutral-900 dark:text-white dark:shadow-sm dark:ring-1 dark:shadow-white/10 dark:ring-white/10 ml-3"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -40, filter: "blur(10px)" }}
            animate={{
              y: 0,
              filter: "blur(0px)",
            }}
            exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
            transition={{
              duration: 0.5,
            }}
            className={cn("inline-block whitespace-nowrap")}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};
