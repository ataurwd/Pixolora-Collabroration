import React, { useState } from "react";
import { motion } from "framer-motion";

const SliderMarque = ({ youtubeURL }) => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <>
            {/* CSS */}
            <style>
                {`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .animate-marquee {
                    animation: marquee 18s linear infinite;
                }

                .animate-marquee:hover {
                    animation-play-state: paused;
                }

                .marquee-content {
                    display: inline-flex;
                    align-items: center;
                }
                `}
            </style>

            {/* MARQUEE SECTION */}
            <motion.section
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                className="relative overflow-hidden"
            >
                <div className="overflow-hidden w-full bg-white  pt-10 pb-20 ">
                    <div className="marquee-content flex items-center gap-16 md:gap-32 animate-marquee whitespace-nowrap">

                        {/* TEXT 1 */}
                        <h1 className="text-[90px] md:text-[150px] font-extrabold text-green-900 leading-none shrink-0">
                            In the competitive
                        </h1>

                        {/* Play Button #1 */}
                        <div className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-xl flex items-center justify-center">
                            <img
                                src="https://i.ibb.co.com/TzvvqKF/abc.webp"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div
                                onClick={() => setShowVideo(true)}
                                className="relative z-20 w-10 h-10 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                            >
                                <svg width="28" height="28" fill="#0B6E3F">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>

                            <div className="absolute inset-0 bg-black/10 z-10"></div>
                        </div>

                        {/* TEXT 2 */}
                        <h1
                            className="text-[90px] md:text-[150px] font-extrabold text-transparent leading-none shrink-0"
                            style={{ WebkitTextStroke: "2px #AFC8D2" }}
                        >
                            world business of
                        </h1>

                        {/* Play Button #2 */}
                        <div className="relative w-24 h-24 md:w-40 md:h-40 shrink-0 rounded-full overflow-hidden border-4 border-white bg-gray-200 shadow-xl flex items-center justify-center">
                            <img
                                src="https://i.ibb.co.com/TzvvqKF/abc.webp"
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            <div
                                onClick={() => setShowVideo(true)}
                                className="relative z-20 w-10 h-10 md:w-14 md:h-14 bg-white/80 rounded-full flex items-center justify-center shadow-lg cursor-pointer"
                            >
                                <svg width="28" height="28" fill="#0B6E3F">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>

                            <div className="absolute inset-0 bg-black/10 z-10"></div>
                        </div>

                        {/* TEXT 3 → NEW */}
                        <h1 className="text-[90px] md:text-[150px] font-extrabold text-green-900 leading-none shrink-0">
                            02 MARITIME TRANSPORT
                        </h1>

                    </div>
                </div>
            </motion.section>

            {/* VIDEO MODAL */}
            {showVideo && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999]"
                    onClick={() => setShowVideo(false)}
                >
                    <div
                        className="relative bg-black rounded-xl overflow-hidden shadow-2xl w-[90%] max-w-3xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full px-3 hover:bg-black"
                        >
                            ×
                        </button>

                        <iframe
                            className="w-full h-[400px] md:h-[500px]"
                            src={youtubeURL}
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </>
    );
};

export default SliderMarque;
