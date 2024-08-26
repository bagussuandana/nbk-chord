import appConfig from "@/app.config";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
    ArrowLeft,
    List,
    ListMusic,
    ListMusicIcon,
    ListStartIcon,
} from "lucide-react";

type Props = {
    song: {
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
    return (
        <div>
            <h1 className="sr-only">
                {song.title} {song?.description} {song.title.replace(/-/g, " ")}
            </h1>
            <div className="flex w-full justify-between items-center">
                <div className="text-lg font-normal">{song.title}</div>
                <Link href={"/song-list"}>
                    <Button size={"icon"}>
                        <ListMusicIcon />
                    </Button>
                </Link>
            </div>
            <h2>{song?.description}</h2>
            <p className="capitalize">
                Chord : {song?.chord} | {song?.rhythm} | {song?.tempo} |{" "}
                {tempoName}
            </p>
        </div>
    );
};

export default SongHeader;
