import React, { useState } from "react";

function Scoreboard({ dataList, extension, className }) {
    const list = Array.isArray(dataList) ? dataList : [];



    return (
        <div className={`flex flex-col p-2 md:mb-20 mb-10 md:ms-10 bg-linear-to-tr from-black to-gray-900 xl:w-1/6 md:w-1/3 w-full h-100 pb-2 rounded-xl shadow-blue-500 shadow-xl text-gray-300 border-2 border-blue-500 overflow-x-hidden ${className}`}>
            <h2 className="text-center text-2xl font-medium mb-3">Scoreboard</h2>
            {list.length === 0 ? (
                <p className="text-center">No results yet</p>
            ) : (
                <ul className="flex flex-col items-center text-center overflow-y-auto overflow-x-hidden scrollbar-thin">
                    {list.map((r, i) => (
                        <>
                            <hr className="border-blue-500/20 w-1/2" />
                            <li className="" key={i}> {r} {extension}</li>
                        </>

                    ))}
                </ul>
            )}
        </div>

    );



};

export default Scoreboard;
