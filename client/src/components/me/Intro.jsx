import { useEffect, useRef } from "react";
import { init } from "ityped";
import { assets } from "../../assets/assets";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      textRef.current.innerHTML = "";
      init(textRef.current, {
        showCursor: false,
        backSpeed: 80,
        backDelay: 1200,
        strings: ["Front-End", "Back-End"],
      });
    }
  }, []);
  return (
    <div
      id="intro"
      className="flex flex-col bg-white text-center xl:flex-row xl:text-left xl:justify-center my-10 mx-8 sm:mx-20 xl:mx-32"
    >
      {/* Left */}
      <div className="flex-1 overflow-hidden flex justify-center items-center">
        <div className="h-[420px] w-[400px] xl:h-[620px] xl:w-[600px] bg-primary rounded-full flex justify-center items-end overflow-hidden ">
          <img src={assets.avt} alt="avatar.png" className="h-full" />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 relative flex flex-col items-center justify-center md:items-start">
        <div className="flex flex-col justify-center w-full h-full px-0 md:pl-12">
          <h2 className="text-[30px] md:text-[35px]">Hi there, I'm</h2>
          <h1 className="text-[30px] md:text-[50px] font-bold my-2">
            Tran Dinh Hieu (Wilson Tran)
          </h1>
          <h3 className="text-[20px] md:text-[30px]">
            A <span ref={textRef} className="text-primary" /> Software Developer
          </h3>
        </div>

        <a
          href="#projects"
          className="absolute bottom-2 left-1/2 -translate-x-1/2 md:left-[40%] md:translate-x-0"
        >
          <img
            src={assets.down}
            alt="down.img"
            className="w-[30px] animate-pulse"
          />
        </a>
      </div>
    </div>
  );
}
