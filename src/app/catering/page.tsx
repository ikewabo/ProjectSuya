import Link from 'next/link';
import { ArrowLeft, CalendarCheck } from 'lucide-react';

export default function Catering() {
    return (
        <div className="bg-suya-dark min-h-screen py-20 text-suya-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-orange hover:text-white font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                    Bring the Vibe to <span className="text-suya-yellow">Your Event</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl text-balance mb-12">
                    From corporate lunches to wedding receptions, Project Suya delivers unforgettable flavor and presentation that will leave your guests talking.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Packages */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold border-b border-suya-light/20 pb-4">Catering Packages</h2>

                        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                            <h3 className="text-2xl font-bold text-suya-yellow mb-2">The Office Drop</h3>
                            <p className="text-gray-400 mb-4">Serves 10-15 people</p>
                            <ul className="space-y-2 text-sm text-gray-300 mb-6">
                                <li>• Assorted Beef & Chicken Suya Skewers (30pcs)</li>
                                <li>• Large tray of Party Jollof</li>
                                <li>• Large tray of Sweet Plantains</li>
                                <li>• Secret Suya Sauce & Fresh Onions</li>
                            </ul>
                            <div className="font-bold text-xl text-white">$249</div>
                        </div>

                        <div className="bg-gradient-to-br from-suya-red/20 to-suya-orange/10 border border-suya-red/30 p-6 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-suya-red text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
                            <h3 className="text-2xl font-bold text-white mb-2">The Owambe Spread</h3>
                            <p className="text-gray-400 mb-4">Serves 25-30 people</p>
                            <ul className="space-y-2 text-sm text-gray-300 mb-6">
                                <li>• Premium Beef, Chicken, and Jumbo Prawn Suya</li>
                                <li>• Extra Large tray of Party Jollof</li>
                                <li>• Fried Yam Batons & Sweet Plantains</li>
                                <li>• Assorted Drinks (Sobolo/Zobo & Ginger)</li>
                            </ul>
                            <div className="font-bold text-xl text-white">$499</div>
                        </div>

                        <p className="text-sm text-gray-400 italic">*Custom menus available for events 50+ guests.</p>
                    </div>

                    {/* Form */}
                    <div className="bg-white text-suya-dark p-8 rounded-3xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <CalendarCheck className="w-6 h-6 text-suya-red" />
                            Request a Quote
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-suya-brown mb-1">Full Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange" required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-suya-brown mb-1">Email</label>
                                    <input type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-suya-brown mb-1">Phone</label>
                                    <input type="tel" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange" required />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-bold text-suya-brown mb-1">Event Date</label>
                                    <input type="date" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-suya-brown mb-1">Guest Count</label>
                                    <input type="number" min="10" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-suya-brown mb-1">Event Details & Requirements</label>
                                <textarea rows={4} className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-suya-orange focus:ring-1 focus:ring-suya-orange" required></textarea>
                            </div>
                            <button type="submit" className="w-full bg-suya-red hover:bg-suya-orange text-white font-bold text-lg py-4 rounded-xl transition-colors mt-4">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
