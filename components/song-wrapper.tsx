"use client";
import React, { PropsWithChildren } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const SongWrapper = ({
    children,
    isWorship,
}: PropsWithChildren & { isWorship?: boolean }) => {
    const pathname = usePathname(); // Get the current URL path
    const pathParts = pathname?.split("/"); // Split by "/"
    const extractedId = pathParts?.[pathParts.length - 1];

    const extractInitials = (text: string) => {
        return text
            .split("-")
            .map((word) => word.charAt(0).toUpperCase())
            .join("");
    };

    const id = extractedId
        ? isWorship
            ? extractInitials(extractedId)
            : Number(extractedId)
        : null;
    let prevId = null;
    if (typeof window !== "undefined") {
        prevId = localStorage.getItem("prevUrl");
    }

    let AnimationSettings;
    if (prevId === "") {
        // No previous id, animate from bottom to top
        AnimationSettings = {
            transition: { duration: 0.5 },
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -20 },
        };
    } else if (Number(id) > Number(prevId)) {
        // Current id is higher, animate from left to right
        AnimationSettings = {
            transition: { duration: 0.5 },
            initial: { opacity: 0, x: 50 }, // Left to right
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 50 },
        };
    } else {
        AnimationSettings = {
            transition: { duration: 0.5 },
            initial: { opacity: 0, x: -50 }, // Left to right
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 50 },
        };
    }

    return (
        <AnimatePresence>
            <motion.div
                className="container relative"
                {...AnimationSettings}
                key={`nbk-${id}`} // Use the id from the URL as the key
            >
                <div className="absolute text-[200px] text-gray-900/5 dark:text-gray-50/5 bottom-0 right-0">
                    {id}
                </div>
                <section className="prose dark:prose-invert max-w-full">
                    {children}
                </section>
            </motion.div>
        </AnimatePresence>
    );
};

export default SongWrapper;
