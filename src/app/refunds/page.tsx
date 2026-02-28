import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Refunds() {
    return (
        <div className="bg-suya-light min-h-screen py-20 text-suya-dark">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-orange mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back
                </Link>
                <h1 className="text-4xl font-bold mb-8 text-suya-dark tracking-tighter">Refunds & Returns</h1>
                <div className="prose prose-suya max-w-none text-suya-brown/80 space-y-6">
                    <p>Last Updated: October 2025</p>
                    <p>At Project Suya, we take immense pride in the quality of our food. Due to the perishable nature of our products, we do not accept returns on any food items.</p>
                    <h2 className="text-xl font-bold text-suya-dark mt-8">Order Issues</h2>
                    <p>If you encounter an issue with your order (missing items, incorrect order, or quality concerns), please contact us within 2 hours of receiving your order at hello@projectsuya.com or call our shop. We will address the issue via a replacement, store credit, or refund at management's discretion.</p>
                </div>
            </div>
        </div>
    );
}
