import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Slider() {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination, Autoplay],
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
                onHoverPause: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        swiperRef.current = swiper;

        return () => {
            if (swiper) swiper.destroy();
        };
    }, []);

    return (
        <div className="flex justify-center text-gray-900 mb-10 mt-10">
            <div className="swiper xl:w-1/2 sm:w-3/4 rounded-lg shadow-md backdrop-blur-lg border border-gray-900 border-2">

                <div className="swiper-wrapper">
                    <div className="swiper-slide relative">
                        <Link to="/reactionTime" className="block h-full w-full">
                            <img src="/images/img_icon1.png" alt="Reaction game" className="w-full h-auto" />
                            <div className="absolute pb-10 bottom-0 left-0 right-0 bg-gradient-to-t from-cyan-500/90 to-transparent p-4">
                                <h1 className="xl:text-3xl sm:text-2xl mb-2 font-bold">Reaction time</h1>
                                <p className="xl:text-xl sm:text-lg hidden xs:block">Test your reaction time by clicking on the screen as fast as possible when the box changes color.</p>
                            </div>
                        </Link>
                    </div>

                    <div className="swiper-slide relative">
                        <Link to="/numberMemory" className="block h-full w-full">
                            <img src="/images/img_icon2.png" alt="Number memory game" className="w-full h-auto" />
                            <div className="absolute bottom-0 pb-10 left-0 right-0 bg-gradient-to-t from-cyan-500/90 to-transparent p-4">
                                <h1 className="xl:text-3xl sm:text-2xl mb-2 font-bold">Number memory</h1>
                                <p className="xl:text-xl sm:text-lg hidden xs:block">Test your number memory by memorizing an increasing sequence of numbers.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="swiper-slide relative">
                        <Link to="/wordsMemory" className="block h-full w-full">
                            <img src="/images/img_icon3.png" alt="Words memory game" className="w-full h-auto" />
                            <div className="absolute bottom-0 pb-10 left-0 right-0 bg-gradient-to-t from-cyan-500/90 to-transparent p-4">
                                <h1 className="xl:text-3xl sm:text-2xl mb-2 font-bold">Words memory</h1>
                                <p className="xl:text-xl sm:text-lg hidden xs:block">Test your words memory by memorizing as much words as possible.</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div >
    );
}
