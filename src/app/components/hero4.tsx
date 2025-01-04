import Image from "next/image";

const Hero4 = () => {
  return (
    <section className="bg-pink-100 p-6 sm:p-8 md:p-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0">
        {/* Image Section */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <div className="flex gap-2 flex-wrap justify-center">
            <Image
              src="/pr1.png"
              alt="Hero 4 Image"
              width={180}
              height={180}
              className="rounded-2xl hover:scale-105"
            />
            <Image
              src="/pr2.png"
              alt="Hero 4 Image"
              width={150}
              height={150}
              className="rounded-2xl hover:scale-105"
            />
          </div>
          <div className="flex gap-4 flex-wrap justify-center mt-2">
            <Image
              src="/pr3.png"
              alt="Hero 4 Image"
              width={140}
              height={140}
              className="rounded-2xl hover:scale-105"
            />
            <Image
              src="/pr4.png"
              alt="Hero 4 Image"
              width={180}
              height={180}
              className="rounded-2xl hover:scale-105"
            />
          </div>
          <div className="flex gap-4 flex-wrap justify-center mt-2">
            <Image
              src="/pr5.jpg"
              alt="Hero 4 Image"
              width={180}
              height={180}
              className="rounded-2xl hover:scale-105"
            />
            <Image
              src="/pr6.png"
              alt="Hero 4 Image"
              width={180}
              height={180}
              className="rounded-2xl hover:scale-105"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-pink-500 font-bold mb-4 hover:scale-125 hover:text-pink-800">
            Quality Assurance
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-pink-700 font-bold hover:scale-125">
            We guarantee the highest quality products.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
