import appConfig from "@/app.config";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: appConfig.song_list.title,
  description: appConfig.song_list.description,
};
export default function SongList() {
  const { songs } = appConfig;

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 xl:grid-cols-8 gap-4">
          {songs.map(
            (song: {
              id: string;
              title: string;
              description: string;
              chord: string;
              rhythm: string;
              tempo: string;
            }) => (
              <Link href={`/song/${song.id}`} key={song.id} className="w-full">
                <Button className="w-full" size={"sm"}>
                  {song.title.replace(/-/g, " ")}
                </Button>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
}
