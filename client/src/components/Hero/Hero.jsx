import React from "react";
import "./Hero.scss";
import { HERO } from "./HeroData";

const Hero = () => {

  return (
    <div className="Hero-Container">
      {HERO.map((data, index) => (
        <div
          key={index}
          className="Hero hero min-h-screen"
          style={{ backgroundImage: `url(${data.img})` }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-white">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{data.title}</h1>
              <p className="mb-5">{data.subtitle}</p>
              <button className="btn btn-primary">{data.btnText}</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
