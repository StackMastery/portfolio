export default function HeroDetails() {
  return (
    <>
      <p className="text-white font-thin">Hello, I&#39;m</p>
      <h2 className="text-3xl sm:text-5xl text-white font-light">
        Md Junaid Islam
      </h2>
      <p className="text-blue-600 text-sm sm:text-xl font-light">
        &gt; JR. Front-end developer
      </p>
      <br />
      <p className="text-1 text-sm font-thin">&#47;&#47; my github account</p>
      <p className="font-second text-white text-xs sm:text-base">
        <span className="text-blue-600">const</span>{" "}
        <span className="text-[#43D9AD]">githubLink</span> ={" "}
        <a
          href="https://github.com/StackMastery"
          target="_blank"
          className="underline text-[#E99287] font-thin"
        >
          &quot;https://github.com/stackmastery&quot;
        </a>
      </p>
    </>
  );
}
