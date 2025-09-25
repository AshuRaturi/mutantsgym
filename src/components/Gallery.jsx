// src/components/Gallery.jsx
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery({ images }) {
  const [openIndex, setOpenIndex] = useState(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (openIndex === null) return;
      if (e.key === "Escape") setOpenIndex(null);
      if (e.key === "ArrowLeft")
        setOpenIndex((openIndex - 1 + images.length) % images.length);
      if (e.key === "ArrowRight")
        setOpenIndex((openIndex + 1) % images.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [openIndex, images.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-black dark:to-zinc-900">
      <div className="max-w-6xl px-4 mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-yellow-500 md:text-4xl">
            Our Gym Gallery
          </h2>
          <p className="w-20 h-1 mx-auto mt-3 bg-yellow-500 rounded-full"></p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Peek inside the grind – where passion meets power ⚡
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {images.map((src, i) => (
            <motion.button
              key={i}
              onClick={() => setOpenIndex(i)}
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden shadow-md rounded-2xl group"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="object-cover w-full transition-transform duration-500 h-72 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center transition opacity-0 bg-black/50 backdrop-blur-sm group-hover:opacity-100">
                <span className="px-3 py-1 text-sm font-semibold text-black bg-yellow-400 rounded-full">
                  View Photo
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {openIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close */}
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute p-2 text-white transition top-6 right-6 hover:scale-110"
              >
                <X className="w-7 h-7" />
              </button>

              {/* Prev */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((openIndex - 1 + images.length) % images.length);
                }}
                className="absolute p-2 text-white transition left-4 hover:scale-125 hover:text-yellow-400"
              >
                <ChevronLeft className="w-9 h-9" />
              </button>

              {/* Image */}
              <motion.div
                key={openIndex}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-4xl"
              >
                <img
                  src={images[openIndex]}
                  alt={`open-${openIndex}`}
                  className="w-full h-auto shadow-2xl rounded-xl"
                />
              </motion.div>

              {/* Next */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenIndex((openIndex + 1) % images.length);
                }}
                className="absolute p-2 text-white transition right-4 hover:scale-125 hover:text-yellow-400"
              >
                <ChevronRight className="w-9 h-9" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
