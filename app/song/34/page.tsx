import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "34";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK34() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Merdu bunyi nama Tuhan bagi anak
Allah; Menghilangkan dukacita dan
ketakutannya.

Koor :
Merdulah bunyi nama-Nya! Merdulah
bunyi nama-Nya! Merdulah bunyi nama-
Nya! Ku cinta nama-Nya!

2. Hati hancur disembuhkan dib'ri
penghiburan; Bagi yang lapar dan lemah
dikuatkan jiwanya.

3. Nama Tuhan, perlindungan serta
perisaiku! Dia penuh karunia, sumber
kekaya'nku.

4. Tak cukup s'gala pujian, membalas cinta-
Nya, tetapi nanti di surga pujianku
sempurna.
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
