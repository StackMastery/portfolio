import Logo from "./ui/Logo";
import Button from "./ui/Button";
import { Turn as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <style>
          {`
            @media (max-width: 768px){
              section{
                filter: blur(10px)
              }
            }
          `}
        </style>
      )}
      <header className="flex justify-center fixed z-[999999999999] bg-[#0b11206d] backdrop-blur-2xl border-slate-800/50 border w-full">
        <div className="max-w-primary items-center w-full inline-flex justify-between px-5 py-3">
          <Logo width={100} />
          <nav
            className={`hidden fixed z-[99999999999] w-full left-0 px-0 p-5 translate-y-32 md:block  md:w-fit  md:translate-y-0 md:p-0 md:static ${
              isMenuOpen && "!block"
            }`}
          >
            <div>
              <ul className="p-5 bg-primary/80 backdrop-blur-2xl  z-[9999999] border border-slate-800 rounded-t-none border-t-0 flex-col flex md:flex-row gap-5 text-xs font-light lowercase md:bg-transparent md:border-0 md:backdrop-blur-none md:p-0">
                {NavData &&
                  NavData.map((li, index) => (
                    <a
                      href={li.path}
                      className={`text-white/80 group hover:text-sky-600 transition-all`}
                      key={`nav-${index}`}
                    >
                      <span className="text-sky-600 group-hover:text-white">
                        _
                      </span>
                      {li.pathName}
                    </a>
                  ))}
              </ul>
            </div>
          </nav>
          <div className="flex items-center gap-5">
            <button className="md:hidden bg-slate-800/50 border-[1px] border-slate-800 w-8 h-8 rounded-md">
              <div
                className={`-translate-y-[8px] -translate-x-2 ${
                  isMenuOpen && "text-white"
                }`}
              >
                <Hamburger
                  size={18}
                  onToggle={(toggled) => {
                    if (toggled) {
                      setisMenuOpen(true);
                    } else {
                      setisMenuOpen(false);
                    }
                  }}
                />
              </div>
            </button>
            <Button>Resume</Button>
          </div>
        </div>
      </header>
    </>
  );
}

const NavData = [
  {
    path: "#about",
    pathName: "About",
  },
  {
    path: "#skills",
    pathName: "Skills",
  },
  {
    path: "#expriences",
    pathName: "Expriences",
  },
  {
    path: "#projects",
    pathName: "Project",
  },
  {
    path: "#contact",
    pathName: "Contact",
  },
];
