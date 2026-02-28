import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Menu() {
    const categories = [
        {
            name: "Suya Bowls & Meals",
            items: [
                { name: "$25 Meal Box", price: "$25.00", desc: "A combo tray containing our signature baked Jellof Rice, tender Beef Suya, and sweet fried plantains." },
                { name: "20 oz Suya Bowl", price: "$25.00", desc: "A hearty individual bowl of our famous smoky, spicy, charcoal-grilled beef suya." },
                { name: "30 oz Project Suya Bowl", price: "$30.00", desc: "A larger portion of our premium beef suya." },
                { name: "30 oz Grilled Chicken Wings Bowl", price: "$25.00", desc: "Perfectly charred and spiced chicken wings." },
            ]
        },
        {
            name: "Suya Trays",
            items: [
                { name: "Small Tray Beef Suya", price: "$60.00", desc: "Perfect for a small gathering or family." },
                { name: "1/2 Tray Beef Suya & 1/2 Chicken Wings", price: "$70.00", desc: "The perfect half-and-half tray." },
                { name: "Medium Size Beef Tray Suya", price: "$130.00", desc: "Great for parties and events." },
                { name: "Party Extra Large Tray Beef Suya", price: "$450.00", desc: "Serves 15-25 people. The ultimate suya feast." },
            ]
        },
        {
            name: "Rice & Sides",
            items: [
                { name: "Baked Jellof Rice", price: "$10.00", desc: "Signature rich, smoky, and vibrant red jellof rice." },
                { name: "Fried Plantains", price: "$5.00", desc: "Sweet, golden, and fried to perfection." },
                { name: "French Fries", price: "$5.00", desc: "Crispy and seasoned." },
                { name: "White Rice", price: "$5.00", desc: "Simple and fluffy." },
            ]
        }
    ];

    return (
        <div className="bg-suya-light min-h-screen py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-red font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold text-suya-dark tracking-tighter mb-4">Our <span className="text-suya-red">Menu</span></h1>
                <p className="text-lg text-suya-brown/80 mb-12 max-w-2xl">
                    Everything is made fresh daily. Our meats are 100% Halal certified and marinated for a minimum of 24 hours.
                </p>

                <div className="space-y-16">
                    {categories.map((category, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-bold text-suya-dark border-b-2 border-suya-red/20 pb-4 mb-8">{category.name}</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex flex-col border border-suya-dark/5 p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-xl font-bold text-suya-dark">{item.name}</h3>
                                            <span className="font-bold text-suya-orange">{item.price}</span>
                                        </div>
                                        <p className="text-suya-brown/70">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link href="/shop" className="inline-block bg-suya-red hover:bg-suya-orange text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Order Online Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
