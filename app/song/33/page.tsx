import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "33";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK33() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Mari bersama memuji, dengan
m'laikat Tuhan; Ribuan lidah
mereka satu kesukaan.

Koor :
Haleluya! Pujilah! Tuhan mati
ganti kita; Haleluya! Haleluya!
Haleluya! Amin.

2. Yesus patut akan t'rima hormat
dan pujian; Kuasa dan pemeintahan
pada-Nya dib'rikan.

3. Segala bangsa hendaklah
memujikan Dia Yang duduk di atas
takhta, puji Domba Allah!
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
