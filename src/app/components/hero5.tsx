import Link from 'next/link';

const Hero5 = () => {
  return (
    <section className="bg-pink-100 p-8 md:p-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl text-pink-500 font-bold mb-4 hover:scale-125 hover:text-pink-800">
          Join Our Newsletter
        </h2>
        
        {/* Subtext */}
        <p className="text-[14px] sm:text-base md:text-lg text-gray-400 font-bold hover:scale-125 hover:text-pink-800">
          Stay updated on the latest offers and news.
        </p>
      </div>

      {/* Button */}
      <Link href="/Newsletter">
        <div className="flex justify-center items-center mt-4">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg hover:scale-125">
            Read Newsletter
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Hero5;
