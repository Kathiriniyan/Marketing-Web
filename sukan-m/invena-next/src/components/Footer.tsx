import Link from "next/link";
import Image from "next/image";
import Newsletter from "./Newsletter";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa"


export default function Footer() {
  return (
    <div
      className="rts-footer-area footer-six bg_image rts-section-gapTop bg-footer-one"
      id="contact"
    >
      <div className="container bg-shape-f1">
        {/* footer call to action area */}
        <Newsletter />
        {/* footer call to action area End */}

        {/* rts footer area */}
        <div className="row pt--120 pt_sm--80 pb--80 pb_sm--40">
          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
            <div className="footer-one-single-wized">
              <div className="wized-title">
                <h5 className="title">Quick Links</h5>
                <Image
                  src="/assets/images/footer/under-title.png"
                  alt="finbiz_footer"
                  width={160}
                  height={24}
                />
              </div>

              <div className="quick-link-inner">
                <ul className="links">
                  <li>
                    <Link href="/contact">
                      <i className="far fa-arrow-right"></i> Forum Support
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="far fa-arrow-right"></i> Help &amp; FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <i className="far fa-arrow-right"></i> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <i className="far fa-arrow-right"></i> Careers
                    </Link>
                  </li>
                </ul>

                <ul className="links margin-left-70">
                  <li>
                    <Link href="/about">
                      <i className="far fa-arrow-right"></i> About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <i className="far fa-arrow-right"></i> Projects
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="/blog">
                      <i className="far fa-arrow-right"></i> Blog
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/services">
                      <i className="far fa-arrow-right"></i> Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* footer mid area */}

          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
            <div className="footer-one-single-wized mid-bg">
              {/* Logo */}
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/assets/images/logo/023.svg"
                  alt="logo"
                  width={160}
                  height={40}
                  className="object-contain"
                />
              </Link>

              {/* Description */}
              <p className="disc text-white/70 text-[15px] leading-relaxed mb-6">
                Felis consquat magnis fames sagittis ultrices plasodales porttitor
                quisque ultrice tempor turpis.
              </p>

              {/* Social icons */}
              <ul className="flex items-center gap-3 list-none p-0 m-0">
                <li className="list-none">
                  <Link
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white hover:bg-primary transition"
                  >
                    <FaFacebookF className="text-xl" />
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white hover:bg-primary transition"
                  >
                    <FaTwitter className="text-xl" />
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white hover:bg-primary transition"
                  >
                    <FaLinkedinIn className="text-xl" />
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    href="#"
                    className="flex h-11 w-11 items-center justify-center rounded-md bg-white/10 text-white hover:bg-primary transition"
                  >
                    <FaInstagram className="text-xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* footer mid area end */}



          <div className="col-xl-4 col-md-6 col-sm-12 col-12">
            <div className="footer-one-single-wized xl:ml-[65px]">
              <div className="wized-title">
                <h5 className="title">Contact Us</h5>
                <Image
                  src="/assets/images/footer/under-title.png"
                  alt="finbiz_footer"
                  width={160}
                  height={24}
                />
              </div>

              {/* Contact items */}
              <div className="mt-8 space-y-6">
                {/* Item 1 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <FaPhoneAlt className="text-lg text-white" />
                  </div>
                  <div className="leading-tight">
                    <h6 className="text-white font-semibold text-[16px] mb-1">
                      Call Us 24/7
                    </h6>
                    <Link
                      href="tel:+25621452156"
                      className="text-white/70 hover:text-white transition text-[15px]"
                    >
                      (+256) 2145.2156
                    </Link>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <FaEnvelope className="text-lg text-white" />
                  </div>
                  <div className="leading-tight">
                    <h6 className="text-white font-semibold text-[16px] mb-1">
                      Work with us
                    </h6>
                    <Link
                      href="mailto:info@sukan-m.com"
                      className="text-white/70 hover:text-white transition text-[15px]"
                    >
                      info@sukan-m.com
                    </Link>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10">
                    <FaMapMarkerAlt className="text-lg text-white" />
                  </div>
                  <div className="leading-tight">
                    <h6 className="text-white font-semibold text-[16px] mb-1">
                      Our Location
                    </h6>
                    <p className="text-white/70 text-[15px]">
                      Manipay, Jaffna
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* footer end area post end*/}
        </div>
        {/* rts footer area End */}
      </div>

      {/* copyright area start */}
      <div className="rts-copyright-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center">
                <p>
                  Sukan M - Copyright {new Date().getFullYear()}. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright area end */}
    </div>
  );
}
