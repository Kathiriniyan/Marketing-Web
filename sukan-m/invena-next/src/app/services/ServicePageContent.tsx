// src/app/service/ServicePageContent.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { SERVICES, STEPS, FAQS } from "@/lib/service";

export default function ServicePageContent() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);
  const detailRef = useRef<HTMLElement | null>(null);

  // For smooth fade/slide of the detail section
  const [detailAnimOn, setDetailAnimOn] = useState(false);

  // FAQ open/close state (one at a time)
  const [openFaqId, setOpenFaqId] = useState<string | null>(
    FAQS.find((f) => f.open)?.id ?? null
  );

  const activeService = SERVICES.find((s) => s.id === activeServiceId) ?? null;

  function handleLearnMore(id: string) {
    setActiveServiceId(id);

    // trigger animation
    setDetailAnimOn(false);

    // wait for section to mount then animate + scroll
    setTimeout(() => {
      setDetailAnimOn(true);

      if (detailRef.current) {
        detailRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  }

  // Reset animation when active service changes
  useEffect(() => {
    if (!activeService) {
      setDetailAnimOn(false);
    }
  }, [activeService]);

  function toggleFaq(id: string) {
    setOpenFaqId((current) => (current === id ? null : id));
  }

  return (
    <>
      {/* 🔽 Detail area – hidden until a service is selected, with smooth fade/slide */}
      {activeService && (
        <section
          id="service-detail"
          ref={detailRef}
          className="rts-service-detail-area rts-section-gapBottom sm:pt-20 pb-20"
          style={{
            opacity: detailAnimOn ? 1 : 0,
            transform: detailAnimOn ? "translateY(0px)" : "translateY(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <div className="container">
            <div className="row g-5 align-items-center">
              {/* ✅ IMAGE FIRST ON MOBILE, RIGHT ON DESKTOP */}
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail">
                  <img
                    src={activeService.thumb}
                    alt={activeService.title}
                    className="w-100"
                  />
                </div>
              </div>

              {/* ✅ CONTENT SECOND ON MOBILE, LEFT ON DESKTOP */}
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="title-style-one">
                  <span className="pre">Service Detail</span>
                  <h2 className="title rts-text-anime-style-1">
                    {activeService.title}
                  </h2>
                </div>

                <p className="disc mt-3">{activeService.detailIntro}</p>

                {activeService.detailSections.map((section) => (
                  <div key={section.title} className="mt-4">
                    <h5 className="title mb-2">{section.title}</h5>
                    <p className="disc">{section.body}</p>
                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-2">
                        {section.bullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                <div className="mt-4">
                  <Link href="/contact" className="rts-btn btn-primary">
                    Talk to us about this service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Service Area (UI unchanged – just Learn More wired to state) */}
      <section className="our-service-area-start rts-section-gapBottom -pt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rts-service-main-wrapper-10">
                {SERVICES.map((s) => (
                  <div
                    key={s.id}
                    className={`signle-service-style-10 ${
                      s.reverseOnSm ? "order-control-sm-device" : ""
                    }`}
                  >
                    {s.reverseOnSm ? (
                      <>
                        <div className="thumbnail">
                          <img src={s.thumb} alt="service" />
                        </div>
                        <div className="content-area-wrapper">
                          <div className="icon">
                            <img src={s.icon} alt="service" />
                          </div>
                          <h5 className="title">{s.title}</h5>
                          <p className="disc">{s.desc}</p>
                          {/* same look, but uses onClick instead of navigation */}
                          <a
                            href="#service-detail"
                            className="arrow-right-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              handleLearnMore(s.id);
                            }}
                          >
                            Learn More <i className="fa-solid fa-arrow-right" />
                          </a>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="content-area-wrapper">
                          <div className="icon">
                            <img src={s.icon} alt="service" />
                          </div>
                          <h5 className="title">{s.title}</h5>
                          <p className="disc">{s.desc}</p>
                          <a
                            href="#service-detail"
                            className="arrow-right-btn"
                            onClick={(e) => {
                              e.preventDefault();
                              handleLearnMore(s.id);
                            }}
                          >
                            Learn More <i className="fa-solid fa-arrow-right" />
                          </a>
                        </div>
                        <div className="thumbnail">
                          <img src={s.thumb} alt="service" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process (unchanged) */}
      <section className="working-process-one bg-main rts-section-gap without-clip-radious">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="title-style-one">
                <span className="pre">How we works</span>
                <h2 className="title rts-text-anime-style-1">
                  Easy 3 Steps To Work
                </h2>
              </div>

              <div className="working-process-main-wrapper mt--60">
                {STEPS.map((step) => (
                  <div
                    key={step.number}
                    className="single-working-process-one"
                    data-animation="fadeInUp"
                    data-delay="0.2"
                    data-duration="1.2"
                  >
                    <div className="left">
                      <div className="icon">
                        <img src={step.icon} alt="process" />
                      </div>
                    </div>
                    <div className="inner-content">
                      <div className="number-main">
                        <span className="number">{step.number}</span>
                      </div>
                      <h5 className="title">{step.title}</h5>
                      <p className="disc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Working Process Image */}
            <div className="col-lg-6">
              <div
                className="thumbnail-working-procss-one"
                data-animation="zoomOut"
                data-delay="0.2"
                data-duration="1.2"
              >
                <img src="/assets/images/process/03.webp" alt="working-process" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Area – fixed React accordion with smooth transition */}
      <section className="rts-faq-area rts-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-five center">
                <span className="pre">FAQ</span>
                <h2 className="title rts-text-anime-style-1">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-full mt--40">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="thumbnail-faq-left">
                <img src="/assets/images/faq/02.webp" alt="faq-iumage area" />
              </div>
            </div>

            <div className="col-lg-5">
              <div
                className="accordion faq-wrapper-inner-page"
                id="accordionExample"
              >
                {FAQS.map((f) => {
                  const isOpen = openFaqId === f.id;

                  return (
                    <div className="accordion-item" key={f.id}>
                      <h2 className="accordion-header" id={f.headingId}>
                        <button
                          className={`accordion-button ${
                            isOpen ? "" : "collapsed"
                          }`}
                          type="button"
                          onClick={() => toggleFaq(f.id)}
                        >
                          {f.id}. {f.q}
                        </button>
                      </h2>

                      <div
                        className={`accordion-collapse ${isOpen ? "show" : ""}`}
                        style={{
                          maxHeight: isOpen ? "500px" : "0px",
                          overflow: "hidden",
                          transition:
                            "max-height 0.9s ease, opacity 0.9s ease",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="accordion-body">{f.a}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
