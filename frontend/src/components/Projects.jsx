import { useEffect, useState } from "react";
import { MagicCard } from "./magic-card";
import axios from "axios";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa6";
import { GoLink } from "react-icons/go";
import { AnimatePresence, motion } from "motion/react";

export default function Projects() {
  const [tabs, settabs] = useState("latest");
  const [projects, setprojects] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/projects.json");
      console.log(res);
      setprojects(res.data);
      setStatus(res.status);
    };
    fetchData();
  }, []);

  return (
    <>
      <section
        id="projects"
        className="m-0 p-0 flex justify-center w-full pb-20"
      >
        <MagicCard
          className={`flex justify-center w-full`}
          sectionClass={`flex justify-center px-5 border-y border-slate-800`}
          gradientColor={["#43d9ad"]}
          bgClassName={`bg-slate-800/10`}
          gradientOpacity={"0.1"}
        >
          <div className="flex w-full items-center flex-col max-w-primary border-x border-slate-800">
            <div className="w-full px-5 py-2 flex justify-center">
              <div className="p-1 w-fit text-sm text-sky-600 text-center border rounded-md border-[#ffffff02] bg-white/5 px-5">
                &#123; <span className="text-white/60">Latest Projects</span>{" "}
                &#125;
              </div>
            </div>
            <div className="w-full flex items-center text-sm justify-between border-y border-slate-800">
              <button
                onClick={() => {
                  settabs("latest");
                }}
                className={`px-5 max-[350px]:w-full py-2 border-r border-slate-800 ${
                  tabs === "latest"
                    ? "border-b-sky-600"
                    : "border-b-transparent"
                } border-b`}
              >
                _latestProjects
              </button>
              <div className="pr-5">
                <span className="text-green-600 bg-green-300/10 text-xs px-2 rounded-full">
                  {status || ""}
                </span>
              </div>
            </div>
            <div className="w-full p-5 gap-5 min-h-[500px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              <AnimatePresence>
                {!projects &&
                  Array.from({ length: 3 }).map((_, index) => (
                    <motion.div
                      exit={{ opacity: 0 }}
                      key={`skeleton-${index}`}
                      className="p-5 border flex flex-col justify-between col-span-1 border-slate-800"
                    >
                      <div className="overflow-hidden bg-slate-700 mb-4 border-sky-600 border aspect-[3/2] animate-pulse"></div>
                      <div className="h-6 bg-slate-700 w-3/4 animate-pulse mb-2"></div>
                      <div className="h-4 bg-slate-700 w-full animate-pulse mb-1"></div>
                      <div className="h-4 bg-slate-700 w-5/6 animate-pulse mb-4"></div>
                      <div className="w-full flex gap-3 pt-5">
                        <div className="h-10 w-10 bg-slate-700 rounded-md animate-pulse"></div>
                        <div className="h-10 w-10 bg-slate-700 rounded-md animate-pulse"></div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
              <AnimatePresence>
                {projects &&
                  projects.slice(0, 3).map((project, index) => (
                    <motion.div
                      initial={{ opacity: 0, display: "hidden" }}
                      animate={{ opacity: 1, display: "flex" }}
                      transition={{
                        delay: 0.5,
                      }}
                      key={`project-${index + 1}`}
                      className="p-5 border flex flex-col justify-between col-span-1 border-slate-800"
                    >
                      <AspectRatio
                        className="overflow-hidden bg-slate-700 mb-4 border-sky-600 border"
                        ratio={3 / 2}
                      >
                        <Link target="_blank" to={project.liveSite}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="hover:scale-110 transition-all object-cover h-full w-full"
                          />
                        </Link>
                      </AspectRatio>
                      <div>
                        <Link
                          target="_blank"
                          className="text-xl hover:text-sky-600 transition-all"
                          to={project.liveSite}
                        >
                          {project.title}
                        </Link>
                        <p className="pt-2 text-sm font-thin">
                          {project.description.slice(0, 120)}
                        </p>
                        <div className="w-full flex gap-3 pt-5">
                          <Link
                            target="_blank"
                            to={project.github}
                            className="bg-white/5 border border-white/10 p-2 rounded-md"
                          >
                            <FaGithub size={20} />
                          </Link>
                          <Link
                            target="_blank"
                            to={project.liveSite}
                            className="bg-white/5 border border-white/10 p-2 rounded-md"
                          >
                            <GoLink size={20} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </MagicCard>
      </section>
    </>
  );
}
