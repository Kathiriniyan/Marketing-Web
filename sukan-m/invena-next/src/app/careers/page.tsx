import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { careers } from "@/lib/careers";

export const metadata: Metadata = {
  title: "Career | Sukan M",
  description: "Join Sukan Marketing. We are hiring for Sales, Back Office and Planning, Accounts, Marketing, Secretary, and IT roles (Python, Data, Cloud). ",
  keywords: "Sukan Marketing vacancies, telesales job, back office job, python developer job, data engineer job, cloud engineer job",
};

export default function CareersPage() {
  return (
    <main className="career-page-main">
      <Header />

      {/* Breadcrumb / About Hero Section */}
      <section className="rts-breadcrumb-area pt-20 xl:pt-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left">
                <span className="pre">Career Sukan M</span>
                <span className="bg-title">Career</span>
                <h1 className="title rts-text-anime-style-1">Career With Sukan M</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-area">
          <img src="/assets/images/about/shape/01.png" alt="shape" className="one" />
          <img src="/assets/images/about/shape/02.png" alt="shape" className="two" />
          <img src="/assets/images/about/shape/03.png" alt="shape" className="three" />
        </div>
      </section>

      {/* Main Large Image Under Breadcrumb */}
      <section className="about-invena-large-image lg:pt-20 mb-20 xl:mb-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="large-image-bottm-breadcrumb">
                <img src="/assets/images/about/16.webp" alt="about" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Opening Area */}
      <section className="current-opening-area rts-section-gap bg-[#141821] mb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-five center mb--40 text-white">
                <h2 className="title text-white">Current&nbsp;Opening</h2>
                <span className="pre text-white">
                  From entry-level positions to executive roles browse through.
                </span>
              </div>
            </div>
          </div>

          <div className="row mt--30">
            <div className="col-lg-12 space-y-6">
              {careers.map((job, index) => (
                <div
                  key={job.slug}
                  className="single-open-career career-open-card bg-[#181d27] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f2633] hover:shadow-[0_24px_60px_rgba(0,0,0,0.65)]"
                  data-animation="fadeInUp"
                  data-delay={0.1 + index * 0.2}
                >
                  <div className="left-side">
                    <h4
  className="
    flex flex-wrap items-center gap-2 sm:gap-3
    font-semibold text-lg sm:text-xl
    text-white leading-snug
  "
>
  {/* TITLE */}
  <span
    className="
      block
      max-w-full
      break-words
      line-clamp-2
      sm:line-clamp-1
      
    "
  >
    {job.title}
  </span>

  {/* TAG */}
  {job.tag && (
    <span
      className="
        inline-flex items-center
        rounded-xl
        bg-amber-500/15
        px-3 py-1
        text-[11px] sm:text-sm
        font-semibold uppercase tracking-wide
        text-amber-400
        whitespace-nowrap
        shrink-0
      "
    >
      {job.tag}
    </span>
  )}
</h4>



                    <div className="bottom mt-3">
                      <div className="single">
                        <i className="fa-regular fa-location-dot" />
                        <span>{job.location}</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-clock" />
                        <span>{job.type}</span>
                      </div>
                      <div className="single">
                        <i className="fa-regular fa-briefcase" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="right-side">
                    <div className="bottom">
                      <div className="single">
                        <p>Apply Deadline</p>
                        <span>{job.deadline}</span>
                      </div>
                      <div className="single">
                        <p>Salary</p>
                        <span>{job.salary}</span>
                      </div>

                      <Link href={`/careers/${job.slug}`} className="rts-btn btn-primary">
                        Apply Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {/* End jobs */}
            </div>
          </div>
        </div>
      </section>

      {/* Career Gallery */}
      <section className="career-gallery-area rts-section-gapBottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-style-five center mb--40">
                <span className="pre">Gallery</span>
                <h2 className="title rts-text-anime-style-1">Life At Sukan M</h2>
              </div>
            </div>
          </div>

          <div className="row g-5 mt--5">
            <div className="col-lg-4 offset-lg-1">
              <a href="/assets/images/gallery/11.webp" className="gallery-image" data-animation="fadeInUp" data-delay="0.1">
                <div className="thumbnail">
                  <img src="/assets/images/gallery/11.webp" alt="gallery-image" />
                </div>
              </a>
            </div>

            <div className="col-lg-6">
              <a href="/assets/images/gallery/12.webp" className="gallery-image" data-animation="fadeInUp" data-delay="0.2">
                <div className="thumbnail">
                  <img src="/assets/images/gallery/12.webp" alt="gallery-image" />
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              <a href="/assets/images/gallery/13.webp" className="gallery-image" data-animation="fadeInUp" data-delay="0.3">
                <div className="thumbnail">
                  <img src="/assets/images/gallery/13.webp" alt="gallery-image" />
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              <a href="/assets/images/gallery/14.webp" className="gallery-image" data-animation="fadeInUp" data-delay="0.4">
                <div className="thumbnail">
                  <img src="/assets/images/gallery/14.webp" alt="gallery-image" />
                </div>
              </a>
            </div>

            <div className="col-lg-4">
              <a href="/assets/images/gallery/15.webp" className="gallery-image" data-animation="fadeInUp" data-delay="0.5">
                <div className="thumbnail">
                  <img src="/assets/images/gallery/15.webp" alt="gallery-image" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
