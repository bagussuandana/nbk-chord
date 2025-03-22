"use client";
import { useRef, useEffect } from "react";

export default function AudioPlayer({ src }: { src: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.7;
        }
    }, []);

    return (
        <div className="mt-4 flex justify-start">
            <audio ref={audioRef} controls>
                <source src={src} type="audio/mpeg" />
                Browser Anda tidak mendukung elemen audio.
            </audio>
        </div>
    );
}
