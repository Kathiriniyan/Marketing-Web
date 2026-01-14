// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sukan Marketing | Worldwide Operations Support for Companies",
  description: "Sukan Marketing provides worldwide operations support - sales, back office, administration, online marketing, and IT support - so your business runs smoothly.",
  keywords: "worldwide operations support, back-office support, telesales suppo",
  icons: { icon: "/assets/images/fav.svg" },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "a-gtukY93e8oFiOXODIODIqd3Wxj0HzcLSh0dFhisyk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon (added, like original HTML) */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/fav1.svg"
        />

        {/* Template CSS */}
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.css" />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/metismenu.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnifying-popup.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        {/* Optional: image preload from original template */}
        <link rel="preload" as="image" href="/assets/images/banner/21.webp" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased investment-home`}
      >
        {children}

        <Sidebar />
        <div id="anywhere-home" className=""></div>

        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>

        {/* ✅ 1) Load jQuery first */}
        <Script src="/assets/js/plugins/jquery.js" strategy="beforeInteractive" />

        {/* ✅ 2) Ensure window.jQuery and window.$ are defined (important for template plugins) */}
        <Script
          id="jquery-global-fix"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                function exposeJQ() {
                  if (window.jQuery) {
                    window.$ = window.jQuery;
                    return true;
                  }
                  return false;
                }
                // Try immediately + retry a few times (Turbopack can be timing-sensitive)
                if (!exposeJQ()) {
                  var tries = 0;
                  var t = setInterval(function () {
                    tries++;
                    if (exposeJQ() || tries > 50) clearInterval(t);
                  }, 10);
                }
              })();
            `,
          }}
        />

        {/* ✅ 3) jQuery-dependent scripts: run after interactive so jQuery is guaranteed */}
        <Script
          src="/assets/js/vendor/bootstrap.min.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/plugins/swiper.js" strategy="afterInteractive" />

        <Script src="/assets/js/plugins/odometer.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/plugins/jquery-appear.js"
          strategy="afterInteractive"
        />

        <Script src="/assets/js/plugins/gsap.js" strategy="afterInteractive" />
        <Script
          src="/assets/js/plugins/split-text.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/scroll-trigger.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/smooth-scroll.js"
          strategy="afterInteractive"
        />
        <Script
          src="/assets/js/plugins/metismenu.js"
          strategy="afterInteractive"
        />

        {/* Popup / video-related scripts */}
        <Script
          src="https://html.themewant.com/golfy/assets/js/plugins/magnific-popup.js"
          strategy="afterInteractive"
        />
        <Script src="/assets/js/plugins/popup.js" strategy="afterInteractive" />

        {/* Contact form plugin from original HTML */}
        <Script
          src="/assets/js/plugins/contact.form.js"
          strategy="afterInteractive"
        />

        {/* ✅ 4) Main template JS LAST */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
