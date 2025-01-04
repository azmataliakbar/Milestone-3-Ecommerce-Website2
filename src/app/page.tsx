// src/app/page.tsx
import Navbar from '@/app/components/Navbar';
import Video1 from '@/app/components/video1';
import Hero1 from '@/app/components/hero1';
import Hero2 from '@/app/components/hero2';
import Hero3 from '@/app/components/hero3';
import Hero4 from '@/app/components/hero4';
import Hero5 from '@/app/components/hero5';
import Video2 from '@/app/components/video2';

import OurPromise from '@/app/components/OurPromise';
import Footer from '@/app/components/Footer';


export default function Home() {
  


    return (
      
      <div>
      <Navbar />
      <Video1 />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4/>
      <Video2 />
      <Hero5/>
      <OurPromise />
      <Footer />
      </div>
    );
  }


