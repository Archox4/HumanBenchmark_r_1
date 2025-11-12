import React from "react";

const NotFound = () => {
  return (
    <>
        <div className="flex flex-col justify-center mt-5">
            <h1 className="text-cyan-500 font-bold text-4xl text-center">Looks like you found nothing!</h1>
            <h4 className="text-red-500 text-center font-semibold mt-4">Page not found 404</h4>
        </div>
    </>
  );
};

export default NotFound;
