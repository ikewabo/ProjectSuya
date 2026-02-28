import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
    return (
        <div className="bg-suya-light min-h-screen py-20 text-suya-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-orange mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
                <h1 className="text-4xl font-bold mb-8 text-suya-dark tracking-tighter">Terms of Service</h1>
                <div className="prose prose-suya max-w-none text-suya-brown/80 space-y-6">
                    <p>Last Updated: October 2025</p>
                    <p>This is a placeholder for the Project Suya Terms of Service. In a real-world scenario, this would detail the conditions under which you provide services and products to users.</p>
                    <h2 className="text-xl font-bold text-suya-dark mt-8">1. Acceptance of Terms</h2>
                    <p>By accessing our website and ordering our products, you agree to be bound by these Terms of Service.</p>
                </div>
            </div>
        </div>
    );
}
