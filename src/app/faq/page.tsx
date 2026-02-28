import Link from 'next/link';
import { ArrowLeft, ChevronDown } from 'lucide-react';

export default function FAQ() {
    const faqs = [
        { q: "Do you offer delivery?", a: "Yes, we offer local delivery within a 10-mile radius of Bowie, MD through our online ordering platform, as well as via UberEats and DoorDash." },
        { q: "Is your meat Halal?", a: "Yes, absolutely. 100% of the meat we serve is ethically sourced and certified Halal." },
        { q: "How spicy is the suya?", a: "Our traditional suya packs a significant punch! It's an authentic heat. However, if you prefer less spice, let us know when ordering and we can adjust the spice level or put the Yaji rub on the side." },
        { q: "Do you have vegetarian or vegan options?", a: "Yes, we offer a fantastic Vegan Suya Bowl made with marinated, grilled portobello mushrooms, served with jollof rice and plantains." },
        { q: "Can I book Project Suya for my wedding or event?", a: "We'd love to! Check out our Catering page for packages, or fill out the inquiry form for custom event menus." },
        { q: "Do you ship nationwide?", a: "Currently, we only offer local pickup and delivery, as our product is best enjoyed fresh off the grill. We are exploring nationwide shipping for our proprietary spice rub in the future." },
    ];

    return (
        <div className="bg-suya-light min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-red font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold text-suya-dark tracking-tighter mb-4 text-center">Got Questions?</h1>
                <p className="text-lg text-suya-brown/80 mb-12 text-center max-w-2xl mx-auto">
                    We've got answers. If you can't find what you're looking for, feel free to reach out via our contact page.
                </p>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group bg-white rounded-2xl border border-suya-dark/5 shadow-sm overflow-hidden open:ring-2 open:ring-suya-red/20 transition-all">
                            <summary className="flex justify-between items-center font-bold text-lg text-suya-dark cursor-pointer p-6 list-none">
                                {faq.q}
                                <span className="transition group-open:rotate-180 bg-suya-light p-2 rounded-full text-suya-orange">
                                    <ChevronDown className="w-5 h-5" />
                                </span>
                            </summary>
                            <div className="text-suya-brown/80 p-6 pt-0 leading-relaxed border-t border-suya-dark/5 bg-suya-light/30">
                                {faq.a}
                            </div>
                        </details>
                    ))}
                </div>

                <div className="mt-16 bg-suya-dark rounded-3xl p-8 md:p-12 text-center text-suya-light shadow-2xl">
                    <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Our team is here to help with any questions regarding allergies, catering needs, or group orders.
                    </p>
                    <Link href="/contact" className="inline-block bg-suya-orange hover:bg-suya-red text-white px-8 py-4 rounded-xl font-bold transition-colors">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
}
