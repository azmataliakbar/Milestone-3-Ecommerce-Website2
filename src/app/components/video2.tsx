const Video2 = () => {
  return (
    <section className="bg-pink-200 px-4 py-8 md:px-8">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl text-pink-400 font-bold mb-4 hover:scale-110 lg:hover:scale-125 transition-transform duration-200">
        Pretty Boutique & Store
        </h1>
        
        {/* Subtitle */}
        <p className="text-base sm:text-lg font-bold text-pink-700 mb-4 hover:scale-125 lg:hover:scale-125 transition-transform duration-200">
          Watch Video Clip
        </p>
        
        {/* Video Embed */}
        <div className="flex justify-center items-center">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/0IC6wqXjJ9s?si=CbgM92-cxeH3Lp85"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full max-w-3xl aspect-video rounded-2xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video2;
