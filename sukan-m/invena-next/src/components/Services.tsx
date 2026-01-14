"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    const initSwiper = () => {
      const w = window as any;

      if (!w?.Swiper) return;

      const el = document.querySelector(".mySwiper-service-1") as any;
      if (el?.swiper) {
        try {
          el.swiper.destroy(true, true);
        } catch {}
      }

      new w.Swiper(".mySwiper-service-1", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        speed: 700,
        centeredSlides: false,
        observer: true,
        observeParents: true,
        pagination: {
          el: ".mySwiper-service-1 .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: { slidesPerView: 1, spaceBetween: 16 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1200: { slidesPerView: 3, spaceBetween: 30 },
        },
      });
    };

    const t = window.setTimeout(initSwiper, 250);

    return () => {
      window.clearTimeout(t);

      const el = document.querySelector(".mySwiper-service-1") as any;
      if (el?.swiper) {
        try {
          el.swiper.destroy(true, true);
        } catch {}
      }
    };
  }, []);

  return (
    <div className="rts-service-area pt--40 pb--60" id="service">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="title-style-two center">
              <span className="bg-content">Services</span>
              <span className="pre">our Service</span>
              <h2 className="title rts-text-anime-style-1">
                Sukan Operations Support Services
              </h2>
              <p className="disc" style={{ maxWidth: 820, margin: "14px auto 0" }}>
                Explore our services: telesales, back office, administration, online marketing,
                and IT support including app and database solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-2 mt--30">
        <div className="row">
          <div className="col-lg-12">
            <div className="service-bg-style-one-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-style-swiper-wrapper-two">
                    <div className="swiper mySwiper-service-1">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="single-service-signle-wrapper">
                            <div className="icons">
                              <Image
                                src="/assets/images/service/icons/01.svg"
                                alt="Sales (Telesales)"
                                width={60}
                                height={60}
                              />
                            </div>
                            <div className="information">
                              <h5 className="title">Sales (Telesales)</h5>
                              <p className="disc">
                                We support your sales pipeline with structured outreach and follow-up.
                                Our team handles lead calling and qualification, appointment setting,
                                customer follow-up and reactivation, plus CRM updates and reporting.
                              </p>
                              <Link href="/services" className="arrow-right">
                                <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                <span>Read More</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* 2 - Back Office */}
                        <div className="swiper-slide">
                          <div className="single-service-signle-wrapper">
                            <div className="icons">
                              <Image
                                src="/assets/images/service/icons/02.svg"
                                alt="Back Office"
                                width={60}
                                height={60}
                              />
                            </div>
                            <div className="information">
                              <h5 className="title">Back Office</h5>
                              <p className="disc">
                                We keep orders and communication on track by supporting order processing,
                                customer updates and confirmations, document checks with data accuracy,
                                and smooth coordination with internal teams.
                              </p>
                              <Link href="/services" className="arrow-right">
                                <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                <span>Read More</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* 3 - Administration */}
                        <div className="swiper-slide">
                          <div className="single-service-signle-wrapper">
                            <div className="icons">
                              <Image
                                src="/assets/images/service/icons/03.svg"
                                alt="Administration"
                                width={60}
                                height={60}
                              />
                            </div>
                            <div className="information">
                              <h5 className="title">Administration</h5>
                              <p className="disc">
                                We maintain control and clarity in your daily operations through data entry
                                and record keeping, invoicing support and documentation, weekly and monthly
                                reporting, plus process documentation and checklists.
                              </p>
                              <Link href="/services" className="arrow-right">
                                <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                <span>Read More</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* 4 - Online Marketing */}
                        <div className="swiper-slide">
                          <div className="single-service-signle-wrapper">
                            <div className="icons">
                              <Image
                                src="/assets/images/service/icons/04.svg"
                                alt="Online Marketing"
                                width={60}
                                height={60}
                              />
                            </div>
                            <div className="information">
                              <h5 className="title">Online Marketing</h5>
                              <p className="disc">
                                We execute marketing tasks that support your commercial growth, including website
                                and content updates, basic SEO and landing page content, social media support,
                                and campaign coordination with reporting.
                              </p>
                              <Link href="/services" className="arrow-right">
                                <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                <span>Read More</span>
                              </Link>
                            </div>
                          </div>
                        </div>

                        {/* 5 - IT Support  */}
                        <div className="swiper-slide">
                          <div className="single-service-signle-wrapper">
                            <div className="icons">
                              <Image
                                src="/assets/images/service/icons/05.svg"
                                alt="IT Support (App + Database)"
                                width={60}
                                height={60}
                              />
                            </div>
                            <div className="information">
                              <h5 className="title">IT Support (App + Database)</h5>
                              <p className="disc">
                                We support technical execution and operational systems by building apps connected
                                to databases, creating workflow automation and dashboards, improving data structure,
                                and providing ongoing support and enhancements.
                              </p>
                              <Link href="/services" className="arrow-right">
                                <i className="fa-sharp fa-solid fa-arrow-right"></i>
                                <span>Read More</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
