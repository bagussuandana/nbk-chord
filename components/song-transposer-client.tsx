"use client";

import { useState } from "react";
import Transposer from "@/lib/transposer";
import TransposerWrapper from "@/components/transposer-wrapper";
import NumberChordWrapper from "./number-chord-wrapper";
import { Button } from "./ui/button";

type SongTransposerClientProps = {
    initialKey: string;
    songText: string;
    songNumber?: string;
};

export default function SongTransposerClient({
    initialKey,
    songText,
    songNumber,
}: SongTransposerClientProps) {
    const [mode, setMode] = useState<"letter" | "number">("letter");

    return (
        <div>
            {songNumber && (
                <div className="flex gap-2 mb-4">
                    <Button
                        onClick={() => setMode("letter")}
                        variant={mode === "letter" ? "default" : "outline"}
                    >
                        Letter
                    </Button>
                    <Button
                        onClick={() => setMode("number")}
                        variant={mode === "number" ? "default" : "outline"}
                    >
                        Number
                    </Button>
                </div>
            )}

            {mode === "letter" ? (
                <TransposerWrapper>
                    <Transposer initialKey={initialKey} songText={songText} />
                </TransposerWrapper>
            ) : (
                <NumberChordWrapper songText={songNumber} />
            )}
        </div>
    );
}
