interface SlideProps {
  slide: {
    image: string;
    title: string;
    description: string;
    button: string;
  };
}

const Slide = ({ slide }: SlideProps) => {
  return (
        <div
    className="min-w-full h-screen bg-cover bg-center relative flex items-center justify-center"
    style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center text-white px-4 py-3 max-w-3xl bg-gray-950/50 rounded-2xl mx-2">
        <h1 className="text-yellow-400 font-montserrat font-bold text-2xl sm:text-3xl md:text-3xl mb-2 leading-tight tracking-tight">
          {slide.title}
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-3 font-montserrat leading-relaxed drop-shadow-md">
          {slide.description}
        </p>
        <button className="border border-white text-white font-montserrat px-6 py-1 rounded-lg hover:bg-[#02517A] transition">
          {slide.button}
        </button>
      </div>
    </div>
  );
};

export default Slide;
