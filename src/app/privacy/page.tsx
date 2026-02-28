import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="bg-suya-light min-h-screen py-20 text-suya-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-orange mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
                <h1 className="text-4xl font-bold mb-8 text-suya-dark tracking-tighter">Privacy Policy</h1>
                <div className="prose prose-suya max-w-none text-suya-brown/80 space-y-6">
                    <p>Last Updated: October 2025</p>
                    <p>This is a placeholder for the Project Suya Privacy Policy. In a real-world scenario, this would detail how customer data (email, phone, address, payment info) is collected during the checkout process and how it is used.</p>
                    <h2 className="text-xl font-bold text-suya-dark mt-8">1. Information We Collect</h2>
                    <p>We collect information you provide directly to us when ordering, joining our mailing list, or contacting us.</p>
                </div>
            </div>
        </div>
    );
}
