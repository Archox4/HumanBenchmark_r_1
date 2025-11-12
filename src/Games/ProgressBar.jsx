import React, { useState, useEffect } from "react";

const ProgressBar = ({duration}) => {

const [progress, setProgress] = useState(100); // 100 → 0

  useEffect(() => {
    let start = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const newProgress = Math.max(100 - (elapsed / duration) * 100, 0);
      setProgress(newProgress);

      if (elapsed >= duration) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [duration]);

  const ratio = (100 - progress) / 100;
  const color = `rgb(${Math.round(255 * ratio)}, 0, ${Math.round(
    255 * (1 - ratio)
  )})`;

  return (
    <div className="relative w-1/2 h-4 bg-gray-700 rounded-full overflow-hidden mt-4">

      <div
        className="absolute left-1/2 top-0 h-full transition-all ease-linear origin-right"
        style={{
          transform: `translateX(-100%)`,
          width: `${progress / 2}%`,
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}/>

      <div
        className="absolute right-1/2 top-0 h-full transition-all ease-linear origin-left"
        style={{
          transform: `translateX(100%)`, // anchor right bar from middle
          width: `${progress / 2}%`,
          backgroundColor: color,
          boxShadow: `0 0 10px ${color}`,
        }}/>
    </div>
  );
}

export default ProgressBar;