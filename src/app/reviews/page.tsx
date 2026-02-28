import Link from 'next/link';
import { ArrowLeft, Star, Quote } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        { name: "Michael T.", rating: 5, date: "October 2025", text: "Hands down the best suya I've had outside of Lagos. The beef is insanely tender and the spice level is exactly where it needs to be." },
        { name: "Sarah J.", rating: 5, date: "September 2025", text: "The Big Boss platter was a hit at our game night. 10/10 would recommend. The plantains were perfectly caramelized too." },
        { name: "David O.", rating: 5, date: "August 2025", text: "Fast service, incredibly clean shop, and the owner is super friendly. The chicken suya is my weekly go-to now." },
        { name: "Aminat K.", rating: 5, date: "July 2025", text: "Used them to cater my son's graduation party. The presentation was beautiful and the guests literally fought over the last piece of jollof." },
        { name: "Jason R.", rating: 4, date: "June 2025", text: "Great food, very spicy. If you have a low spice tolerance, definitely ask for the sauce on the side. But the flavor is undeniable." },
        { name: "Emily L.", rating: 5, date: "May 2025", text: "I drive 40 minutes from DC just for this. It's that good." }
    ];

    return (
        <div className="bg-suya-light min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-red font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-suya-dark tracking-tighter mb-4 border-l-8 border-suya-yellow pl-6">
                            Word on the <span className="text-suya-red">Street</span>
                        </h1>
                        <p className="text-lg text-suya-brown/80 max-w-2xl pl-8">
                            Don't just take our word for it. Here's what the locals are saying about Project Suya.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-suya-dark/5 flex items-center gap-6 min-w-max">
                        <div className="text-5xl font-black text-suya-dark">4.9</div>
                        <div>
                            <div className="flex text-suya-yellow mb-1">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <div className="text-sm font-bold text-suya-brown/60">Based on 500+ reviews</div>
                        </div>
                        <a href="#" className="bg-suya-dark text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-suya-orange transition-colors">
                            Leave a Review
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((rev, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-suya-dark/5 relative">
                            <Quote className="absolute top-6 right-6 w-8 h-8 text-suya-dark/5" />
                            <div className="flex text-suya-yellow mb-4">
                                {[...Array(rev.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 fill-current" />
                                ))}
                            </div>
                            <p className="text-suya-dark text-lg mb-6 leading-relaxed relative z-10 italic">"{rev.text}"</p>
                            <div className="flex items-center justify-between border-t border-suya-dark/10 pt-4">
                                <span className="font-bold text-suya-red">{rev.name}</span>
                                <span className="text-sm text-gray-400">{rev.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
