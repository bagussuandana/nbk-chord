import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "79";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK79() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Jangan dukakan Roh Suci dan tak
mempedulikan-Nya, jangan 'kau
keraskan hati, t'rima s'lamat s'karang
juga!

2. Lekaslah, kasip waktumu, jangan
tolak karunia-Nya , datang s'karang,
Tuhan tunggu, t'rima s'lamat s'karang
juga!

3. Tuhan masih ingin memb'ri
kes'lamatan yang abadi; Janganlah
tolak kasih-Nya, t'rima s'lamat
s'karang juga!

4. Sabda Tuhan: "Ku 'kan t'rima yang
mau datang kepada-Ku. Percayalah
dengan sungguh, t'rima s'lamat
s'karang juga!
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
