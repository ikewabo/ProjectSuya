import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-suya-dark text-suya-light border-t border-suya-brown">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm lg:text-base">

                    {/* Brand & Story */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter text-suya-red">
                            PROJECT<span className="text-white">SUYA</span>
                        </h2>
                        <p className="text-gray-400">
                            Premium afro-urban flavors brought to life right here in Bowie, MD. Authentic taste, unforgettable vibes.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-suya-yellow">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/menu" className="text-gray-400 hover:text-suya-orange transition-colors">Menu</Link></li>
                            <li><Link href="/shop" className="text-gray-400 hover:text-suya-orange transition-colors">Order Online</Link></li>
                            <li><Link href="/catering" className="text-gray-400 hover:text-suya-orange transition-colors">Catering</Link></li>
                            <li><Link href="/about" className="text-gray-400 hover:text-suya-orange transition-colors">About Us</Link></li>
                            <li><Link href="/gallery" className="text-gray-400 hover:text-suya-orange transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Support & Legal */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-suya-yellow">Support</h3>
                        <ul className="space-y-3">
                            <li><Link href="/contact" className="text-gray-400 hover:text-suya-orange transition-colors">Contact Us</Link></li>
                            <li><Link href="/faq" className="text-gray-400 hover:text-suya-orange transition-colors">FAQ</Link></li>
                            <li><Link href="/shipping" className="text-gray-400 hover:text-suya-orange transition-colors">Shipping & Delivery</Link></li>
                            <li><Link href="/refunds" className="text-gray-400 hover:text-suya-orange transition-colors">Refunds & Returns</Link></li>
                            <li><Link href="/privacy" className="text-gray-400 hover:text-suya-orange transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-gray-400 hover:text-suya-orange transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-suya-yellow">Visit Us</h3>
                        <address className="not-italic text-gray-400 space-y-3">
                            <p>📍 123 Flavor Street</p>
                            <p className="pl-6">Bowie, MD 20715</p>
                            <p>📞 <a href="tel:+13015550123" className="hover:text-suya-orange transition-colors">(301) 555-0123</a></p>
                            <p>✉️ <a href="mailto:hello@projectsuya.com" className="hover:text-suya-orange transition-colors">hello@projectsuya.com</a></p>
                            <div className="pt-2">
                                <p className="font-bold text-white">Hours:</p>
                                <p>Mon-Thu: 11am - 9pm</p>
                                <p>Fri-Sat: 11am - 11pm</p>
                                <p>Sun: 12pm - 8pm</p>
                            </div>
                        </address>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Project Suya. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <span className="hover:text-suya-yellow cursor-pointer transition-colors">Instagram</span>
                        <span className="hover:text-suya-yellow cursor-pointer transition-colors">Facebook</span>
                        <span className="hover:text-suya-yellow cursor-pointer transition-colors">TikTok</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
