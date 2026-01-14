"use client";

import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getAllCategories, getAllPosts, getAllTags } from "@/lib/blog";



const PAGE_SIZE = 6;

export default function BlogPage() {
  const allPosts = useMemo(() => getAllPosts(), []);
  const categories = useMemo(() => ["All", ...getAllCategories()], []);
  const tags = useMemo(() => ["All", ...getAllTags()], []);

  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeTag, setActiveTag] = useState<string>("All");
  const [page, setPage] = useState(1);

  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [showMobileTags, setShowMobileTags] = useState(false);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return allPosts.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.author.toLowerCase().includes(q);

      const matchesCategory =
        activeCategory === "All" || p.category === activeCategory;

      const matchesTag =
        activeTag === "All" || p.tags.some((t) => t === activeTag);

      return matchesQuery && matchesCategory && matchesTag;
    });
  }, [allPosts, query, activeCategory, activeTag]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);

  const visible = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, safePage]);

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPage(1);
  }

  function setCategory(cat: string) {
    setActiveCategory(cat);
    setPage(1);
  }

  function setTag(tag: string) {
    setActiveTag(tag);
    setPage(1);
  }

  function resetFilters() {
    setQuery("");
    setActiveCategory("All");
    setActiveTag("All");
    setPage(1);
  }

  function goPrev() {
    setPage((prev) => Math.max(1, prev - 1));
  }

  function goNext() {
    setPage((prev) => Math.min(totalPages, prev + 1));
  }

  return (
    <main>
      <Header />

      <div className="rts-breadcrumb-area pt-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center">
                <span className="bg-title">Latest Post</span>
                <h1 className="title rts-text-anime-style-1">Latest Posts</h1>
                <p className="disc">
                  Insights on operations support, sales follow-up, back office
                  structure, marketing execution, and IT systems for growing companies.
                </p>

                <div className="mt-3 text-sm opacity-80">
                  {activeCategory !== "All" && (
                    <>
                      Category: <b>{activeCategory}</b>{" "}
                    </>
                  )}
                  {activeTag !== "All" && (
                    <>
                      • Tag: <b>{activeTag}</b>{" "}
                    </>
                  )}
                  {(activeCategory !== "All" || activeTag !== "All" || query) && (
                    <>
                      •{" "}
                      <button
                        type="button"
                        onClick={resetFilters}
                        className="underline"
                        style={{
                          background: "transparent",
                          border: "none",
                          padding: 0,
                        }}
                      >
                        Clear filters
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-area">
          <Image
            src="/assets/images/about/shape/01.png"
            alt="shape"
            className="one"
            width={180}
            height={180}
            priority={false}
          />
          <Image
            src="/assets/images/about/shape/02.png"
            alt="shape"
            className="two"
            width={180}
            height={180}
            priority={false}
          />
          <Image
            src="/assets/images/about/shape/03.png"
            alt="shape"
            className="three"
            width={180}
            height={180}
            priority={false}
          />
        </div>
      </div>

      <div className="rts-blog-list-area -mt-40 rts-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 block xl:hidden mb-4">
              <div className="rts-single-wized search1 mb-3">
                <div className="wized-header">
                  <h5 className="title">Search Here</h5>
                </div>
                <div className="wized-body">
                  <form className="rts-search-wrapper" onSubmit={onSearchSubmit}>
                    <input
                      className="Search1"
                      type="text"
                      placeholder="Enter Keyword"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" aria-label="Search">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="rts-single-wized Categories mb-3">
                <div
                  className="wized-header flex items-center justify-between cursor-pointer"
                  onClick={() =>
                    setShowMobileCategories((prev) => !prev)
                  }
                >
                  <h5 className="title">Categories</h5>
                  <i
                    className={
                      showMobileCategories
                        ? "far fa-angle-up"
                        : "far fa-angle-down"
                    }
                  ></i>
                </div>
                {showMobileCategories && (
                  <div className="wized-body">
                    {categories.map((cat) => (
                      <ul className="single-categories" key={cat}>
                        <li>
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setCategory(cat);
                            }}
                            style={{
                              fontWeight: activeCategory === cat ? 700 : 400,
                              opacity: activeCategory === cat ? 1 : 0.9,
                            }}
                          >
                            {cat}{" "}
                            <i className="far fa-long-arrow-right"></i>
                          </a>
                        </li>
                      </ul>
                    ))}
                  </div>
                )}
              </div>

              <div className="rts-single-wized tags">
                <div
                  className="wized-header flex items-center justify-between cursor-pointer"
                  onClick={() => setShowMobileTags((prev) => !prev)}
                >
                  <h5 className="title">Popular Tags</h5>
                  <i
                    className={
                      showMobileTags ? "far fa-angle-up" : "far fa-angle-down"
                    }
                  ></i>
                </div>
                {showMobileTags && (
                  <div className="wized-body">
                    <div className="tags-wrapper">
                      {tags.map((t) => (
                        <a
                          key={t}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setTag(t);
                          }}
                          style={{
                            fontWeight: activeTag === t ? 700 : 400,
                            opacity: activeTag === t ? 1 : 0.9,
                          }}
                        >
                          {t}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              <div className="row g-5">
                {visible.map((post, idx) => (
                  <div
                    key={post.slug}
                    className="col-lg-6 col-md-6 col-sm-12"
                    data-animation="fadeInUp"
                    data-delay={`${0.1 + (idx % 4) * 0.1}`}
                  >
                    <div className="single-blog-area-one column-reverse">
                      <p>
                        {post.category} / <span>by {post.author}</span>
                      </p>

                      <Link href={`/blog/${post.slug}`}>
                        <h4 className="title">{post.title}</h4>
                      </Link>

                      <div className="bottom-details">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="thumbnail"
                        >
                          <Image
                            src={post.image}
                            alt="blog-area"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {visible.length === 0 && (
                  <div className="col-12">
                    <div className="p-4 border rounded-xl">
                      No posts found. Try changing your search or filters.
                    </div>
                  </div>
                )}
              </div>

              {totalPages > 1 && (
                <div className="row mt-4">
                  <div className="col-12">
                    <div className="text-center">
                      <div className="pagination">
                        {/* Left arrow */}
                        <button
                          type="button"
                          onClick={goPrev}
                          disabled={safePage === 1}
                          aria-label="Previous page"
                        >
                          <i className="fal fa-angle-double-left"></i>
                        </button>

                        {Array.from({ length: totalPages }).map((_, i) => {
                          const p = i + 1;
                          if (p > 4) return null;
                          return (
                            <button
                              key={p}
                              className={safePage === p ? "active" : ""}
                              onClick={() => setPage(p)}
                              type="button"
                            >
                              {String(p).padStart(2, "0")}
                            </button>
                          );
                        })}

                        {/* Right arrow */}
                        <button
                          type="button"
                          onClick={goNext}
                          disabled={safePage === totalPages}
                          aria-label="Next page"
                        >
                          <i className="fal fa-angle-double-right"></i>
                        </button>
                      </div>

                      <div className="mt-3 text-sm opacity-80">
                        Page {safePage} of {totalPages} • {filtered.length} posts
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style hidden xl:block">
              <div className="rts-single-wized search1">
                <div className="wized-header">
                  <h5 className="title">Search Here</h5>
                </div>
                <div className="wized-body">
                  <form className="rts-search-wrapper" onSubmit={onSearchSubmit}>
                    <input
                      className="Search1"
                      type="text"
                      placeholder="Enter Keyword"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type="submit" aria-label="Search">
                      <i className="fal fa-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              {/* Categories (desktop) */}
              <div className="rts-single-wized Categories">
                <div className="wized-header">
                  <h5 className="title">Categories</h5>
                </div>
                <div className="wized-body">
                  {categories.map((cat) => (
                    <ul className="single-categories" key={cat}>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setCategory(cat);
                          }}
                          style={{
                            fontWeight: activeCategory === cat ? 700 : 400,
                            opacity: activeCategory === cat ? 1 : 0.9,
                          }}
                        >
                          {cat} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  {allPosts.slice(0, 3).map((p) => (
                    <div className="recent-post-single" key={p.slug}>
                      <div className="thumbnail">
                        <Link href={`/blog/${p.slug}`}>
                          <Image
                            src={p.image}
                            alt="Blog_post"
                            width={160}
                            height={120}
                          />
                        </Link>
                      </div>
                      <div className="content-area">
                        <div className="user">
                          <i className="fal fa-clock"></i>
                          <span>{formatDate(p.date)}</span>
                        </div>
                        <Link className="post-title" href={`/blog/${p.slug}`}>
                          <h6 className="title">{p.title}</h6>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags (desktop) */}
              <div className="rts-single-wized tags">
                <div className="wized-header">
                  <h5 className="title">Popular Tags</h5>
                </div>
                <div className="wized-body">
                  <div className="tags-wrapper">
                    {tags.map((t) => (
                      <a
                        key={t}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setTag(t);
                        }}
                        style={{
                          fontWeight: activeTag === t ? 700 : 400,
                          opacity: activeTag === t ? 1 : 0.9,
                        }}
                      >
                        {t}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rts-single-wized contact">
                <div className="wized-header">
                  <Link href="/">
                    <Image
                      src="/assets/images/logo/023.svg"
                      alt="Business_logo"
                      width={180}
                      height={60}
                    />
                  </Link>
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help? We Are Here To Help You</h5>
                  <Link className="rts-btn btn-primary" href="/contact">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
            {/* end sidebar */}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
