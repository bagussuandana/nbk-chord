"use client";
import appConfig from "@/app.config";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, ListMusicIcon } from "lucide-react";

type Props = {
    song: {
        id: string;
        title: string;
        description: string;
        chord: string;
        rhythm: string;
        tempo: string;
    };
};

const SongHeader = ({ song }: Props) => {
    const { tempos } = appConfig;
    const getTempoName = (bpm: number): string | null => {
        for (const tempo of tempos) {
            const [min, max] = tempo.bpm_range.split("-").map(Number);
            if (bpm >= min && bpm <= max) {
                return tempo.name;
            }
        }
        return null;
    };
    const tempoName = getTempoName(song?.tempo ? Number(song?.tempo) : 0);
    const songID = Number(song?.id);
    const savePrevUrl = () => {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(
                "prevUrl",
                window.location.pathname.split("/").slice(-1)[0]
            );
        }
    };
    return (
        <div>
            <h1 className="sr-only">
                {song.title} {song?.description} {song.title.replace(/-/g, " ")}
            </h1>
            <div className="flex w-full justify-between items-center">
                <h1 className="uppercase font-bold">{song.title}</h1>
                <Link href={"/song-list"}>
                    <Button size={"icon"}>
                        <ListMusicIcon />
                    </Button>
                </Link>
            </div>
            <div className="flex w-full justify-between items-center mt-4">
                {songID > 1 ? (
                    <Link href={`/song/${songID - 1}`}>
                        <Button variant={"outline"} onClick={savePrevUrl}>
                            <ChevronLeft className="w-5 h-5 -ml-2" />{" "}
                            {`NBK ${songID - 1}`}
                        </Button>
                    </Link>
                ) : (
                    <div></div>
                )}
                <Link href={`/song/${songID + 1}`}>
                    <Button variant={"outline"} onClick={savePrevUrl}>
                        {`NBK ${songID + 1}`}
                        <ChevronRight className="w-5 h-5 -mr-2" />
                    </Button>
                </Link>
            </div>

            <h2 className="capitalize">
                {song?.description} <span></span>
            </h2>
            <p className="capitalize">
                Chord : <span className="text-primary">{song?.chord}</span> |{" "}
                <span className="text-black">{song?.rhythm}</span> |{" "}
                {song?.tempo} | {tempoName}
            </p>
        </div>
    );
};

export default SongHeader;
