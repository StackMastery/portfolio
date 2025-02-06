import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";
import Button from "./ui/Button";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function About() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://res.cloudinary.com/dogyg2j0h/image/upload/v1738845422/avatar_wgiipj.webp",
        { responseType: "blob" }
      );
      setImageData(res);
    };
    fetchData();
  }, []);

  return (
    <section
      id="about"
      className="w-full flex justify-center px-5 -mt-20 pb-20"
    >
      <div className="w-full max-w-[1150px] border flex-col-reverse border-slate-800 bg-primary/50 flex md:flex-row">
        <PictureBox data={imageData} />
        <AboutDetails />
      </div>
    </section>
  );
}

const PictureBox = ({ data }) => {
  const size = data?.data?.size;

  return (
    <div className="w-full md:w-5/12 border-t md:border-t-0 md:border-r border-slate-800">
      <div className="w-full border-b border-slate-800">
        <button className="px-5 py-2 border-r border-slate-800">
          _picture
        </button>
      </div>
      <div className="w-full flex flex-col">
        <div className="w-full border-b border-slate-800 flex">
          <div className="w-full flex items-center py-1 justify-between px-5">
            {data ? (
              <>
                <span className="text-xs text-green-400">
                  {data?.status}
                  {data?.status === 200 && " OK"}
                </span>
                <span className="text-xs">{size} Bytes</span>
              </>
            ) : (
              <span className="bg-slate-800/50 px-5 py-1 animate-pulse" />
            )}
          </div>
        </div>
        <div className="w-full p-5">
          {!data ? (
            <>
              <div className="w-full h-[450px] bg-slate-800/50 animate-pulse"></div>
            </>
          ) : (
            <motion.img
              initial={{ filter: "blur(5px)" }}
              animate={{ filter: "blur(0px)" }}
              className="w-full h-[450px] object-cover"
              src={URL.createObjectURL(data.data)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const AboutDetails = () => {
  return (
    <>
      <div className="w-full md:w-7/12 ">
        <div className="w-full border-b border-slate-800">
          <button className="px-5 py-2 border-r border-slate-800">
            _aboutMe
          </button>
        </div>
        <div className="w-full">
          <div className="w-full border-b py-3 border-slate-800 flex" />
          <div className="p-5">
            <h2 className="text-3xl mb-5 bg-gray-800/30 w-fit text-white/70 px-5 py-2 my-5 mt-2 border border-white/10 bg-clip-padding backdrop-filter backdrop-blur-3xl">
              MD Juanid Islam
            </h2>
            <p className="font-second font-thin">
              I am a junior frontend web developer specializing in the MERN
              stack (MongoDB, Express.js, React, Node.js). I focus on creating
              responsive, user-friendly web applications that provide
              exceptional experiences. I enjoy collaborating on innovative
              projects and am dedicated to continuous learning to stay updated
              with the latest trends in software development. My goal is to
              leverage my skills to create impactful applications that enhance
              user satisfaction.
            </p>
            <span className="w-full h-[1px] bg-slate-800 flex my-5" />
            <div className="flex gap-5 flex-wrap">
              {SocialData &&
                SocialData.map((social, index) => (
                  <a
                    target="_blank"
                    key={index}
                    className="p-2 bg-white/5 border border-white/10 rounded-md hover:bg-slate-900 transition-all"
                    href={social.path}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
            </div>
            <span className="w-full h-[1px] bg-slate-800 sm:flex my-5" />
            <div className="hidden sm:flex w-full gap-5">
              <Button className={`py-2`}>Download Resume</Button>
              <button className="px-5 py-2 bg-white/5 border border-white/10 text-white/70 font-thin rounded-md">
                View Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const SocialData = [
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/stackmastery",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Stackmastery",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://api.whatsapp.com/send?phone=8801762395985&text=Hello%20Juanid%20",
  },
];
