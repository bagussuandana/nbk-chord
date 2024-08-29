import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "98";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK98() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Tempat perlindungan tetap dalam
bahaya dan susah, t'rang pada jalan
yang gelap, hanya dekat Yesus saja.

Koor :
Hati hancur nanti sembuh, gugur
rantai dosa itu; Darah Yesus di Golgota
menebus orang berdosa.

2. Bawalah dukacitamu dan s'mua dosa
pada-Nya, kar'na kematian-Nya itu
memb'ri damai dan sentosa.

3. Yang menyesal dan bertobat tak lagi
mau melawan t'rus, balik dari jalan
sesat, jiwanya akan ditebus.

4. Darah Tuhan yang tertumpah di atas
Bukit Golgota, kar'na kurban, manusia
didamaikan dengan Allah.
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
