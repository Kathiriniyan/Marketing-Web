"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BusinessGoal() {
  const smallThumbRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !smallThumbRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(smallThumbRef.current, {
        x: 250, 
        scrollTrigger: {
          trigger: smallThumbRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, smallThumbRef);

    return () => {
      ctx.revert(); 
    };
  }, []);

  return (
    <div className="business-goal-area-2 rts-section-gap">
      <div className="container pt--30">
        <div className="row">
          <div className="col-lg-6">
            <div className="consultancy-style-one">
              <div className="title-style-two mb--40 left">
                <span className="bg-content">Business Goal</span>
                <span className="pre">GLOBAL OPERATIONS HUB</span>
                <h2 className="title rts-text-anime-style-1">
                  Optimising daily operations for growing companies
                </h2>
              </div>

              <div className="signle-consultancy mb--30">
                <div className="icon">
                  <Image
                    src="/assets/images/about/icons/01.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="information">
                  <h4 className="title">Integrated Operations & Administration</h4>
                  <p className="disc">
                    We handle essential operational tasks across sales, back
                    office, administration, marketing, and IT—providing
                    structure, clarity, and dependable execution.
                  </p>
                </div>
              </div>

              <div className="signle-consultancy">
                <div className="icon">
                  <Image
                    src="/assets/images/about/icons/02.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                </div>
                <div className="information">
                  <h4 className="title">Worldwide Support Across Time Zones</h4>
                  <p className="disc">
                    Our team operates across global time zones, ensuring
                    continuous support, fast response times, and smooth
                    coordination between teams and systems.
                  </p>
                </div>
              </div>

              <div
                className="button-wrapper mt--40"
                data-animation="fadeInUp"
                data-delay="0.4"
                data-duration="1.2"
              >
                <Link href="/contact" className="rts-btn btn-primary">
                  Contact Us
                </Link>

                {/* <div className="vedio-icone">
                  <a
                    className="video-play-button play-video popup-video"
                    href="https://www.youtube.com/watch?v=vZE0j_WCRvI"
                  >
                    <span></span>
                  </a>
                  <div className="video-overlay">
                    <a href="#section1" className="video-overlay-close">
                      ×
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6">
            <div className="thumbnail-business-area-right-two">
              <div className="large-thumbnail">
                <Image
                  src="/assets/images/business-goal/02.webp"
                  alt=""
                  width={900}
                  height={900}
                />
              </div>
              <div
                ref={smallThumbRef}
                className="small-thumbnail"
              >
                <Image
                  src="/assets/images/business-goal/01.webp"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          {/* END RIGHT SIDE */}
        </div>
      </div>
    </div>
  );
}
