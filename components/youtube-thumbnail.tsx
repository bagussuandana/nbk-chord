"use client";
import { Worship } from "@/types/worship";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { XIcon } from "lucide-react";

type Props = { worship: Worship };

const YoutubeThumbnail = ({ worship }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedVideo, setSelectedVideo] = useState<string>("");
    const getYouTubeThumbnail = (url: string) => {
        const worshipId = url.split("v=")[1].split("&")[0];
        return `https://img.youtube.com/vi/${worshipId}/hqdefault.jpg`;
    };
    const closeModal = () => {
        setIsOpen(false);
        setSelectedVideo("");
    };
    const getYouTubeEmbedUrl = (url: string) => {
        const videoId = url.split("v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };
    const openModal = (url: string) => {
        setSelectedVideo(getYouTubeEmbedUrl(url));
        setIsOpen(true);
    };
    return (
        <>
            <Image
                width={160}
                height={90}
                src={getYouTubeThumbnail(worship.url)}
                alt={worship.title}
                className="aspect-video w-full md:w-40 object-cover rounded-lg !my-0"
                onClick={() => openModal(worship.url)}
            />
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg overflow-hidden max-w-3xl w-full">
                        <div>
                            <Button variant={"ghost"} onClick={closeModal}>
                                <XIcon />
                            </Button>
                            <iframe
                                className="w-full h-64 sm:h-96"
                                src={selectedVideo}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default YoutubeThumbnail;
