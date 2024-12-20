"use client";

import { Worship } from "@/types/worship";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X, XIcon } from "lucide-react";
import Link from "next/link";

type Props = {
    worship: Worship;
};

const WorshipCard = ({ worship }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedVideo, setSelectedVideo] = useState<string>("");

    const getYouTubeThumbnail = (url: string) => {
        const worshipId = url.split("v=")[1].split("&")[0];
        return `https://img.youtube.com/vi/${worshipId}/hqdefault.jpg`;
    };
    const getYouTubeEmbedUrl = (url: string) => {
        const videoId = url.split("v=")[1].split("&")[0];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    const openModal = (url: string) => {
        setSelectedVideo(getYouTubeEmbedUrl(url));
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedVideo("");
    };

    return (
        <div className="flex relative flex-col md:flex-row items-center bg-white dark:bg-black rounded-lg shadow-md px-2 py-4 space-x-4 hover:shadow-lg transition-shadow">
            <Image
                width={160}
                height={90}
                src={getYouTubeThumbnail(worship.url)}
                alt={worship.title}
                className="aspect-video w-full md:w-40 object-cover rounded-lg !my-0"
                onClick={() => openModal(worship.url)}
            />
            <div className="flex flex-col space-y-2">
                <Link
                    href={`/worship/${worship.id}`}
                    className="hover:underline no-underline"
                >
                    <div className="text-md md:text-lg font-semibold">
                        {worship.title}
                    </div>
                </Link>
                <span className="dark:text-gray-600 text-gray-300  text-sm md:text-base">
                    {worship.creator}
                </span>
                <span className="text-red-600 text-xl">{worship.chord}</span>
            </div>

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
        </div>
    );
};

export default WorshipCard;
