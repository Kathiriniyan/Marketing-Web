"use client";

import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
    return (
        <div id="side-bar" className="side-bar header-two">
            <button className="close-icon-menu" title="Close menu">
                <i className="far fa-times"></i>
            </button>

            {/* inner menu area desktop start */}
            <div className="rts-sidebar-menu-desktop">
                <Link className="logo-1" href="/">
                    <Image className="logo" src="/assets/images/logo/logo-001.svg" alt="finbiz_logo" width={150} height={40} />
                </Link>
                <div className="body d-none d-xl-block">
                    <p className="disc">
                        We must explain to you how all seds this mistakens idea denouncing pleasures and praising account.
                        All seds this mistakens idea denouncing pleasures.
                    </p>
                    <div className="get-in-touch">
                        {/* title */}
                        <div className="h6 title">Get In Touch</div>
                        {/* title End */}
                        <div className="wrapper">
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-phone-alt"></i>
                                <a href="tel:+94771212112">+94 771212112</a>
                            </div>
                            {/* single ENd */}
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-envelope"></i>
                                <a href="mailto:Info@sukan-m.com">Info@sukan-m.com</a>
                            </div>
                            {/* single ENd */}
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-globe"></i>
                                <a href="#">www.sukan-m.com</a>
                            </div>
                            {/* single ENd */}
                            {/* single */}
                            <div className="single">
                                <i className="fas fa-map-marker-alt"></i>
                                <a href="#">Manipay, Jaffna, Sri-lanka</a>
                            </div>
                            {/* single ENd */}
                        </div>
                        <div className="social-wrapper-two menu">
                            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="twitter"><i className="fab fa-twitter"></i></a>
                            <a href="#" aria-label="instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="instagram"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* inner menu area desktop End */}

            {/* mobile menu area start */}
            <div className="mobile-menu d-block d-xl-none">
                <nav className="nav-main mainmenu-nav mt--30">
                    <ul className="mainmenu metismenu" id="mobile-menu-active">
                        <li>
                            <Link href="/" className="main">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="main">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="main">Contact Us</Link>
                        </li>
                        <li>
                            <Link href="/services" className="main">Services</Link>
                        </li>
                        <li>
                            <Link href="/careers" className="main">Careers</Link>
                        </li>
                        {/* <li>
                            <Link href="/blog" className="main">Blog</Link>
                        </li> */}
                    </ul>
                </nav>

                <div className="social-wrapper-one">
                    <ul>
                        <li>
                            <a href="#" aria-label="Facebook">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="twitter">
                                <i className="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="youtube">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" aria-label="linkedin">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* mobile menu area end */}
        </div>
    );
};

export default Sidebar;
