import { Link } from "react-router-dom";
import React from "react";
import Slider from "./Slider";

const Hub = () => {

  return (
    <>
      <Slider />
      <div className="flex flex-col sm:items-center xl:flex-row mt-1 justify-center">

        <div className="xl:max-w-sm sm:w-3/4 rounded overflow-hidden bg-gray-900 m-5 shadow-xl/20 pb-2 shadow-cyan-500 pop-out-anim">
          <Link to='/reactionTime'>
            <img className="w-full" src="/images/img_icon1.png" alt="Reaction time" />
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Reaction time</div>
            </div>
          </Link>
        </div>

        <div className="xl:max-w-sm sm:w-3/4 rounded overflow-hidden bg-gray-900 m-5 shadow-xl/20 pb-2 shadow-cyan-500 pop-out-anim">
          <Link to='/numberMemory'>
            <img className="w-full" src="/images/img_icon2.png" alt="Reaction time" />
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Number Memory</div>
            </div>
          </Link>
        </div>


        <div className="xl:max-w-sm sm:w-3/4 rounded overflow-hidden bg-gray-900 m-5 shadow-xl/20 pb-2 shadow-cyan-500 pop-out-anim">
          <Link to='/wordsMemory'>
            <img className="w-full" src="/images/img_icon3.png" alt="Reaction time" />
            <div className="px-6 py-4">
              <div className="text-white font-bold text-xl mb-2">Words Memory</div>
            </div>
          </Link>
        </div>

      </div>
    </>

  );
};

export default Hub;