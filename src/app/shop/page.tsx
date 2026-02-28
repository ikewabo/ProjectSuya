import Link from 'next/link';
import { ArrowLeft, ShoppingBag } from 'lucide-react';

export default function Shop() {
    const products = [
        { name: "$25 Meal Box", price: "$25.00", img: "/assets/premium_meal_box.png" },
        { name: "20 oz Suya Bowl", price: "$25.00", img: "/assets/premium_suya_bowl.png" },
        { name: "Baked Jellof Rice", price: "$10.00", img: "/assets/premium_jollof_rice.png" },
        { name: "1/2 Tray Beef & 1/2 Chicken", price: "$70.00", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80" },
        { name: "Party Beef Suya Tray", price: "$450.00", img: "https://images.unsplash.com/photo-1544025162-811114bd2f23?w=800&q=80" },
        { name: "Fried Plantains", price: "$5.00", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=800&q=80" }
    ];

    return (
        <div className="bg-suya-light min-h-screen py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 text-suya-brown hover:text-suya-red font-bold mb-8 transition-colors">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>

                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-black text-suya-dark tracking-tighter mb-4">Order <span className="text-transparent bg-clip-text bg-gradient-to-r from-suya-red to-suya-orange">Online</span></h1>
                        <p className="text-lg text-suya-brown/80 max-w-2xl font-medium">
                            Pickup in Bowie, MD or select local delivery at checkout.
                        </p>
                    </div>
                    <button className="bg-suya-dark text-white px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:bg-suya-orange transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
                        <ShoppingBag className="w-6 h-6" /> <span className="text-lg">Cart (0)</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((item, i) => (
                        <div key={i} className="group bg-white rounded-3xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_40px_rgba(217,56,30,0.15)] transition-all duration-300 border border-suya-dark/5 flex flex-col h-full">
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-suya-dark/60 to-transparent z-10 opacity-50 group-hover:opacity-20 transition-opacity"></div>
                                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                            </div>
                            <div className="p-8 flex flex-col flex-grow text-center bg-white">
                                <h3 className="text-2xl font-black text-suya-dark mb-2 tracking-tight">{item.name}</h3>
                                <span className="text-2xl font-bold text-suya-orange mb-8 block">{item.price}</span>
                                <button className="w-full mt-auto py-4 rounded-xl bg-suya-dark hover:bg-suya-red text-white font-bold text-lg text-center transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(217,56,30,0.4)] hover:-translate-y-1">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
