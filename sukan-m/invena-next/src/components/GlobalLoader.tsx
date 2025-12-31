"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function GlobalLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="global-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white"
                >
                    {/* Logo Container */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-8 relative w-40 h-40 md:w-56 md:h-56"
                    >
                        <Image
                            src="/assets/images/loading.svg"
                            alt="Loading..."
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Progress Bar Container */}
                    <div className="w-64 h-2 bg-gray-100 rounded-full overflow-hidden relative">
                        <motion.div
                            className="h-full bg-[#FF0000]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-500 font-medium text-sm tracking-widest uppercase"
                    >
                        Loading
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
