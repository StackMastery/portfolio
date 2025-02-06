export default function Skills() {
  return (
    <>
      <section
        style={{ backgroundImage: `url('/herograds.svg')` }}
        className="flex justify-center bg-slate-900/50 bg-[auto_1800px] bg-no-repeat bg-top border-y border-slate-800 mt-10"
      >
        <div className="w-full overflow-hidden max-w-primary px-5 py-20 flex justify-center flex-col items-center">
          <div className="w-full max-[300px]:flex max-[300px]:items-center max-[300px]:flex-col">
            <h2 className="max-[300px]:text-2xl text-4xl max-[300px]:mb-0 mb-5 bg-gray-800/30 w-fit text-white/70 px-5 py-2 my-5 mt-2 border border-white/10 bg-clip-padding backdrop-filter backdrop-blur-3xl">
              <span className="bg-gradient-to-br text-transparent bg-clip-text from-sky-800 to-sky-400">
                &#123; <span className="text-white">My Skills</span> &#125;
              </span>
            </h2>
            <div className="w-full grid max-[300px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-8 gap-5 mt-10">
              {SkillsData &&
                SkillsData.map((skills, index) => (
                  <div
                    key={`skill-${index + 1}`}
                    className="h-28 py-16 gap-5 col-span-1 transition-all group cursor-pointer flex flex-col justify-center items-center  border border-white/10"
                  >
                    <img
                      width={skills.width || 50}
                      src={`/icons${skills.icon}`}
                      alt={skills.name}
                      className={`translate-y-5  z-20 group-hover:translate-y-2 transition-all`}
                    />
                    <img
                      width={skills.width || 50}
                      src={`/icons${skills.icon}`}
                      alt={skills.name}
                      className="absolute -translate-y-1 blur-md z-0"
                    />
                    <span className="opacity-0 text-white group-hover:opacity-100 transition-all">
                      {skills.name}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const SkillsData = [
  {
    icon: "/html.svg",
    name: "HTML",
  },
  {
    icon: "/css.svg",
    name: "CSS",
  },
  {
    icon: "/js.svg",
    name: "JavaScript",
  },
  {
    icon: "/tailwind.svg",
    name: "Tailwind",
    width: 60,
  },
  {
    icon: "/react.svg",
    name: "React JS",
    width: 60,
  },
  {
    icon: "/firebase.svg",
    name: "Firebase",
  },
  {
    icon: "/express.svg",
    name: "Express JS",
  },
  {
    icon: "/mongodb.svg",
    name: "MongoDB",
  },
  {
    icon: "/nodejs.svg",
    name: "Node JS",
  },
  {
    icon: "/nextjs.svg",
    name: "Next JS",
  },
  {
    icon: "/figma.svg",
    name: "Figma",
    width: 60,
  },
  {
    icon: "/frammer.svg",
    name: "Frammer",
    width: 60,
  },
  {
    icon: "/github.svg",
    name: "GitHub",
    width: 45,
  },
  {
    icon: "/vscode.svg",
    name: "VS Code",
  },
  {
    icon: "/git.svg",
    name: "Git Bash",
    width: 60,
  },
  {
    icon: "/vercel.svg",
    name: "Vercel",
  },
];
