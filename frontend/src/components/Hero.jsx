import HeroDetails from "./HeroDetails";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/herobg.svg')`,
      }}
      className="w-full flex justify-center"
    >
      <div className="max-w-[1200px] px-5 py-60 items-center md:py-60 justify-between w-full  flex flex-col md:flex-row gap-10">
        <div className="w-full font-second space-y-3 md:w-6/12">
          <HeroDetails />
        </div>
        <div className="w-full md:w-6/12 flex flex-col items-center">
          <HeroPreview />
        </div>
      </div>
    </section>
  );
}
