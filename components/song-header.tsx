import appConfig from "@/app.config";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  List,
  ListMusic,
  ListMusicIcon,
  ListStartIcon,
} from "lucide-react";

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
  return (
    <div>
      <h1 className="sr-only">
        {song.title} {song?.description} {song.title.replace(/-/g, " ")}
      </h1>
      <div className="flex w-full justify-between items-center">
        <div className="text-lg font-normal uppercase">{song.title}</div>
        <Link href={"/song-list"}>
          <Button size={"icon"}>
            <ListMusicIcon />
          </Button>
        </Link>
      </div>
      <div className="flex w-full justify-between items-center mt-4">
        {songID > 1 ? (
          <Link href={`/song/${songID - 1}`}>
            <Button variant={"outline"}>
              <ChevronLeft className="w-5 h-5 -ml-2" /> {`NBK ${songID - 1}`}
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        <Link href={`/song/${songID + 1}`}>
          <Button variant={"outline"}>
            {`NBK ${songID + 1}`}
            <ChevronRight className="w-5 h-5 -mr-2" />
          </Button>
        </Link>
      </div>
      <h2 className="capitalize">{song?.description}</h2>
      <p className="capitalize">
        Chord : <span className="text-primary">{song?.chord}</span> |{" "}
        <span className="text-black">{song?.rhythm}</span> | {song?.tempo} |{" "}
        {tempoName}
      </p>
    </div>
  );
};

export default SongHeader;
