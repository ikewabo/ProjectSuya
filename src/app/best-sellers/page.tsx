"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export default function BestSellers() {
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen pt-20 bg-suya-light">
            {/* BEST-SELLERS GRID */}
            <section className="py-20 lg:py-32 bg-suya-light flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeUp}
                        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
                    >
                        <div className="max-w-xl text-balance">
                            <h2 className="text-4xl md:text-5xl font-bold text-suya-dark tracking-tighter mb-4">Our Signature <span className="text-suya-red">Cuts</span></h2>
                            <p className="text-lg text-suya-brown/80">Marinated for 24 hours in our secret spice blend and grilled to smoky perfection.</p>
                        </div>
                        <Link href="/menu" className="font-bold text-suya-orange hover:text-suya-red flex items-center gap-1 transition-colors w-max">
                            See full menu <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { name: 'Classic Beef Suya', price: '$18.99', desc: 'Tender beef slices, spicy peanut rub, fresh onions.', img: 'https://images.unsplash.com/photo-1544025162-811114bd2f23?w=800&q=80' },
                            { name: 'Spicy Chicken Suya', price: '$16.99', desc: 'Juicy chicken breast skewers, charred to perfection.', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80' },
                            { name: 'Jollof & Suya Combo', price: '$24.99', desc: 'Smoky party jollof served with your choice of protein.', img: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80' },
                        ].map((item, i) => (
                            <motion.div variants={fadeUp} key={i} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-suya-dark/5 flex flex-col h-full">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-suya-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-bold text-suya-dark">
                                        {item.price}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-suya-dark mb-2">{item.name}</h3>
                                    <p className="text-suya-brown/70 mb-6 flex-grow">{item.desc}</p>
                                    <Link href="/shop" className="w-full py-3 rounded-xl bg-suya-dark/5 hover:bg-suya-red hover:text-white text-suya-dark font-bold text-center transition-colors">
                                        Add to Order
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
