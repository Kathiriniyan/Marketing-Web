// src/app/service/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicePageContent from "./ServicePageContent";

export const metadata: Metadata = {
  title: "Our Services | Sukan M",
  description: "Service We Provide",
};

export default function ServicePage() {
  return (
    <main>
      <Header />

      {/* Breadcrumb / Hero (unchanged) */}
      <section className="rts-breadcrumb-area small-h pt-40 sm:pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center">
                <span className="pre">Our Service</span>
                <span className="bg-title">Our Service</span>
                <h1 className="title rts-text-anime-style-1">
                  Service We Provide
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

      {/* All interactive + detail + list + process + FAQ */}
      <ServicePageContent />

      <Footer />
    </main>
  );
}
