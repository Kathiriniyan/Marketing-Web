"use client";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="header-one style-four header--sticky header-investment">
            <div className="header-top-area-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-top-one-wrapper">
                                <div className="right">
                                    <p>Are you ready to grow up your business? <Link href="/contact">Contact Us <i
                                        className="fa-solid fa-arrow-right"></i></Link></p>
                                </div>
                                <div className="left">
                                    <div className="mail">
                                        <a href="mailto:Info@sukan-m.com"><i className="fal fa-envelope"></i>
                                            Info@sukan-m.com</a>
                                    </div>
                                    <div className="mail">
                                        <a href="tel:+2108976569"><i className="fa-solid fa-phone-flip"></i>
                                            Hotline: +94 771212112</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="header-main-one-wrapper">
                                <div className="thumbnail">
                                    <Link href="/">
                                        <Image src="/assets/images/logo/logo-001.svg" alt="finbiz-logo" width={150} height={50} />
                                    </Link>
                                </div>
                                <div className="main-header">
                                    <div className="nav-area">
                                        <ul className="">
                                            <li className="main-nav">
                                                <Link href="/">Home</Link>
                                                {/* Mega menu content omitted for brevity, can be added later */}
                                            </li>
                                            <li className="main-nav">
                                                <Link href="/about">About us</Link>
                                            </li>
                                            <li className="main-nav">
                                                <Link href="/services">Services</Link>
                                            </li>
                                            <li className="main-nav">
                                                <Link href="/careers">Careers</Link>
                                            </li>
                                            {/* <li className="main-nav">
                                                <Link href="/blog">Blog</Link>
                                            </li> */}
                                        </ul>
                                    </div>

                                    <div className="button-area">
                                        <Link href="/contact" className="rts-btn btn-primary ml--20 ml_sm--5 header-one-btn quote-btn">Contact Us</Link>
                                        <button id="menu-btn" className="menu menu-btn ml--20 ml_sm--5">
                                            <Image className="menu-light" src="/assets/images/icons/02.svg" alt="Menu-icon" width={30} height={30} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;