// app/about/page.tsx
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import BusinessGoal from "@/components/BusinessGoal";

export const metadata: Metadata = {
  title: "About | Sukan M",
  description: "Learn more about Sukan M",
};

export default function AboutPage() {
  return (
    <main>
      <Header />

      {/* Breadcrumb / About Hero Section */}
      <section className="rts-breadcrumb-area pt-20 xl:pt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left">
                <span className="pre">About Invena</span>
                <span className="bg-title">About Us</span>
                <h1 className="title rts-text-anime-style-1">
                  Smart and effective <br />
                  business agency.
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

      {/* Main Large Image Under Breadcrumb */}
      <section className="about-invena-large-image lg:pt-20 sm:mb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="large-image-bottm-breadcrumb">
                <img
                  src="/assets/images/about/16.webp"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <BusinessGoal />
      <Footer />
    </main>
  );
}
