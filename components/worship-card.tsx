"use client";

import { Worship } from "@/types/worship";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X, XIcon, Youtube } from "lucide-react";
import Link from "next/link";
import YoutubeThumbnail from "./youtube-thumbnail";

type Props = {
    worship: Worship;
};

const WorshipCard = ({ worship }: Props) => {
    return (
        <div className="flex relative flex-col md:flex-row items-center bg-white dark:bg-black rounded-lg shadow-md px-2 py-4 space-x-4 hover:shadow-lg transition-shadow">
            <YoutubeThumbnail worship={worship} />
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
        </div>
    );
};

export default WorshipCard;
