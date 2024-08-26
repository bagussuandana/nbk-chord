import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "10";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK10() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Mari kita s'mua b'ri syukur pada
Tuhan, yang b'rikan kasih-Nya kepada
kita s'kalian; Oleh Kristus, kita t'rima
anug'rah-Nya, tiap-tiap hari besar
kecinta'n-Nya.

2. Mulia dan kaya Tuhan yang b'rikan
s'mua kepada anak-Nya dib'ri hidup
sejaht'ra; Oleh Roh yang suci kita
dikuatkan-Nya dari bahaya pun k'lak
dihindarkan-Nya.

3. Pujilah Allah Hu, yang duduk di
takhta-Nya; Oleh s'gala mahluk syukur
dib'ri pada-Nya; Allah, Bapa, Put'ra serta
Roh Suci-Nya, Tritunggal yang Esa yang
kekal s'lamanya.
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
