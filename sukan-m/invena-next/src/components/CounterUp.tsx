"use client";

import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CounterUp() {
  const { ref, inView } = useInView({
    threshold: 0.35,
    triggerOnce: false, // run again when you scroll back
  });

  // ✅ CONTROL SECTION HEIGHT HERE
  const sectionStyle: React.CSSProperties = {
    paddingTop: 90,
    paddingBottom: 90,
    minHeight: "auto",
    height: "auto",
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // ✅ force re-run animation every time it enters viewport
  const runKey = inView ? "run" : "stop";

  const counters = [
    { id: "11", end: 11, label: "Corporate Partners", icon: "/assets/images/counterup/icon/01.svg" },
    { id: "300", end: 300, label: "Successful Shipments", icon: "/assets/images/counterup/icon/02.svg" },
    { id: "30", end: 30, label: "Skilled Experts", icon: "/assets/images/counterup/icon/03.svg" },
    { id: "120", end: 120, label: "Happy Clients", icon: "/assets/images/counterup/icon/04.svg" },
  ];

  return (
    <div ref={ref} className="rts-counter-up-area counter-bg" style={sectionStyle}>
      <div className="container">
        <div className="row g-4 justify-content-center">
          {counters.map((item) => (
            <div key={item.id} className="col-6 col-md-3">
              <div className="single-counter h-100">
                {/* ✅ tablet-friendly layout */}
                <div className="d-flex flex-column flex-sm-row align-items-center gap-3 text-center text-sm-start">
                  <div className="icon flex-shrink-0">
                    <Image src={item.icon} alt="Business_counter" width={60} height={60} />
                  </div>

                  <div className="counter-details">
                    <h2 className="counter title m-0">
                      {inView ? (
                        <CountUp
                          key={`${runKey}-${item.id}`}
                          start={0}
                          end={item.end}
                          duration={3.2}
                          separator=","
                        />
                      ) : (
                        "00"
                      )}
                      +
                    </h2>
                    <p className="disc mb-0">{item.label}</p>
                  </div>
                </div>
                {/* /tablet-friendly layout */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
