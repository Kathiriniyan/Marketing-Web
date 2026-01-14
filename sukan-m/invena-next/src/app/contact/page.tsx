// app/contact/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Sukan M",
  description: "Contact Sukan Marketing for worldwide operations support across sales, back office, administration, online marketing, and IT solutions. ",
  keywords: "contact Sukan Marketing, operations support, telesales support, IT support ",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Header />

      {/* Breadcrumb Area */}
      <section className="rts-breadcrumb-area -mb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center">
                <span className="bg-title">Contact</span>
                <h1 className="title rts-text-anime-style-1">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-area">
          <img
            src="/assets/images/about/shape/01.png"
            alt="shape"
            className="one"
          />
          <img
            src="/assets/images/about/shape/02.png"
            alt="shape"
            className="two"
          />
          <img
            src="/assets/images/about/shape/03.png"
            alt="shape"
            className="three"
          />
        </div>
      </section>

      {/* Contact Area */}
      <Contact/>

      {/* Google Map Area */}
      <section className="google-map-area rts-section-gapTop ">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="map-area-main-wrapper">
          <div className="row">
            {/* Map */}
            <div className="col-lg-7">
              <div className="map-area-main-footer-two">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.77415967347267!2d79.99124743730921!3d9.73328615157452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53002b5b3b39%3A0xfc1202af33aaf042!2sSiyanu%20Panthal!5e0!3m2!1sen!2slk!4v1766734502409!5m2!1sen!2slk"
                  width="100%"
                  height="625"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Company location on Google Maps"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-lg-5">
              <div className="map-information-2-footer">
                <h5 className="title-main">Contact Us</h5>

                {/* Optional line image (keep if CSS depends on it) */}
                <img
                  loading="lazy"
                  src="/assets/images/footer/02.svg"
                  alt="line"
                  className="line"
                />

                <div className="contact-information-main-wrapper">
                  <div className="signle-contact-information">
                    <div className="icon">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    <div className="information-wrapper">
                      <span>Call Us 24/7</span>
                      <a href="tel:+94761287897">
                        <h6 className="title">+94 761287897</h6>
                      </a>
                    </div>
                  </div>

                  <div className="signle-contact-information">
                    <div className="icon">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="information-wrapper">
                      <span>Work with us</span>
                      <a href="mailto:Info@sukan-m.com">
                        <h6 className="title">Info@sukan-m.com</h6>
                      </a>
                    </div>
                  </div>

                  <div className="signle-contact-information">
                    <div className="icon">
                      <i className="fa-sharp fa-solid fa-location-dot"></i>
                    </div>
                    <div className="information-wrapper">
                      <span>Our Location</span>
                      <a href="#">
                        <h6 className="title">Manipay, Jaffna</h6>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Contact Info */}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </main>
  );
}
