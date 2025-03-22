import React, { useState, useEffect } from "react";
import Navber from "./Navber";

const Headar = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setHide(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full  z-10">
      <div
        className={` transition-all duration-500 ${
          hide ? " bg-[rgb(36,53,36)] text-white shadow-lg" : "bg-transparent"
        }`}
      >
        {/* bg-gray-900 */}
        <Navber />
      </div>
    </div>
  );
};

export default Headar;
