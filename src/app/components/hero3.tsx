import Link from 'next/link';

const Hero3 = () => {
  return (
    <section className="bg-pink-200 p-4 md:p-16">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-pink-600 font-bold mb-6 hover:scale-150 hover:text-pink-800">
          Customer Testimonials
        </h2>
        
        {/* Subtext */}
        <p className="text-xs sm:text-base md:text-lg font-bold text-gray-400 hover:scale-y-150  lg:hover:scale-150 mb-6 hover:text-pink-800">
          Hear what our satisfied customers have to say.
        </p>
      </div>
      
      {/* Button Section */}
      <div className="flex justify-center items-center">
        <Link href="/CustomerTestimonials">
          <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg hover:scale-125">
            Read Customer Testimonials
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero3;
