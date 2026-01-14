"use client";

import { useEffect, useState } from "react";

type Props = {
  /** set true if you want the loader only once per tab/session */
  oncePerSession?: boolean;
  /** minimum time to show loader (ms) so it looks intentional */
  minDurationMs?: number;
  /** your logo path */
  logoSrc?: string;
};

export default function LoadingScreen({
  oncePerSession = true,
  minDurationMs = 900,
  logoSrc = "/assets/images/fav1.svg",
}: Props) {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // show only first time (optional)
    if (oncePerSession) {
      const seen = sessionStorage.getItem("loader_seen");
      if (seen) return;
      sessionStorage.setItem("loader_seen", "1");
    }

    setVisible(true);

    const start = performance.now();
    const done = () => {
      const elapsed = performance.now() - start;
      const wait = Math.max(0, minDurationMs - elapsed);

      window.setTimeout(() => {
        setExiting(true); 
        window.setTimeout(() => setVisible(false), 450); 
      }, wait);
    };

    done();
  }, [oncePerSession, minDurationMs]);

  if (!visible) return null;

  return (
    <div className={`app-loader ${exiting ? "is-exiting" : ""}`} aria-label="Loading">
      <div className="app-loader__content">
        <img className="app-loader__logo" src={logoSrc} alt="Loading" />
        <div className="app-loader__ring" aria-hidden="true" />
        <div className="app-loader__dots" aria-hidden="true" />
      </div>
    </div>
  );
}
