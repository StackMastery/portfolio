import { SocialData } from "./About";

export default function Footer() {
  return (
    <>
      <footer className="border-t border-slate-800 flex justify-center px-5">
        <div className="w-full max-w-primary flex justify-between items-center py-3">
          <div className="flex gap-5 flex-wrap">
            {SocialData &&
              SocialData.map((social, index) => (
                <a
                  target="_blank"
                  key={index}
                  className="p-1 bg-white/5 border border-white/10 rounded-md hover:bg-slate-900 transition-all"
                  href={social.path}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
          </div>
          <p>Copyright &copy; {new Date().getFullYear()}</p>
          <a href="https://github.com/Stackmastery" className="underline">
            @stackmastery
          </a>
        </div>
      </footer>
    </>
  );
}
