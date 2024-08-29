import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "76";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK76() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Dosa merah bak kirmizi akan menjadi
putih, dosa merah bak kirmizi akan
menjadi putih sekalipun merah padma,
menjadi putih! Dosa merah bak kirmizi,
dosa merah bak kirmizi, akan menjadi
putih, akan menjadi putih!

2. Dengar suara yang memanggil, baliklah
pada Allah, baliklah pada Allah, cinta
Tuhan ajaib benar, rahmat-Nya besar!
Dengar suara yang memanggil, dengar
suara yang memanggil, baliklah pada
Allah, baliklah pada Allah!

3. Ia akan mengampuni dan tak ingat
dosamu, Ia akan mengampuni dan tak
ingat dosamu, demikian firman Allahmu:
"Pandanglah Aku !" Ia akan mengampuni,
Ia akan mengampuni, dan tak ingat
dosamu, dan tak ingat dosamu.
`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
