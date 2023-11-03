import React from "react";
import HeroSection from "../Sections/HeroSection";
import Navbar from "../desginblocks/Navbar";

function Home() {
  return (
    <div className="row m-0">
      <div className="col-12 p-0">
        <div className="row m-0">
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
}

export default Home;
