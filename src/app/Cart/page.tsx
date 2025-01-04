"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import OurPromise from '@/app/components/OurPromise';

function ShoppingCart() {
  const [cart, setCart] = useState([
    {
      id: 4,
      name: "Hat - mrn1",
      price: 5500,
      image: "/hat1.png",
      quantity: 1,
    },
    {
      id: 18,
      name: "Jacket - egreen1",
      price: 11500,
      image: "/ct5.png",
      quantity: 2,
    },
    {
      id: 12,
      name: "Jewellery - jwl4",
      price: 39700,
      image: "/jwl4.png",
      quantity: 1,
    },
    {
      id: 18,
      name: "Lipstick mix - set4",
      price: 18500,
      image: "/lip4.png",
      quantity: 1,
    },
    {
      id: 18,
      name: "Shoe - sndl2",
      price: 14500,
      image: "/sh2.png",
      quantity: 1,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const calculateSubtotal = () => {
      const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setSubtotal(total);
    };

    calculateSubtotal();
  }, [cart]);

  const handleRemoveItem = (itemId: number) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
  };

  return (
    <div>
      <Navbar />
      <div className="bg-pink-200 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl text-black font-bold mb-6 hover:text-pink-600 hover:scale-y-150">Shopping Cart</h1>

          {/* Cart Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-wrap items-center bg-white shadow p-4 rounded mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div className="ml-4 flex-grow">
                    <h3 className="font-bold text-pink-600 text-lg">{item.name}</h3>
                    <p className="text-gray-500">Price: Rs. {item.price}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center mt-2 sm:mt-0">
                    <p className="font-bold text-gray-800 mr-4">
                      Rs. {item.price * item.quantity}
                    </p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Totals */}
            <div className="bg-white shadow p-6 rounded">
              <h2 className="text-2xl text-pink-500 font-bold mb-4 hover:text-pink-800">Cart Totals</h2>
              <p className="text-gray-700 mb-2">
                Subtotal: <span className="font-bold">Rs. {subtotal}</span>
              </p>
              <button
                onClick={handleCheckout}
                className="w-full bg-pink-500 text-white py-2 mt-4 rounded hover:bg-pink-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      <OurPromise />
      <Footer />
    </div>
  );
}

export default ShoppingCart;

