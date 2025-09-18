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
        backSpeed: 100,
        backDelay: 1000,
        strings: ["Front-End"],
      });
    }
  }, []);
  return (
    <div
      id="intro"
      className="flex flex-col bg-white text-center xl:flex-row xl:text-left xl:justify-center mt-16 mx-8 sm:mx-20 xl:mx-32"
    >
      {/* Left */}
      <div className="flex-1 overflow-hidden flex justify-center items-center">
        <div className="h-[320px] w-[300px] md:h-[420px] md:w-[400px] xl:h-[520px] xl:w-[500px] bg-primary rounded-full flex justify-center items-end overflow-hidden ">
          <img src={assets.avt} alt="avatar.png" className="h-full" />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 relative flex flex-col items-center justify-center md:items-start">
        <div className="flex flex-col justify-center w-full h-full px-0 md:pl-12">
          <h2 className="text-[30px] md:text-[35px]">Hi there, I'm</h2>
          <h1 className="text-[30px] md:text-[50px] font-bold my-2">
            Tran Dinh Hieu
          </h1>
          <h3 className="text-[20px] md:text-[30px]">
            A <span ref={textRef} className="text-primary font-bold" />{" "}
            Developer
          </h3>
          <h3 className="text-[20px] md:text-[30px]">
            It's my pleasure to collaborate with you.
          </h3>
        </div>

        <a
          href="#projects"
          className="hidden xl:block absolute bottom-2 left-1/2 -translate-x-1/2 md:left-[40%] md:translate-x-0"
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
