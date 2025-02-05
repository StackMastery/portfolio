import HeroDetails from "./HeroDetails";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/herobg.svg')`,
      }}
      className="flex justify-center"
    >
      <div className="max-w-[1100px] px-5 py-80 md:py-60 justify-between w-full  flex flex-col md:flex-row gap-10">
        <div className="w-full font-second space-y-3 md:w-6/12">
          <HeroDetails />
        </div>
        <div className="w-full md:w-6/12 flex flex-col items-center">
          {/* <HeroDetails /> */}
        </div>
      </div>
    </section>
  );
}
