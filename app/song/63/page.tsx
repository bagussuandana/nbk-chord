import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "63";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK63() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Apa yang sedang 'kau cari dalam
dunia yang fana? Yesus saja dapat
memb'ri perdamaian yang baka.

Koor :
Marilah dengan bebanmu,
damai dib'rikan Tuhan Hu; Datang
seb'lum kasip waktu, pada kaki
Tuhanmu.

2. Siapa saja Tuhan t'rima, yang
mohon keampunan; Padanya dib'ri
sentosa dengan berkelimpahan.

3. Dengarlah suara Tuhanmu;
"marilah kepada-Ku!" M'ngapa 'kau
harus menunggu, seg'ra waktumu
lalu.
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
