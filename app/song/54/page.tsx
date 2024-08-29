import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "54";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK54() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Roh-Elkudus, Roh Tuhan!
Turunlah dari surga, b'rikanlah
hidup baru, biar Tuhan jadi nyata.

Koor :
Marilah, ya, Roh Kudus! dan
penuhkan hatiku;
Dengan api bernyala, api suci dan
kuasa , mari s'karang, penuhkanlah
hatiku.

2. Tuhan, aku mau kerja, turut
p'rintah-Mu saja, mencari jiwa-jiwa
yang hidup dalam dosa.

3. S'moga k'rajaan Allah datanglah
dengan kuasa, kehendak-Mu jadilah
di seluruh dunia!.
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
