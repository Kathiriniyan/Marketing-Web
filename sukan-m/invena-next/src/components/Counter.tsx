"use client";

import Image from "next/image";

const Counter = () => {
    return (
        <div className="rts-counter-area investment rts-section-gap">
            <div className="container">
                <div className="section-inner">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="counter-area flex gap-10">
                                <div className="counter-inner">
                                    <h2 className="counter title font-bold text-4xl">
                                        <span className="odometer">2022</span>
                                    </h2>
                                    <p className="text-gray-500">Founded</p>
                                </div>
                                <div className="counter-inner">
                                    <h2 className="counter title font-bold text-4xl">
                                        $<span className="odometer">40</span>B
                                    </h2>
                                    <p className="text-gray-500">Valuation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="right-content">
                                <p className="desc text-lg">
                                    We are the leading agency dedicated to enhancing your deals, driving growth, and delivering exceptional results. Trust us to maximize your potential and take your business to the next level
                                </p>
                                <div className="bottom mt-6 flex items-center gap-4">
                                    <Image src="/assets/images/banner/small-img/01.png" alt="user" width={50} height={50} className="rounded-full" />
                                    <span className="info text-gray-600">
                                        2.5k Client Connect with our Company
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;
