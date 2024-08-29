import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "73";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK73() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Dengarlah suara Tuhan; "Marilah orang
berdosa, yang memikul beban berat, Aku
b'rikan sentosa".

Koor :
T'rimalah s'lamat-Nya, t'rimalah
s'lamat-Nya, t'rimalah s'lamat-Nya,
s'karang t'rima selamat-Nya, s'karang
t'rima selamat-Nya.

2. Walau Ia jauh di surga, engkau tetap
dipanggl-Nya, terimalah undangan-Nya:
"Datanglah s'karang juga".

3. Suara Tuhan nanti diam, tak'kan
panggil engkau lagi, baiklah cari
perlindungan dalam darah yang suci.

4. Kehidupan hanya ada dalam Tuhan
Yesus saja; Di beli pun tidak dapat, itu
anug'rah Allah.
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
