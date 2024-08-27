import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "49";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK49() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Marilah, Roh Suci, mari sucikan jiwaku
kini, penuhi hatiku, penuhi hatiku supaya
kehidupanku penuh dengan kecinta'n-Mu;
Inilah doaku, inilah doaku, penuh dengan
kecinta'n-Mu, inilah doaku.

2. Bukanlah kuasa diriku, melainkan
kuasa Roh-Mu yang kalahkan setan, yang
kalahkan setan; Roh itu b'ri pertolongan
untuk kerja bagi Tuhan, Roh memb'ri
kekuatan; Roh memb'ri kekuatan untuk
kerja bagi Tuhan, Roh memb'ri kekuatan.

3. Genapilah perjanjian -Mu, Roh Suci,
pimpinlah aku dalam kebenaran, dalam
kebenaran; S'moga Roh-Mu menyucikan
seluruh hidupku, Tuhan, inilah doaku;
S'moga Roh-Mu menyucikan seluruh
hidupku, inilah doaku.
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
