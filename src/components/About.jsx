import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import scrollTrigger from "gsap/ScrollTrigger";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(scrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center", // Fixed spelling
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "75vw",
      height: "50vh",
      borderRadius: "20px", // Keep rounded corners
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm ">ReDMCA</h2>

        <AnimatedTitle
          title="Discover the world free from the <br />chains of paywalls."
          containerClass="mt-5 !text-[#DFDFF0] text-center"
        />

        <div className="about-subtext !text-[#DFDFF0]">
          <p>The rule of Pirates!</p>
          <p>Get access to Paid media for FREE!!!</p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/fitgirl.webp"
            alt="About"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
