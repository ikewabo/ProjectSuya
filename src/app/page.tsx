"use client";

import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function Home() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-80px)]">

      {/* 1. HERO SECTION */}
      <section className="relative w-full flex-grow flex items-center justify-center bg-suya-dark overflow-hidden">
        {/* Background GIF for Universal Compatibility */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-suya-dark">
          <motion.div
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="w-full h-full bg-[url('/assets/suyafire.gif')] bg-cover bg-center"
          ></motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start gap-8"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block py-2 px-6 rounded-full bg-suya-orange/20 text-suya-orange border border-suya-orange/30 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(242,100,25,0.4)] backdrop-blur-sm">
              🔥 Bowie's Best Kept Secret
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-black text-suya-light tracking-tighter max-w-5xl leading-[0.9]">
            Authentic <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-suya-red to-suya-orange">Afro-Urban</span> <br />Flavors.
          </motion.h1>

          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-gray-300 max-w-2xl text-balance font-medium leading-relaxed">
            Experience the rich, smoky taste of premium suya and vibrant African cuisine, right here in Maryland.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 mt-6 w-full sm:w-auto">
            <Link
              href="/shop"
              className="bg-suya-red hover:bg-suya-orange text-white px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_40px_rgba(217,56,30,0.5)] hover:shadow-[0_0_60px_rgba(242,100,25,0.8)] hover:scale-105"
            >
              Order Now <ArrowRight className="w-6 h-6" />
            </Link>
            <Link
              href="/menu"
              className="bg-white/5 border-2 border-suya-light/50 backdrop-blur-md hover:bg-suya-light hover:text-suya-dark text-suya-light px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              View Menu
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8 pt-8 border-t border-suya-light/20 w-max">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-suya-dark bg-gray-600 overflow-hidden shadow-lg">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div className="flex flex-col pl-2">
              <div className="flex text-suya-yellow gap-1">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span className="text-sm font-semibold text-suya-light/80 mt-1 uppercase tracking-wide">4.9/5 from 500+ locals</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
