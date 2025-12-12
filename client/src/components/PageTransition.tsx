"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PageTransition({ isFirstLoad = false }: { isFirstLoad?: boolean }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 z-[99999] pointer-events-none flex flex-col">
            {[...Array(5)].map((_, rowIndex) => (
                <div key={rowIndex} className="flex flex-1 w-full">
                    {[...Array(5)].map((_, colIndex) => {
                        const randomDelay = Math.random() * 0.3;

                        return (
                            <motion.div
                                key={rowIndex * 5 + colIndex}
                                className="flex-1 bg-[#111] border-[0.5px] border-[#222]"
                                // If first load: start hidden (preloader handles it)
                                // If navigation: start visible, then reveal
                                initial={isFirstLoad ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
                                // Animate to revealed (hidden)
                                animate={{
                                    opacity: 0,
                                    scale: 0.5,
                                    transition: {
                                        duration: 0.5,
                                        ease: "circIn",
                                        delay: 0.1 + (colIndex * 0.05) + (rowIndex * 0.05)
                                    }
                                }}
                                // Exit to covered (visible)
                                exit={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        duration: 0.4,
                                        ease: "circOut",
                                        delay: randomDelay
                                    }
                                }}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
}
