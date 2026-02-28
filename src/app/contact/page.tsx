import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-suya-light min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-red font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold text-suya-dark tracking-tighter mb-12">Contact & <span className="text-suya-orange">Location</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Details & Form */}
                    <div className="space-y-12">

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suya-dark/5">
                                <div className="bg-suya-red/10 w-12 h-12 rounded-full flex items-center justify-center text-suya-red mb-4">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-suya-dark text-lg mb-2">Visit Us</h3>
                                <p className="text-suya-brown/80 mb-4">123 Flavor Street<br />Bowie, MD 20715</p>
                                <a href="https://maps.google.com/?q=Bowie,MD" target="_blank" rel="noreferrer" className="text-suya-orange font-bold hover:text-suya-red text-sm">
                                    Get Directions →
                                </a>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suya-dark/5">
                                <div className="bg-suya-yellow/10 w-12 h-12 rounded-full flex items-center justify-center text-suya-yellow mb-4">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-suya-dark text-lg mb-2">Operating Hours</h3>
                                <p className="text-suya-brown/80 text-sm">Mon-Thu: 11am - 9pm</p>
                                <p className="text-suya-brown/80 text-sm">Fri-Sat: 11am - 11pm</p>
                                <p className="text-suya-brown/80 text-sm">Sun: 12pm - 8pm</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suya-dark/5">
                                <div className="bg-suya-dark/5 w-12 h-12 rounded-full flex items-center justify-center text-suya-dark mb-4">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-suya-dark text-lg mb-2">Call Us</h3>
                                <p className="text-suya-brown/80 mb-2">(301) 555-0123</p>
                                <p className="text-xs text-gray-400">Available during operating hours for orders and inquiries.</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-suya-dark/5">
                                <div className="bg-suya-dark/5 w-12 h-12 rounded-full flex items-center justify-center text-suya-dark mb-4">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-suya-dark text-lg mb-2">Email</h3>
                                <a href="mailto:hello@projectsuya.com" className="text-suya-brown/80 hover:text-suya-orange mb-2 block">
                                    hello@projectsuya.com
                                </a>
                                <p className="text-xs text-gray-400">We typically reply within 24 hours.</p>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-suya-dark/5">
                            <h3 className="text-2xl font-bold text-suya-dark mb-6">Send a Message</h3>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="Name" className="w-full bg-suya-light border border-suya-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange" required />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" className="w-full bg-suya-light border border-suya-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange" required />
                                    </div>
                                </div>
                                <div>
                                    <textarea rows={4} placeholder="How can we help?" className="w-full bg-suya-light border border-suya-dark/10 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-suya-dark hover:bg-suya-red text-white font-bold py-4 rounded-xl transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Map Embed */}
                    <div className="h-[600px] lg:h-auto rounded-3xl overflow-hidden shadow-xl border border-suya-dark/5 relative">
                        <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur px-4 py-2 rounded-xl font-bold text-suya-dark shadow-sm">
                            Service Area: Bowie, MD & Surrounding (10mi)
                        </div>
                        {/* Generic iFrame map embedding Bowie, MD */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49652.88048600155!2d-76.77708514999999!3d38.96695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7eb5c87f2e15d%3A0xe67db5d9c24ce3d6!2sBowie%2C%20MD!5e0!3m2!1sen!2sus!4v1715694851234!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </div>
    );
}
