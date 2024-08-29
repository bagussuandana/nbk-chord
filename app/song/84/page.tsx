import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "84";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK84() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Mari kepada Juru S'lamat, orang
berdosa, jangan lambat; Ia
memanggil yang tersesat: "Mari
kepada-Ku!"

Koor :
Mulia kalau kita semua
dengan hati suci sempurna; Bertemu
k'lak di dalam surga, di rumah yang
kekal.

2. Marilah dengar suara Tuhan, biar
hatimu jadi bergirang; Dengan rela
pilihlah Tuhan, jangan lambat, mari!

3. Pikirlah baik , kini waktumu, turut
p'rintah-Nya, jangan tunggu; Sedang
Tuhan masih berseru: "Mari kepada-
Ku!"
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
