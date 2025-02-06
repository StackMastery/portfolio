import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "motion/react";

export default function About() {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://res.cloudinary.com/dogyg2j0h/image/upload/v1738845422/avatar_wgiipj.webp",
        { responseType: "blob" }
      );
      console.log(res);
      setImageData(res);
    };
    fetchData();
  }, []);

  return (
    <section className="w-full flex justify-center px-5 -mt-20 pb-20">
      <div className="w-full max-w-[1150px] border flex-col-reverse border-slate-800 bg-primary/50 flex md:flex-row">
        <PictureBox data={imageData} />
      </div>
    </section>
  );
}

const PictureBox = ({ data }) => {
  const size = data?.data?.size;

  return (
    <div className="w-full md:w-5/12 md:border-r border-slate-800">
      <div className="w-full border-b border-slate-800">
        <button className="px-5 py-2 border-r border-slate-800">Picture</button>
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
