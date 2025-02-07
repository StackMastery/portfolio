import { MagicCard } from "./magic-card";

export default function Exprience() {
  return (
    <>
      <section
        id="expriences"
        style={{ backgroundImage: `url('/herobg.svg')` }}
        className="flex justify-center"
      >
        <div className="w-full max-w-primary px-5 py-20">
          <div className="w-full flex items-center flex-col">
            <h2 className=" text-2xl md:text-4xl max-[300px]:mb-0 mb-5 bg-gray-800/30 w-fit text-white/70 px-5 py-2 my-5 mt-2 border border-white/10 bg-clip-padding backdrop-filter backdrop-blur-3xl">
              <span className="bg-gradient-to-br text-transparent bg-clip-text from-sky-800 to-sky-400">
                &#123; <span className="text-white">My Work Expriences</span>{" "}
                &#125;
              </span>
            </h2>
          </div>
          <div className="w-full px-5 py-10 gap-5 grid grid-cols-1 md:grid-cols-2">
            {ExpriencesData &&
              ExpriencesData.map((e, index) => (
                <MagicCard
                  key={`ex-${index + 1}`}
                  gradientColor={["#ffff", "#0284c7", "#075985"]}
                >
                  <div className="bg-primary p-5 border h-full border-slate-800 w-full">
                    <div className="flex gap-5 items-center w-full ">
                      <div className="w-fit">
                        <img
                          width={40}
                          height={40}
                          src={e.icon}
                          alt=""
                          className="bg-white/5 p-2 border border-white/10"
                        />
                      </div>
                      <div>
                        <h3 className="text-white/60">{e.title}</h3>
                        <p className="text-xs">
                          <a href={e.company.link} className="text-sky-600">
                            {e.company.name}
                          </a>{" "}
                          - {e.jobType}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs pt-5">{e.des}</p>
                  </div>
                </MagicCard>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

const ExpriencesData = [
  {
    icon: "https://res.cloudinary.com/dogyg2j0h/image/upload/v1738903565/sherpur_zjwk4j.webp",
    title: "Web Management",
    des: "Sherpur Agro is an agricultural platform. I became the web manager on June 13, 2023, focusing on enhancing our online presence.",
    company: {
      name: "Sherpur Agro",
      link: "https://www.facebook.com/sherpuragrobd",
    },
    jobType: "Part Time",
  },
  {
    icon: "https://res.cloudinary.com/dogyg2j0h/image/upload/v1738905613/creatiqe_ak6uok.webp",
    title: "Wordpress Developer",
    des: "Creatiqe is a dynamic digital agency specializing in online solutions. I started my position here on August 4, 2024, focusing on enhancing our digital presence.",
    company: {
      name: "Creatiqe",
      link: "https://creatiqe.com",
    },
    jobType: "Part Time",
  },
];
