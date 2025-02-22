"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";

import { Clipboard, Share } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import WhatsappIcon from "./svg/whatsapp-icon";
interface Props {
    currentUrl: string;
}
const ShareDropdown = ({ currentUrl }: Props) => {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    };

    const handleShareToWhatsApp = () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
            currentUrl
        )}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                    <Share size={16} />
                    Share
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-36">
                <DropdownMenuItem onClick={handleCopyLink}>
                    <Clipboard className="mr-2 h-4 w-4" />
                    {copied ? "Link Copied!" : "Copy Link"}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleShareToWhatsApp}>
                    <WhatsappIcon className="mr-2 h-4 w-4" />
                    Whatsapp
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ShareDropdown;
