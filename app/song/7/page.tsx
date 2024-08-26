import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "7";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK7() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Kudus, kudus, kudus! Allah yang Kuasa !
dari pagi hingga malam 'ku puji t'rus;
Kudus, kudus, kudus, Tritunggal yang
Esa! Bapa dan Put'ra serta Roh Kudus.

2. Kudus, kudus, kudus! seluruh umat,
b'rikanlah ibadah kepada Tuhanmu;
S'mua orang saleh dan para malaikat, puji
dan sembah Tuhan selalu.

3. Kudus, kudus, kudus! tak s'orang dapat
memandang wajah-Mu yang sangat
cemerlang; Hanya orang suci dapatlah
melihat, Enngkau Pengasih serta
Penyayang

4. Kudus, kudus, kudus! Allah Yang Esa!
Seg'nap ciptaan-Mu memujikan Engkau;
Kudus, kudus, kudus! Besar kasihan-Mu:
Allah Tritunggal kekal s'lamanya.
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
