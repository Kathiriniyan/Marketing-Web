"use client";

import Link from "next/link";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="rts-banner-area investment">
            <div className="container">
                <div className="banner-inner">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="banner-one-inner text-center">
                                <p className="pre-title">
                                    <Image src="/assets/images/banner/icon/star.svg" alt="star" width={20} height={20} className="inline-block mr-2" />
                                    Think. Improve. Expand. Repeat.
                                </p>
                                <h1 className="title rts-text-anime-style-1 font-bold">Connecting Local Operations with Global Efficiency.</h1>
                                <p className="disc banner-para text-gray-500">
                                    As the dedicated operational backbone for our partners, we provide end-to-end support across sales, back-office processes, administration, marketing, and IT to ensure daily operations run smoothly across global teams.
                                </p>
                                <Link href="/contact" className="rts-btn btn-primary color-h-black inline-block mt-4">Get in touch..!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape absolute top-0 left-0 w-full h-[500px]">
                <Image src="/assets/images/banner/line-shape.svg" alt="shape" fill className="object-cover" />
            </div>
        </div>
    );
};

export default Hero;
