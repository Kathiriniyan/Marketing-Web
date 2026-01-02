import Image from "next/image";

export default function About() {
  return (
    <div className="rts-about-area-two rts-section-gap" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="left-thumbnail-about-area-two">
              <Image
                src="/assets/images/about/0011.png"
                alt="about"
                width={700}
                height={700}
                priority={false}
                className="rounded-4xl"
              />

              <div className="small-image">
                <Image
                  src="/assets/images/about/005.webp"
                  alt="small"
                  width={350}
                  height={350}
                  priority={false}
                  className="rounded-4xl border border-white border-5"
                />
              </div>

              <div className="counter-about-area">
                <h2 className="counter title">
                  <span className="odometer" data-count="5">
                    00
                  </span>
                  +
                </h2>
                <span>Year of experience</span>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt_sm--80 mt_md--80">
            <div className="about-inner-content-two">
              <div className="title-style-two left">
                <span className="bg-content">About Us</span>
                <span className="pre">More About Us</span>
                <h2 className="title rts-text-anime-style-1">
                  Powering Global Operations at Scale
                </h2>
              </div>

              <div className="about-between-wrapper">
                <p className="disc">
                  Sukan Marketing serves as a reliable operations hub, supporting the complete operational lifecycle—from sales and administration to marketing execution and IT systems. We deliver precision, structure, and dependable execution so our partners can operate efficiently worldwide.
                </p>

                <div className="check-wrapper-area">
                  <div className="single-check">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>End-to-end operational support</p>
                  </div>
                  <div className="single-check">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>Back-office coordination</p>
                  </div>
                  <div className="single-check">
                    <i className="fa-solid fa-circle-check"></i>
                    <p>Sales, marketing, and IT support</p>
                  </div>
                </div>
              </div>

              <div className="call-and-sign-area two">
                <div className="call-area">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-phone-volume"></i>
                  </div>

                  <div className="information">
                    <span>Call us anytime</span>
                    <a href="tel:+94776666666">
                      <h6 className="title">+94 77 666 6666</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="shape-area">
        <Image
          src="/assets/images/about/shape/01.svg"
          alt="shape"
          className="one"
          width={180}
          height={180}
        />
        <Image
          src="/assets/images/about/shape/02.svg"
          alt="shape"
          className="two"
          width={180}
          height={180}
        />
      </div>
    </div>
  );
}
