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
Intro:
565434
F D7 Gm
321171
C C7 F

F    Bb       F  Am
Mari kita s'mua
      Bb     Gm  C    F
b'ri syukur pada Tuhan,
     F       Bb     Am Dm
yang b'rikan kasih-Nya
   Gm    C   C      F
kepada kita s'kalian;
 C      F     C  C
Oleh Kristus, kita
    F    G7      C  C7
t'rima anug'rah-Nya,
   F    D7   Gm
tiap-tiap hari
  C      C7    F
besar kecinta'n-Nya.

Mulia dan kaya
Tuhan yang b'rikan s'mua
kepada anak-Nya
dib'ri hidup sejaht'ra;
Oleh Roh yang suci
kita dikuatkan-Nya
dari bahaya pun
k'lak dihindarkan-Nya.

Pujilah Allah Hu,
yang duduk di takhta-Nya;
Oleh s'gala mahluk
syukur dib'ri pada-Nya;
Allah, Bapa, Put'ra
serta Roh Suci-Nya,
Tritunggal yang Esa
yang kekal s'lamanya.
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
