interface DotsProps {
  slides: {
    image: string;
    title: string;
    description: string;
    button: string;
  }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Dots = ({ slides, activeIndex, setActiveIndex }: DotsProps) => {
  return (
    <div className="absolute bottom-12 sm:bottom-14 w-full flex justify-center items-center gap-1 sm:gap-2 z-30">
      {slides.map((_, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`rounded-full transition-all border-2
            w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5
            ${activeIndex === idx
              ? "bg-[#02517A] border-white"
              : "bg-white border-white"
            }`}
        />
      ))}
    </div>
  );
};

export default Dots;
