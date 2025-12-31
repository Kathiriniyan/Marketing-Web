// src/app/blog/[slug]/page.tsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { getAllCategories, getAllPosts, getAllTags, getPostBySlug } from "@/lib/blog";

// ✅ prebuild params
export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ FIX: unwrap params promise
  const { slug: raw } = await params;

  const slug = normalizeSlug(raw);
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main>
        <Header />
        <div className="container" style={{ paddingTop: 110, paddingBottom: 80 }}>
          <Link href="/blog">← Back to Blog</Link>
          <h1 style={{ marginTop: 20 }}>Post not found</h1>
          <p style={{ marginTop: 10 }}>The blog post you requested does not exist.</p>

          {/* Debug (remove later) */}
          <p style={{ marginTop: 12, opacity: 0.7 }}>
            Requested slug: <b>{slug}</b>
          </p>
        </div>
        <Footer />
      </main>
    );
  }

  const allPosts = getAllPosts();
  const categories = ["All", ...getAllCategories()];
  const tags = ["All", ...getAllTags()];

  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <main>
      <Header />

      {/* Breadcrumb */}
      <div className="rts-breadcrumb-area pt-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center">
                <span className="bg-title">Blog Details</span>
                <h1 className="title rts-text-anime-style-1">{post.title}</h1>
                <p className="disc">
                  {post.category} / <span>by {post.author}</span> • {formatDate(post.date)} •{" "}
                  {post.readTime}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="shape-area">
          <Image src="/assets/images/about/shape/01.png" alt="shape" className="one" width={180} height={180} />
          <Image src="/assets/images/about/shape/02.png" alt="shape" className="two" width={180} height={180} />
          <Image src="/assets/images/about/shape/03.png" alt="shape" className="three" width={180} height={180} />
        </div>
      </div>

      {/* Detail area */}
      <div className="rts-blog-list-area -mt-20 rts-section-gapBottom">
        <div className="container">
          <div className="row g-5">
            {/* LEFT */}
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {/* Feature image */}
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={1400}
                  height={800}
                  className="w-full h-auto"
                  priority
                />
              </div>

              {/* excerpt */}
              <div className="mt-6">
                <p className="text-base md:text-lg opacity-90">{post.excerpt}</p>
              </div>

              {/* tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href="/blog"
                    className="text-xs px-3 py-1 rounded-full bg-black/5 hover:bg-black/10"
                  >
                    {t}
                  </Link>
                ))}
              </div>

              {/* ✅ Content */}
              <article className="prose prose-base md:prose-lg max-w-none mt-8">
                {post.content?.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </article>

              {/* related */}
              {related.length > 0 && (
                <div className="mt-14">
                  <h3 className="text-xl font-semibold">Related Posts</h3>
                  <div className="row g-5 mt-2">
                    {related.map((p, idx) => (
                      <div
                        key={p.slug}
                        className="col-lg-6 col-md-6 col-sm-12"
                        data-animation="fadeInUp"
                        data-delay={`${0.1 + (idx % 4) * 0.1}`}
                      >
                        <div className="single-blog-area-one column-reverse">
                          <p>
                            {p.category} / <span>by {p.author}</span>
                          </p>

                          <Link href={`/blog/${p.slug}`}>
                            <h4 className="title">{p.title}</h4>
                          </Link>

                          <div className="bottom-details">
                            <Link href={`/blog/${p.slug}`} className="thumbnail">
                              <Image src={p.image} alt="blog-area" width={800} height={600} className="w-full h-auto" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Link href="/blog" className="underline">
                      ← Back to Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
              {/* Search UI */}
              <div className="rts-single-wized search1">
                <div className="wized-header">
                  <h5 className="title">Search Here</h5>
                </div>
                <div className="wized-body">
                  <div className="rts-search-wrapper">
                    <input className="Search1" type="text" placeholder="Enter Keyword" />
                    <button>
                      <i className="fal fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <div className="rts-single-wized Categories">
                <div className="wized-header">
                  <h5 className="title">Categories</h5>
                </div>
                <div className="wized-body">
                  {categories.map((cat) => (
                    <ul className="single-categories" key={cat}>
                      <li>
                        <Link href="/blog">
                          {cat} <i className="far fa-long-arrow-right"></i>
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  {allPosts.slice(0, 3).map((p) => (
                    <div className="recent-post-single" key={p.slug}>
                      <div className="thumbnail">
                        <Link href={`/blog/${p.slug}`}>
                          <Image src={p.image} alt="Blog_post" width={160} height={120} />
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

              {/* Tags */}
              <div className="rts-single-wized tags">
                <div className="wized-header">
                  <h5 className="title">Popular Tags</h5>
                </div>
                <div className="wized-body">
                  <div className="tags-wrapper">
                    {tags.map((t) => (
                      <Link key={t} href="/blog">
                        {t}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="rts-single-wized contact">
                <div className="wized-header">
                  <Link href="/">
                    <Image src="/assets/images/logo/023.svg" alt="Business_logo" width={180} height={60} />
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

function normalizeSlug(input: string) {
  const decoded = decodeURIComponent(input || "").trim();
  return decoded.replace(/^\/+|\/+$/g, "");
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
