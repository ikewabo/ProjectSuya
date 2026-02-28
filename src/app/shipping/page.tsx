import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Shipping() {
    return (
        <div className="bg-suya-light min-h-screen py-20 text-suya-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-orange mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
                <h1 className="text-4xl font-bold mb-8 text-suya-dark tracking-tighter">Shipping & Delivery</h1>
                <div className="prose prose-suya max-w-none text-suya-brown/80 space-y-6">
                    <p>Last Updated: October 2025</p>
                    <h2 className="text-xl font-bold text-suya-dark mt-8">Local Delivery</h2>
                    <p>We offer local delivery within a 10-mile radius of our Bowie, MD location. Delivery fees are calculated at checkout based on distance. Delivery times range from 30 to 60 minutes depending on order volume and traffic.</p>

                    <h2 className="text-xl font-bold text-suya-dark mt-8">Nationwide Shipping</h2>
                    <p>Currently, we do not offer nationwide shipping for our fresh food items to ensure quality and food safety. We plan to launch nationwide shipping for our signature dry spice rubs by the end of the year.</p>
                </div>
            </div>
        </div>
    );
}
