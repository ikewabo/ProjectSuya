"use client";

import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function About() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <div className="bg-suya-light min-h-screen py-20 text-suya-dark">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.div variants={fadeUp}>
                    <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-red font-bold mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5" /> Back to Home
                    </Link>
                </motion.div>

                <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-bold tracking-tighter mb-8">
                    The <span className="text-suya-orange">Project Suya</span> Story
                </motion.h1>

                <motion.div variants={fadeUp} className="mb-12 rounded-3xl overflow-hidden h-80 relative shadow-xl">
                    <img src="https://images.unsplash.com/photo-1544025162-811114bd2f23?w=1200&q=80" alt="Grilling Suya" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-suya-dark/20"></div>
                </motion.div>

                <motion.div variants={fadeUp} className="prose prose-lg prose-headings:font-bold prose-headings:tracking-tighter prose-headings:text-suya-dark prose-p:text-suya-brown/80 max-w-none space-y-8">
                    <h2 className="text-3xl">Bridging the Gap</h2>
                    <p className="text-xl leading-relaxed">
                        Project Suya was born out of a simple, undeniable craving: the need for authentic, street-style Nigerian suya in the DMV area. Not the watered-down versions found in fine dining, but the real, smoky, unapologetically spicy meat that defines late nights in Lagos.
                    </p>

                    <h2 className="text-3xl">The Yaji Spice</h2>
                    <p className="text-lg">
                        Our secret lies in our 'Yaji'—the complex, dry peanut-based spice rub that coats every piece of meat we serve. We don't cut corners. We source our kuli-kuli (roasted peanut paste), ginger, cayenne, and exotic African spices directly from local markets in West Africa.
                    </p>
                    <p className="text-lg">
                        Every batch of our spice rub is blended in-house, ensuring the perfect harmony of heat, nuttiness, and savory depth.
                    </p>

                    <h2 className="text-3xl">Quality Promise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 not-prose">
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-suya-dark/5 shadow-sm text-center transition-all">
                            <div className="text-4xl mb-4">🥩</div>
                            <h3 className="font-bold text-xl mb-2">100% Halal</h3>
                            <p className="text-sm text-suya-brown">Ethically sourced, premium cuts of meat.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-suya-dark/5 shadow-sm text-center transition-all">
                            <div className="text-4xl mb-4">⏱️</div>
                            <h3 className="font-bold text-xl mb-2">24h Marinade</h3>
                            <p className="text-sm text-suya-brown">Patience is our main ingredient. We don't rush the flavor.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-6 rounded-2xl border border-suya-dark/5 shadow-sm text-center transition-all">
                            <div className="text-4xl mb-4">🔥</div>
                            <h3 className="font-bold text-xl mb-2">Open Flame</h3>
                            <p className="text-sm text-suya-brown">Grilled over an open flame for that signature smoky char.</p>
                        </motion.div>
                    </div>

                    <h2 className="text-3xl">The Vibe</h2>
                    <p className="text-lg">
                        We built Project Suya to be more than just a takeout spot. It's an Afro-Urban experience. From the afrobeats playing in the background to the warm, vibrant aesthetic of our Bowie shop, we want every visit to feel like a celebration of culture.
                    </p>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-16 pt-8 border-t border-suya-dark/10 flex flex-col sm:flex-row gap-4">
                    <Link href="/menu" className="bg-suya-dark hover:bg-suya-red text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-colors">
                        View the Menu
                    </Link>
                    <Link href="/contact" className="bg-transparent border-2 border-suya-dark hover:bg-suya-dark hover:text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-colors">
                        Get Directions
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
