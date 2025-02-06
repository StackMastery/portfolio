import { useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { FcCursor } from "react-icons/fc";

export default function HeroPreview() {
  const [currentTab, setcurrentTab] = useState(1);
  const [isCursor, setisCursor] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      if (currentTab === 1) {
        setcurrentTab(2);
      } else {
        setcurrentTab(1);
      }
      setisCursor(false);
    }, 5000);
  }, [currentTab]);

  return (
    <>
      <div className="w-full z-50">
        <motion.div className="w-full overflow-x-auto pt-0 p-5 z-30  rounded-t-none bg-gray-900/40 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white/10 [&::-webkit-scrollbar]:w-0">
          <div className="w-full pb-5 -ml-5 flex !overflow-y-hidden  border-b-0 bg-clip-padding backdrop-filter  bg-opacity-30  text-sm  [&::-webkit-scrollbar]:w-0 font-second">
            <button
              onClick={() => {
                setcurrentTab(1);
              }}
              className={`px-5 py-2 flex items-center gap-2 border-l-0 font-thin text-white/80 border border-t-0 border-white/10 ${
                currentTab === 1 && "!bg-gray-800/30 border-b border-b-sky-600"
              }`}
            >
              <FaReact color="#58C4DC" /> Me.jsx
            </button>
            <button
              onClick={() => {
                setcurrentTab(2);
                setisCursor(false);
              }}
              className={`px-5 py-2 flex items-center gap-2 font-thin border-l-0 text-white/80 border border-t-0 border-white/10 ${
                currentTab === 2 && "!bg-gray-800/30 border-b border-b-sky-600"
              }`}
            >
              <img src="/favicon.svg" width={20} alt="Favicon" /> Profile
            </button>
          </div>
          {currentTab === 1 ? <Code /> : <Profile />}
          {isCursor && (
            <div className="w-full  justify-end hidden sm:flex">
              <motion.button
                transition={{
                  delay: 2,
                  duration: 2.5,
                }}
                animate={{ translateY: -330, translateX: -280, opacity: 1 }}
              >
                <FcCursor
                  size={30}
                  className="absolute z-[999999999999999] -translate-y-28 -translate-x-20"
                />
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>
      <img
        src="/herograds.svg"
        alt="Hero grads"
        width={800}
        className="absolute md:-translate-y-40"
      />
    </>
  );
}

const Code = () => (
  <motion.pre
    initial={{ filter: "blur(30px)" }}
    animate={{ filter: "blur(0px)" }}
    transition={{
      duration: 0.5,
    }}
    className="-ml-5 text-sm font-second font-thin"
    tabIndex={0}
  >
    <code>
      <span className="line" />
      {"\n"}
      <span className="line">
        <span style={{ color: "#D73A49" }}>{"    "}const</span>
        <span style={{ color: "#d987ff" }}> Me</span>
        <span style={{ color: "#D73A49" }}> =</span>
        <span style={{ color: "#dfe0e1" }}> () </span>
        <span style={{ color: "#D73A49" }}>=&gt;</span>
        <span style={{ color: "#dfe0e1" }}> {"{"}</span>
      </span>
      {"\n"}
      <span className="line" />
      {"\n"}
      <span className="line">
        <span style={{ color: "#37ac8f" }}>{"        "}&#47;&#47; My Data</span>
      </span>
      {"\n"}
      <span className="line">
        <span style={{ color: "#D73A49" }}>{"        "}const</span>
        <span style={{ color: "#ffde03" }}> profileData</span>
        <span style={{ color: "#D73A49" }}> =</span>
        <span style={{ color: "#dfe0e1" }}> {"{"}</span>
      </span>
      {"\n"}
      <span className="line ml-5">
        <span style={{ color: "#dfe0e1" }}>{"        "}name: </span>
        <span style={{ color: " #0284c7" }}>&quot;Md Junaid Islam&quot;</span>
        <span style={{ color: "#dfe0e1" }}>,</span>
      </span>
      {"\n"}
      <span className="line  ml-5">
        <span style={{ color: "#dfe0e1" }}>{"        "}age: </span>
        <span style={{ color: "#D73A49" }}>new</span>
        <span style={{ color: "#d987ff" }}> Date</span>
        <span style={{ color: "#dfe0e1" }}>().</span>
        <span style={{ color: "#d987ff" }}>getFullYear</span>
        <span style={{ color: "#dfe0e1" }}>() </span>
        <span style={{ color: "#D73A49" }}>-</span>
        <span style={{ color: "#ffde03" }}> 2010</span>
        <span style={{ color: "#dfe0e1" }}>,</span>
      </span>
      {"\n"}
      <span className="line  ml-5">
        <span style={{ color: "#dfe0e1" }}>{"        "}avatar: </span>
        <span style={{ color: " #0284c7" }}>&quot;/avatar.png&quot;</span>
        <span style={{ color: "#dfe0e1" }}>,</span>
      </span>
      {"\n"}
      <span className="line  ml-5">
        <span style={{ color: "#dfe0e1" }}>
          {"        "}contactInfo: {"{"}
        </span>
      </span>
      {"\n"}
      <span className="line ">
        <span style={{ color: "#dfe0e1" }}>{"            "}email: </span>
        <span style={{ color: " #0284c7" }}>
          &quot;labib.developers@gmail.com&quot;
        </span>
        <span style={{ color: "#dfe0e1" }}>,</span>
      </span>
      {"\n"}
      <span className="line">
        <span style={{ color: "#dfe0e1" }}>{"            "}phone: </span>
        <span style={{ color: " #0284c7" }}>&quot;+880 176 239 5985&quot;</span>
        <span style={{ color: "#dfe0e1" }}>,</span>
      </span>
      {"\n"}
      <span className="line  ml-5">
        <span style={{ color: "#dfe0e1" }}>
          {"        "}
          {"}"}
        </span>
      </span>
      {"\n"}
      <span className="line">
        <span style={{ color: "#dfe0e1" }}>
          {"        "}
          {"}"};
        </span>
      </span>
      {"\n"}
      <span className="line" />
      {"\n"}
      <span className="line">
        <span style={{ color: "#D73A49" }}>{"        "}return</span>
        <span style={{ color: "#dfe0e1" }}> (</span>
      </span>
      {"\n"}
      <span className="line">
        <span style={{ color: "#dfe0e1" }}>{"            "}&lt;</span>
        <span style={{ color: "#ffde03" }}>Profile</span>
        <span style={{ color: "#d987ff" }}> data</span>
        <span style={{ color: "#D73A49" }}>=</span>
        <span style={{ color: "#dfe0e1" }}>
          {"{"}profileData{"}"}/&gt;
        </span>
      </span>
      {"\n"}
      <span className="line">
        <span style={{ color: "#dfe0e1" }}>{"        "})</span>
      </span>
      {"\n"}
      <span className="line">
        <span style={{ color: "#dfe0e1" }}>
          {"    "}
          {"}"}
        </span>
      </span>
      {"\n"}
      <span className="line" />
      {"\n"}
      <span className="line" />
    </code>
  </motion.pre>
);

const Profile = () => (
  <motion.div
    initial={{ filter: "blur(30px)" }}
    animate={{ filter: "blur(0px)" }}
    transition={{
      duration: 0.5,
    }}
    className="w-full"
  >
    <br />
    <div className="w-full flex justify-between items-center">
      <div className="flex gap-5 max-[350px]:flex-wrap">
        <div
          style={{
            backgroundImage: `url('https://res.cloudinary.com/dogyg2j0h/image/upload/v1738794141/avatar_wdxew0.png')`,
          }}
          className="object-cover w-[80px] h-[80px] bg-cover rounded-full"
        />
        <div>
          <h2 className="text-xl md:text-2xl text-white font-light">
            MD Junaid Islam
          </h2>
          <p className="text-sm">JR. Frontend Web Developer</p>
          <p className="">+880 173 239 5985</p>
        </div>
      </div>
    </div>
    <br />
    <span className="h-[1px] w-full flex bg-white/10" />
    <br />
    <p className="font-thin text-sm text-slate-400">
      I’m Md Junaid Islam, a junior frontend developer in the MERN stack,
      focused on building responsive web applications.
    </p>
    <br />
    <span className="h-[1px] w-full flex bg-white/10" />
    <br />
    <ul className="list-disc ml-5 sm:ml-10 text-xs sm:text-sm">
      <li>_age - {new Date().getFullYear() - 2010}</li>
      <li>_email - labib.developers@gmail.com</li>
      <li>_phone - +880 176 239 5985</li>
    </ul>
    <br />
    <span className="h-[1px] w-full flex bg-white/10" />
    <br />
    <div className="flex gap-2 flex-wrap">
      {Skills &&
        Skills.map((skill, index) => (
          <button
            key={`skill-${index + 1}`}
            className="border text-xs px-4  sm:text-sm bg-white/5 text-white/60 border-white/10 transition-all"
          >
            {skill}
          </button>
        ))}
    </div>
  </motion.div>
);

const Skills = [
  "HTMl",
  "CSS",
  "JS",
  "Tailwind",
  "React",
  "Firebase",
  "Express",
  "Mongoose",
  "MongoDB",
  "Node JS",
  "Next JS",
];
