"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Preloader from "./Preloader";
import PageTransition from "./PageTransition";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [showPreloader, setShowPreloader] = useState(true);
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    // Preloader completion handler
    const handlePreloaderComplete = () => {
        setShowPreloader(false);
        setTimeout(() => setIsFirstLoad(false), 500);
    };

    return (
        <>
            {/* Preloader - Only on first load */}
            <AnimatePresence mode="wait">
                {showPreloader && (
                    <Preloader key="preloader" onComplete={handlePreloaderComplete} />
                )}
            </AnimatePresence>

            {/* Page content with PageTransition */}
            <AnimatePresence mode="wait">
                <div key={pathname}>
                    <PageTransition isFirstLoad={isFirstLoad} />
                    {children}
                </div>
            </AnimatePresence>
        </>
    );
}
