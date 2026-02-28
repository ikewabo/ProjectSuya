"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function OurStory() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* DEALS / STORY SPLIT */}
            <section className="py-20 lg:py-32 bg-suya-dark text-suya-light relative overflow-hidden flex-grow">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-suya-red/5 skew-x-12 translate-x-1/4"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        {/* Story */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="space-y-8"
                        >
                            <div>
                                <span className="text-suya-orange font-bold tracking-widest uppercase text-sm mb-2 block">Our Story</span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-balance">
                                    From the Streets of <span className="text-suya-yellow">Lagos</span> to Bowie, MD.
                                </h2>
                                <div className="space-y-4 text-gray-300 text-lg">
                                    <p>
                                        Project Suya isn't just a restaurant; it's a movement bridging cultures through the universal language of incredible food.
                                    </p>
                                    <p>
                                        We ethically source the freshest local ingredients and combine them with authentic, imported spices to recreate the nostalgic, smoky flavor of proper street-side suya in a premium, modern setting.
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-suya-light/10">
                                <div>
                                    <h4 className="text-3xl font-bold text-suya-light mb-1">100%</h4>
                                    <p className="text-sm text-suya-orange">Halal Certified Meats</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-bold text-suya-light mb-1">24h</h4>
                                    <p className="text-sm text-suya-orange">Marination Process</p>
                                </div>
                            </div>

                            <Link href="/about" className="inline-flex items-center gap-2 font-bold text-suya-yellow hover:text-white transition-colors">
                                Read our full story <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* Deal Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-gradient-to-br from-suya-red to-suya-orange p-1 rounded-3xl shadow-2xl transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500"
                        >
                            <div className="bg-suya-dark rounded-[22px] p-8 md:p-12 h-full flex flex-col justify-center gap-6">
                                <div className="inline-block bg-white/10 text-suya-yellow px-4 py-1.5 rounded-full font-bold text-sm border border-suya-yellow/30 w-max">
                                    🔥 Special Offer
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white">The "Big Boss" Platter</h3>
                                <p className="text-gray-300 text-lg">
                                    Perfect for game days or family dinners. Includes Beef Suya, Chicken Suya, Jumbo Prawns, double Jollof, and sweet plantains.
                                </p>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-5xl font-bold text-white">$65</span>
                                    <span className="text-xl text-gray-400 line-through">$85</span>
                                </div>
                                <Link href="/shop" className="mt-4 bg-white hover:bg-suya-light text-suya-dark text-center py-4 rounded-xl font-bold text-lg transition-colors">
                                    Claim Deal Online
                                </Link>
                                <p className="text-xs text-center text-gray-400 mt-2">*Available for pickup and delivery within Bowie area.</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
        </div>
    );
}
