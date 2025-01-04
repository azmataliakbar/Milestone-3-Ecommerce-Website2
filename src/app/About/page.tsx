// src/app/About/page.tsx
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import OurPromise from '@/app/components/OurPromise';
import Image from 'next/image';
//import styles from './About.module.css'; // Custom CSS for styling
import styles from "./About.module.css"

export default function About() {
  return (
    <div>
      <Navbar />
    <div className={styles.aboutPage}>
    <header className={styles.header}>
  <h1 className='text-5xl font-bold hover:text-pink-500'>About Pretty Boutique & Store for Feminine</h1>
  <p className='text-balance hover:text-blue-500'>Your ultimate destination for luxury and feminine elegance.</p>
</header>

<section className={styles.content}>
  <div className={styles.paragraph}>
    <Image
      src="/str1.png"
      alt="Pretty Boutique Storefront"
      width={800}
      height={400}
      className={styles.image}
    />
  </div>
  <div className={styles.paragraph}>
    <h2 className='text-5xl font-bold hover:text-pink-500'>Who We Are</h2>
    <p className='text-balance hover:text-blue-500'>
      Pretty Boutique & Store for Feminine is a premier destination for luxurious and high-quality feminine products. Our store celebrates elegance, style, and sophistication, offering a curated collection of items that embody the essence of femininity.
    </p>
    <Image
      src="/str7.png"
      alt="Pretty Boutique Interior"
      width={800}
      height={400}
      className={styles.image}
    />
  </div>

  <div className={styles.paragraph}>
    <h2 className='text-5xl font-bold hover:text-pink-500'>What We Offer</h2>
    <p className='text-balance hover:text-blue-500'>
      From designer handbags, fine jewelry, and stylish apparel to exquisite fragrances and skincare essentials, we bring you an exclusive selection of luxury items tailored to the modern woman. Our products are carefully chosen to enhance your elegance and lifestyle.
    </p>
    <Image
      src="/str6.jpg"
      alt="Luxury Products Display"
      width={800}
      height={400}
      className={styles.image}
    />
  </div>

  <div className={styles.paragraph}>
    <h2 className='text-5xl font-bold hover:text-pink-500'>Promotions & Sales</h2>
    <p className='text-balance hover:text-blue-500'>
      At Pretty Boutique, we believe in making luxury accessible. Enjoy seasonal discounts, exclusive deals, and limited-time promotions that bring you the best value on your favorite products.
    </p>
    <Image
      src="/str3.jpg"
      alt="Exciting Boutique Sales"
      width={800}
      height={400}
      className={styles.image}
    />
  </div>

  <div className={styles.paragraph}>
    <h2 className='text-5xl font-bold hover:text-red-500'>Customer Care</h2>
    <p className='text-balance hover:text-blue-500'>
      Customer satisfaction is at the heart of everything we do. Our dedicated customer care team is always here to assist you, ensuring a seamless shopping experience. From personalized recommendations to after-sales support, we’re committed to excellence.
    </p>
    <Image
      src="/str4.jpg"
      alt="Boutique Customer Care"
      width={800}
      height={400}
      className={styles.image}
    />
  </div>

  <div className={styles.paragraph}>
    <h2 className='text-5xl font-bold hover:text-red-500'>Why Choose Us</h2>
    <p className='text-balance hover:text-blue-500'>
      Pretty Boutique & Store for Feminine stands out for its curated collection, impeccable quality, and outstanding customer service. Step into a world of luxury and sophistication, and let us help you embrace your true essence.
    </p>
    <Image
      src="/str5.png"
      alt="Why Choose Pretty Boutique"
      width={800}
      height={400}
      className={styles.image}
    />
  </div>
</section>

    </div>
      <OurPromise />
      <Footer />
    </div>
  );
}