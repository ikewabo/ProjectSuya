import Link from 'next/link';
import { ArrowLeft, Instagram } from 'lucide-react';

export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1544025162-811114bd2f23?w=800&q=80",
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
        "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80",
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80", // random food 1
        "https://images.unsplash.com/photo-1560684352-8497838a2229?w=800&q=80", // random food 2
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", // random food 3
    ];

    return (
        <div className="bg-suya-dark min-h-screen py-20 text-suya-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-orange hover:text-white font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">Visuals & <span className="text-suya-yellow">Vibes</span></h1>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            A glimpse into the Project Suya experience. Warning: May cause extreme hunger and unexpected cravings.
                        </p>
                    </div>
                    <a href="#" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                        <Instagram className="w-5 h-5" /> Follow @ProjectSuya
                    </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((img, i) => (
                        <div key={i} className={`relative overflow-hidden group rounded-xl ${i % 3 === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2 h-64 sm:h-auto' : 'h-64'} bg-suya-dark/50`}>
                            <div className="absolute inset-0 bg-suya-dark/40 group-hover:bg-transparent transition-colors z-10 duration-500 pointer-events-none"></div>
                            <img src={img} alt={`Gallery Image ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] ease-out" />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/shop" className="inline-block bg-suya-red hover:bg-suya-orange text-white px-10 py-5 rounded-full font-bold text-lg transition-colors shadow-lg shadow-suya-red/20">
                        Craving yet? Order Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
