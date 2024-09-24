"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const SongWrapper = ({ children }: PropsWithChildren) => {
    const pathname = usePathname(); // Get the current URL path

    const pathParts = pathname?.split("/"); // Split by "/"
    const extractedId = pathParts?.[pathParts.length - 1];
    const id = extractedId ? Number(extractedId) : null;
    const prevId = window?.localStorage.getItem("prevUrl") ?? null;

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
                className="container"
                {...AnimationSettings}
                key={`nbk-${id}`} // Use the id from the URL as the key
            >
                <section className="prose dark:prose-invert max-w-full">
                    {children}
                </section>
            </motion.div>
        </AnimatePresence>
    );
};

export default SongWrapper;
