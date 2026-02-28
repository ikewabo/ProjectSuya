"use client";

import { Clock, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SuyaClub() {
    return (
        <div className="flex flex-col min-h-screen pt-20 bg-suya-yellow">
            {/* INFO / EMAIL CAPTURE */}
            <section className="py-20 bg-suya-yellow relative flex-grow flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-suya-dark rounded-3xl p-8 md:p-16 shadow-2xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    >
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                                Join the <span className="text-suya-orange">Suya Club</span>
                            </h2>
                            <p className="text-gray-300 text-lg text-balance">
                                Get 15% off your first online order, exclusive event invites, and secret menu drops sent straight to your inbox.
                            </p>

                            <form className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="flex-grow px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange transition-all"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-suya-orange hover:bg-suya-red text-white px-8 py-4 rounded-xl font-bold transition-colors whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                        </div>

                        <div className="flex flex-col justify-center space-y-6 lg:pl-12 lg:border-l border-white/10">
                            <div className="flex items-start gap-4">
                                <div className="bg-suya-orange/20 p-3 rounded-full text-suya-orange">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-1">Location</h4>
                                    <p className="text-gray-400">123 Flavor Street<br />Bowie, MD 20715</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-suya-orange/20 p-3 rounded-full text-suya-orange">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-1">Hours</h4>
                                    <p className="text-gray-400">Open Daily<br />11:00 AM - 10:00 PM</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-suya-orange/20 p-3 rounded-full text-suya-orange">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-xl mb-1">Contact</h4>
                                    <p className="text-gray-400">(301) 555-0123</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>
        </div>
    );
}
