import { Link } from "react-router-dom";
import React from "react";

const Hub = () => {

  return (
    <>
    <div className="flex flex-row mt-1 justify-center">

        <div className="max-w-sm rounded overflow-hidden bg-gray-900 m-5 shadow-xl/20 pb-2 shadow-cyan-500 hover:shadow-xl/30">
          <Link to='/reactionTime'>
          <img className="w-full" src="/images/img_icon1.png" alt="Reaction time"/>
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2">Reaction time</div>
            <p className="text-neutral-500 font-semibold text-base">Test your reaction time!</p>
          </div>
          </Link>
        </div>

        <div className="max-w-sm rounded overflow-hidden bg-gray-900 m-5 shadow-xl/20 pb-2 shadow-cyan-500 hover:shadow-xl/30">
        <Link to='/numberMemory'>
          <img className="w-full" src="/images/img_icon2.png" alt="Reaction time"/>
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2">Number Memory</div>
            <p className="text-neutral-500 font-semibold text-base">Test your number memory!</p>
          </div>
          </Link>
        </div>

        
        <div className="max-w-sm rounded overflow-hidden bg-gray-900 m-5 shadow-xl/20 pb-2 shadow-cyan-500 hover:shadow-xl/30">
          <Link to='/wordsMemory'>
          <img className="w-full" src="/images/img_icon3.png" alt="Reaction time"/>
          <div className="px-6 py-4">
            <div className="text-white font-bold text-xl mb-2">Words Memory</div>
            <p className="text-neutral-500 font-semibold text-base">Test your number memory!</p>
          </div>
          </Link>
        </div>
        
      </div>
    </>
    
  );
};

export default Hub;