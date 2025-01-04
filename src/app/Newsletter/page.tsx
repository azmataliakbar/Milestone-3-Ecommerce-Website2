// src/app/Newsletter/page.tsx
"use client"

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import OurPromise from '@/app/components/OurPromise';
import Signup from '@/app/components/Signup';
import styles from './Newsletter.module.css';
import React, { useState } from 'react';

//export default function Newsletter() {
  const newsletters = [
    {
      title: "Feminine Fashion Trends of the Year",
      content: `Explore the latest trends in luxury fashion, from elegant skirts to chic jackets. 
      Stay ahead with timeless pieces that define feminine grace. 
      Discover how style and sophistication come together in our boutique.
      Join the luxury revolution with Pretty Boutique & Store for Feminine.`,
    },
    {
      title: "Essentials for the Modern Woman",
      content: `Transform your wardrobe with our must-have luxury items. 
      From iconic handbags to statement shoes, 
      elevate your style with ease. 
      Explore our top picks and redefine your elegance.`,
    },
    {
      title: "Exclusive Seasonal Offers",
      content: `Celebrate this season with unbeatable discounts on luxury feminine items. 
      Grab the best deals on dresses, makeup kits, and accessories. 
      Don’t miss out on making every moment glamorous.`,
    },
    {
      title: "Why Choose Pretty Boutique & Store?",
      content: `We’re committed to elegance and quality. 
      Our curated selection ensures you find the finest in feminine luxury. 
      Experience exceptional customer care and a seamless shopping journey.`,
    },
    {
      title: "Upcoming Collections",
      content: `Be the first to know about our latest arrivals. 
      From stunning jewelry to high-fashion handbags, 
      we bring you the future of luxury fashion.`,
    },
    {
      title: "Customer Style Stories",
      content: `Read how our customers transformed their looks with our products. 
      From creating glamorous ensembles to perfecting everyday chic, 
      be inspired by their journeys.`,
    },
    {
      title: "Sustainable Fashion Practices",
      content: `Learn how Pretty Boutique & Store is contributing to a sustainable future. 
      From eco-friendly materials to ethical sourcing, 
      join us in making a difference with style.`,
    },
    {
      title: "Behind the Scenes",
      content: `Get an insider’s look at how we curate our collections. 
      From selecting the finest materials to delivering exceptional service, 
      discover what makes Pretty Boutique & Store unique.`,
    },
    {
      title: "Gift Guides for Every Occasion",
      content: `Find the perfect gift for the special women in your life with our curated guides. 
      Whether it’s for birthdays, anniversaries, or holidays, 
      make every celebration unforgettable.`,
    },
    {
      title: "Style Tutorials and Guides",
      content: `Master your wardrobe with our easy-to-follow style guides. 
      From pairing the perfect accessories to creating iconic looks, 
      unlock the full potential of your fashion.`,
    },
    {
      title: "Deals of the Month",
      content: `Discover our handpicked deals for this month. 
      From luxury handbags to makeup essentials, 
      save big on the items you adore.`,
    },
    {
      title: "Connect with Pretty Boutique & Store",
      content: `Join our community and stay updated on the latest collections and promotions. 
      Follow us on social media and subscribe to our newsletter for exclusive perks.`,
    },
  ];
  


  export default function Newsletter() {
    const [expanded, setExpanded] = useState<number | null>(null);
  
    const toggleReadMore = (index: number) => {
      setExpanded((prev) => (prev === index ? null : index));
    };



  return (
    <div>
      <Navbar />
    
    <div className={styles.newsletterPage}>
      <header className={styles.header}>
        <h1 className='hover:scale-y-110  lg:hover:scale-110 hover:text-pink-900'>Welcome to Pretty Boutique & Store Newsletters</h1>
        <p className='hover:scale-110  lg:hover:scale-125 hover:text-pink-800'>Stay informed about the latest updates, promotions, and tech trends.</p>
      </header>

      <section className={styles.cardsContainer}>
      {newsletters.map((newsletter, index) => (
        <div key={index} className={styles.card}>
          <h2 className={styles.title}>{newsletter.title}</h2>
          <p className={styles.content}>
            {expanded === index
              ? newsletter.content
              : `${newsletter.content.substring(0, 200)}... `}
            <span
              className={styles.readMore}
              onClick={() => toggleReadMore(index)}
            >
              {expanded === index ? 'Show Less' : 'Read More'}
            </span>
          </p>
        </div>
      ))}
    </section>

      <footer className={styles.footer}>
        <h2 className='hover:text-pink-900'>Stay Connected with Pretty Boutique & Store</h2>
        <p className='hover:text-pink-700'>Sign up for more updates and exclusive content. We value our customers and are always here for you!</p>
      </footer>
    </div>
      <Signup />
      <OurPromise />
      <Footer />
    </div>
  );
}
