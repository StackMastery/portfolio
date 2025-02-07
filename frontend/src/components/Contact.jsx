import { useState } from "react";
import Input from "./Input";
import { AnimatedSpan, Terminal, TypingAnimation } from "./magicui/terminal";
import Button from "./ui/Button";
import axios from "axios";
import axiosSecure from "@/hook/axiosSecure";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [msg, setmsg] = useState();
  const [isSending, setisSending] = useState(false);
  const [response, setResponse] = useState();

  const handelChange = (e, setState) => {
    setState(e.target.value);
  };

  const handelEmailSubmit = async () => {
    if (isSending) {
      return;
    }
    if (!name) {
      return;
    }
    if (!emailRegex.test(email)) {
      return;
    }

    setisSending(true);

    const emailData = {
      subject: "New Contact email from Portfolio",
      html: `
        <h1>From ${email}</h1>
        <br />
        <hr />
        <br />
        <h3>${name}</h3>
        <p>${msg || ""}</p>
      `,
    };

    const res = await axiosSecure.post("/contact/send", emailData);
    setisSending(false);
    setemail("");
    setname("");
    setmsg("");
    if (res.status !== 200) {
      setResponse({
        status: 400,
        msg: "✗ Something went wrong",
      });
      return;
    }
    setResponse({
      status: 200,
      msg: "✔ Succesfully message delivered",
    });
  };

  return (
    <>
      <section id="contact" className="flex justify-center  px-5">
        <div className="w-full max-w-[1240px] pb-20 flex flex-col items-center">
          <h2 className="text-2xl md:text-4xl max-[300px]:mb-0 mb-5 bg-gray-800/30 w-fit text-white/70 px-5 py-2 my-5 mt-2 border border-white/10 bg-clip-padding backdrop-filter backdrop-blur-3xl">
            <span className="bg-gradient-to-br text-transparent bg-clip-text from-sky-800 to-sky-400">
              &#123; <span className="text-white">Contact me</span> &#125;
            </span>
          </h2>
          <div className="flex justify-between gap-5 w-full md:flex-row flex-col pt-10">
            <div className="w-full md:w-6/12 flex justify-center">
              <form className="p-5 bg-gray-900/40 space-y-3 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30 border border-white/10 w-full">
                <Input
                  value={name}
                  onChange={(e) => handelChange(e, setname)}
                  placeholder={`_name`}
                />
                <Input
                  value={email}
                  type="email"
                  onChange={(e) => handelChange(e, setemail)}
                  placeholder={`_email`}
                />

                <textarea
                  value={msg}
                  onChange={(e) => handelChange(e, setmsg)}
                  rows={4}
                  className="px-3 py-2  bg-[#ffffff06] text-smz border-b w-full border-slate-800 pb-2"
                  placeholder={`_message`}
                />
                <div className="w-full flex justify-end">
                  <div className="-mt-10">
                    <Button
                      disabled={!name || isSending || !emailRegex.test(email)}
                      onClick={handelEmailSubmit}
                      btnClass={
                        !name || isSending || !emailRegex.test(email)
                          ? "opacity-50 hover:!scale-100"
                          : "opacity-100"
                      }
                      type="button"
                    >
                      Send message
                    </Button>
                  </div>
                </div>
                <div>
                  <p className="flex gap-5 text-sm -mt-5">
                    <a
                      href="https://github.com/StackMastery"
                      className=" text-sky-600"
                    >
                      Github{" "}
                    </a>{" "}
                    |
                    <a className=" text-sky-600" href="tel:+880 176 239 5985">
                      +880 176 239 5985
                    </a>
                  </p>
                </div>
              </form>
            </div>
            <div className="w-full md:w-6/12 flex justify-center">
              <ContactFormTerminal
                isSending={isSending}
                response={response}
                name={name}
                email={email}
                msg={msg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const ContactFormTerminal = ({ name, email, isSending, response }) => {
  return (
    <>
      <Terminal>
        <TypingAnimation>&gt; npm run contact</TypingAnimation>
        <AnimatedSpan delay={1000} className="text-green-500">
          <span>✔ Contact form is running</span>
        </AnimatedSpan>
        <TypingAnimation delay={1000} className="text-yellow-400">
          Please fill all informations in frontend
        </TypingAnimation>
        {!name ? (
          <AnimatedSpan delay={1000} className="text-red-500">
            <span>✗ Enter a valid name</span>
          </AnimatedSpan>
        ) : (
          <AnimatedSpan delay={1000} className="text-green-500">
            <span>✔ Name</span>
          </AnimatedSpan>
        )}
        {!emailRegex.test(email) ? (
          <AnimatedSpan delay={1000} className="text-red-500">
            <span>✗ Enter a valid email</span>
          </AnimatedSpan>
        ) : (
          <AnimatedSpan delay={1000} className="text-green-500">
            <span>✔ Email</span>
          </AnimatedSpan>
        )}
        {isSending && (
          <AnimatedSpan delay={300} className="text-yellow-500">
            <span className="flex">
              Sending <span className="animate-bounce flex">...</span>
            </span>
          </AnimatedSpan>
        )}
        {response && response.status === 200 && (
          <AnimatedSpan delay={500} className="text-green-500">
            <span>{response?.msg}</span>
          </AnimatedSpan>
        )}
        {response && response.status === 400 && (
          <AnimatedSpan delay={1000} className="text-red-500">
            <span>{response?.msg}</span>
          </AnimatedSpan>
        )}
      </Terminal>
    </>
  );
};
