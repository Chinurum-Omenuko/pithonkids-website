import React from 'react';
import MyCarousel from './Carousel';
import Carousel from './Carousel';



const ScheduleComponent = () => {
  return (
      <div className="absolute md:w-1/2 bg-[#ffffff] text-center p-6 rounded-lg max-w-md w-3/4 m-8">
        <p className="text-gray-700 font-semibold uppercase text-sm">
          Pithon Kids
        </p>
        <h2 className="text-blue-600 font-bold text-xl mb-4">The STEM classes for kids!</h2>

        <h3 className="text-blue-600 font-extrabold text-2xl leading-snug mb-6">
          Book Your Child’s<br />Free Assessment
        </h3>

        <a href="#register">
          <button className="bg-[#e8e007] text-white font-bold text-lg px-6 py-3 rounded-full shadow-md mb-4 hover:bg-[#007acc] transition">
            Schedule Today!
          </button>
        </a>

        <p className="text-gray-700 mb-4">
          or call <a href="tel:6474099936" className="font-bold underline underline-offset-2"> +1 (647) 409 9936 </a>
        </p>

        <div className="text-center text-gray-700 space-y-2 text-sm">
          <p className="flex items-center gap-2">

          </p>
          <p className="flex items-center gap-2">

          </p>
          <p>

          </p>
        </div>
      </div>
  )
}


const Landing = () => {
  return (
    <section className="relative p-0 h-screen w-screen overflow-hidden">
      {/* Full-screen Carousel Background */}
      <div className="w-full h-full">
        <Carousel />
      </div>

      {/* Gradient overlay - fades from transparent (left) to black (right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/70 to-black/90 hidden md:block" />

      {/* Absolute positioned Schedule Component on right side */}
      <div className="absolute right-0 top-0 h-full w-full md:w-[700px] transition-all duration-300 flex items-center justify-center p-4">
        <ScheduleComponent />
      </div>
    </section>
  );
};
export default Landing;