// src/app/CustomerTestimonials/page.tsx
"use client"

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import OurPromise from '@/app/components/OurPromise';
import Image from 'next/image';
import React, { useState } from 'react';

interface Testimonial {
  name: string;
  image: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    image: '/fac1.png',
    review:
      'Pretty Boutique & Store has the finest collection of luxury items. The staff is incredibly helpful, and I found the perfect gift for my wife. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Jane Smith',
    image: '/fac2.png',
    review:
      'I am in love with the variety at Pretty Boutique. From elegant dresses to stunning jewelry, this store has everything a woman could wish for. Their collection is breathtaking!',
    rating: 5,
  },
  {
    name: 'Michael Brown',
    image: '/fac3.png',
    review:
      'Pretty Boutique goes above and beyond with their customer service. I ordered a luxury handbag, and they delivered it beautifully packaged and on time. Amazing experience!',
    rating: 5,
  },
  {
    name: 'Emily Wilson',
    image: '/fac4.png',
    review:
      'The range of makeup kits and accessories is outstanding. I’ve never felt more pampered while shopping. This store is a gem for all women!',
    rating: 5,
  },
  {
    name: 'Chris Johnson',
    image: '/fac5.png',
    review:
      'Pretty Boutique never disappoints. From chic skirts to beautiful shoes, their collection is always on trend. I will be back for more!',
    rating: 5,
  },
  {
    name: 'Sophia Davis',
    image: '/fac6.png',
    review:
      'I adore their collection of sandals and handbags. The quality is unmatched, and the prices are worth every penny. Such a delightful shopping experience!',
    rating: 5,
  },
  {
    name: 'Ethan Martinez',
    image: '/fac7.png',
    review:
      'I purchased a gorgeous necklace for my wife, and she was thrilled! The staff was helpful in selecting the perfect piece. Highly recommend Pretty Boutique!',
    rating: 5,
  },
  {
    name: 'Olivia Taylor',
    image: '/fac8.png',
    review:
      'The luxury makeup kits are a dream come true. They make excellent gifts, and the packaging is so classy. Love this store!',
    rating: 5,
  },
  {
    name: 'Daniel Harris',
    image: '/fac9.png',
    review:
      'Shopping at Pretty Boutique is always a pleasure. The atmosphere is warm, and the staff is knowledgeable. I found the perfect jacket for my wife, and she loved it!',
    rating: 4,
  },
  {
    name: 'Sophia Thompson',
    image: '/fac10.png',
    review:
      'My daughters and I love Pretty Boutique. The selection of dresses and jewelry is fabulous, and the store is so inviting. Highly recommend it!',
    rating: 5,
  },
  {
    name: 'James Anderson',
    image: '/fac11.png',
    review:
      'The online shopping experience was seamless. I ordered a pair of luxury sandals for my sister, and they were delivered quickly. Excellent service!',
    rating: 4,
  },
  {
    name: 'Mia Robinson',
    image: '/fac12.png',
    review:
      'Pretty Boutique is my go-to for luxury items. I bought a stylish jacket and matching handbag, and they are just perfect. Highly recommended!',
    rating: 5,
  },
];



const CustomerTestimonials = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleReadMore = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <Navbar />
    
    <div className="bg-pink-200 min-h-screen py-10 px-5">
      
      <h1 className="text-4xl  lg:text-5xl text-pink-500 font-bold text-center mb-10 hover:scale-y-150 lg:hover:scale-125 hover:text-pink-800">
        Customer Testimonials
      </h1>
      <p className="text-center text-gray-400 font-bold text-lg mb-10 hover:scale-125 hover:text-pink-800">
        Hear what our satisfied customers have to say.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-5 transition-transform transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={testimonial.image}
                width={100}
                height={100}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg text-pink-600 font-semibold hover:scale-125">{testimonial.name}</h3>
                <div className="flex items-center text-yellow-500 hover:scale-y-150">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-gray-300 ">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">
              {expanded === index
                ? testimonial.review
                : `${testimonial.review.substring(0, 120)}...`}
              <span
                onClick={() => toggleReadMore(index)}
                className="text-pink-500 cursor-pointer ml-2"
              >
                {expanded === index ? 'Read Less' : 'Read More'}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
    <OurPromise />
    <Footer />
    </div>
  );
};

export default CustomerTestimonials;
