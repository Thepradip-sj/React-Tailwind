import React from "react";

const Hero = () => {
  return (
    <>
    <div className="h-[600px] w-screen flex justify-evenly items-center bg-slate-600">
      <div className="h-[200px] w-[800px] text-white">
        <h1 className="text-6xl font-bold px-2 py-3">Welcome to the landing page</h1>
        <p className="text-lg mt-2 px-2 py-3">This is the hero section</p>
        <button className="bg-blue-700 h-[40px] w-[80px] text-white rounded-lg">Sign up</button>
      </div>
      <div className="h-[200px] w-[400px] bg-gray-500 overflow-hidden flex items-center justify-center">
    <img
      src="image.jpg"
      alt="error image"
      className="w-full h-auto "
    />
  </div>
      </div>

    </>
  )
}

export default Hero;
