"use client";

import GlobalLoader from "@/components/GlobalLoader";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <>
            <GlobalLoader />
            {children}
        </>
    );
}
