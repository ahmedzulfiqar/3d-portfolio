import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Spline from "@splinetool/react-spline";
function HeroSection() {
  const TEXTS = ["Web ", "Front End ", "Full Stack ", "Mern Stack "];
  return (
    <div className="col-12 p-0 vh-100 mt-lg-0 mt-5 pt-lg-0 pt-5">
      <div className="container h-100">
        <div className="row m-0 h-100">
          <div className="col-lg-7 col-12 align-self-center order-lg-0 order-1">
            <div className="row p-0 m-0">
              <div className="align-self-center text-lg-start text-center  ">
                <div className="mb-3  text-light border-main bg-primarys w-min px-lg-2 px-1 mx-md-0 mx-auto rounded-2 py-2">
                  <TypeAnimation
                    className="fs-5"
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "I am a Web Developer",
                      1000, // wait 1s before replacing "Mice" with "Hamsters"
                      "I am a Front End Developer",
                      1000,
                      "I am a Back End Developer",
                      1000,
                      "I am a Full Stack Developer",
                      1000,
                      "I am a MERN Stack Developer",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: "2em", display: "inline-block" }}
                    repeat={Infinity}
                  />
                </div>
                <div className="display-1 fw-bolder text-light  mb-3  p-0 d ">
                  I Am Ahmed <span className="text-main m-0 p-0">Zulfiqar</span>
                </div>{" "}
                <p className="ds mb-3 text-light fw-lighter">
                  <span className="text-primarya fw-bolder">{"<h1>"}</span>
                  Crafting Engaging Web Experiences with React: Bridging Code
                  and Creativity for Intuitive Digital Solutions.{" "}
                  <span className="text-primarya fw-bolder">{"</h1>"}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-12   align-self-center h-75 order-lg-1 order-0  justify-content-start ">
            <Spline scene="https://prod.spline.design/U145PDeYoKtm6q2i/scene.splinecode" className=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
