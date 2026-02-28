"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'Best Sellers', href: '/best-sellers' },
        { name: 'Our Story', href: '/our-story' },
        { name: 'Suya Club', href: '/suya-club' },
        { name: 'Order Online', href: '/shop' },
        { name: 'Catering', href: '/catering' },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-suya-light/90 backdrop-blur-md border-b border-suya-dark/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-suya-red">
                            PROJECT<span className="text-suya-dark">SUYA</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-suya-dark hover:text-suya-orange font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA & Cart (Desktop) */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Link href="/shop" className="text-suya-dark hover:text-suya-red transition-colors">
                            <ShoppingBag className="w-6 h-6" />
                        </Link>
                        <Link
                            href="/shop"
                            className="bg-suya-red hover:bg-suya-orange text-white px-6 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg"
                        >
                            Order Now
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link href="/shop" className="text-suya-dark">
                            <ShoppingBag className="w-6 h-6" />
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="text-suya-dark hover:text-suya-red focus:outline-none"
                        >
                            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-suya-dark/10 bg-suya-light"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-4 text-lg font-medium text-suya-dark hover:text-suya-red hover:bg-suya-dark/5 rounded-lg transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Link
                                    href="/shop"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-suya-red text-white px-6 py-3 rounded-xl font-bold shadow-md"
                                >
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
