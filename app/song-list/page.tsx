import appConfig from "@/app.config";
import { Button } from "@/components/ui/button";
import { Song } from "@/types/song";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: appConfig.song_list.title,
    description: appConfig.song_list.description,
};

const groupSongsByIdRange = (songs: Song[], rangeSize: number) => {
    const grouped: { [key: string]: Song[] } = {};

    songs.forEach((song) => {
        const groupId =
            Math.floor((parseInt(song.id) - 1) / rangeSize) * rangeSize + 1;
        const rangeKey = `${groupId}-${groupId + rangeSize - 1}`;

        if (!grouped[rangeKey]) {
            grouped[rangeKey] = [];
        }
        grouped[rangeKey].push(song);
    });

    return grouped;
};
export default function SongList() {
    const { songs, song_choruses } = appConfig;
    const groupedSongs = groupSongsByIdRange(songs, 100);

    return (
        <>
            <div className="container mx-auto p-4">
                {Object.keys(groupedSongs).map((rangeKey) => (
                    <div key={rangeKey} className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">
                            NBK: {rangeKey}
                        </h2>
                        <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
                            {groupedSongs[rangeKey].map((song: any) => (
                                <Link
                                    href={`/song/${song.id}`}
                                    key={song.id}
                                    className="w-full"
                                >
                                    <Button className="w-full" size="sm">
                                        {song.title.replace(/-/g, " ")}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
                <section>
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold mb-4">
                            NBK Song Chorus
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                            {song_choruses.map((chorus: any) => (
                                <Link
                                    href={`/song/chorus/${chorus.id}`}
                                    key={chorus.id}
                                    className="w-full"
                                >
                                    <Button className="w-full" size="sm">
                                        {chorus.title.replace(/-/g, " ")}
                                    </Button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
