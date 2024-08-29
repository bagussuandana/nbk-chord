import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "100";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK100() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Adakah tersedia rahmat Tuhan
yang mulia bagi orang durhaka
s'perti 'ku ini juga?

Koor :
Allah cinta adanya, telah 'ku
alaminya; Yesus hidup dan
mencintaiku juga.

2. Anug'rah-Nya t'lah lama'ku tolak
senantiasa, aku tak menghiraukan
juga panggilan Tuhan.

3. Bagiku Juru S'lamat menanggung
segala laknat; Bilur yang di badan-
Nya kar'na dosa-dosaku.
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
