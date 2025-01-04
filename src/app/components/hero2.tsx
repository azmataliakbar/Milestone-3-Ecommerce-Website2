import Image from "next/image";

const Hero2 = () => {
  return (
    <section className="bg-pink-100 p-6 sm:p-8 md:p-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left">
        {/* Text Content */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-500 font-bold mb-4 hover:scale-105 hover:text-pink-800">
            Exclusive Offers
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-bold hover:scale-105 hover:text-pink-800">
            Limited-time deals and discounts await.
          </p>
        </div>
        {/* Images */}
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          <Image
            src="/drss111.jpg"
            alt="Dress"
            width={150}
            height={150}
            className="rounded-lg sm:rounded-xl hover:scale-105"
          />
          <Image
            src="/bag111.jpg"
            alt="Bag"
            width={150}
            height={150}
            className="rounded-lg sm:rounded-xl hover:scale-105"
          />
          <Image
            src="/jwl111.png"
            alt="Jewelry"
            width={150}
            height={150}
            className="rounded-lg sm:rounded-xl hover:scale-105"
          />
          <Image
            src="/mkup111.png"
            alt="Makeup"
            width={150}
            height={150}
            className="rounded-lg sm:rounded-xl hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero2;
