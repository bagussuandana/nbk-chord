import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "13";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK13() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Pujilah Raja di surga, b'rilah
hormat pada-Nya;Dosa kita
diampuni, patut kita menyanyi: Puji
Tuhan! Puji Tuhan! Puji Dia
s'lamanya.

2. Puji kar'na anug'rah-Nya bagi
leluhur kita; Hingga s'karang tetap
sama sampai s'lama-lamanya; Puji
Tuhan! Puji Tuhan! Tuhan yang
tetap s'tia.

3. S'perti bapak penuh cinta, Ia
tahu k'lemahan kita; Ditangan-Nya
kita s'lamat dari s'mua
penggodaan; Puji Tuhan ! Puji
Tuhan! Besarlah kecinta'n-Nya.
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
