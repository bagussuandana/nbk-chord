import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "95";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK95() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Sudahkah 'kau menerima undangan,
hadir di perjamuan Tuhan? Orang berdosa,
mari datang s'karang, turutlah perjamuan
Tuhan.

Koor :
Marilah, marilah, turutlah perjamuan
Tuhan, sudahkah hatimu suci, sedia?
Turutlah perjamuan Tuhan.

2. Berjuta-juta orang sudah datang, namun
tempatnya masih ada; Janganlah takut,
datanglah sekarang kar'na tempatnya
tersedia.

3. Raja itu masih mengundang kita hadir di
perjamuan Tuhan! Siapa suka boleh datang
dan t'rima undangan perjamuan Tuhan.

4. K'lak dengan jubah yang gilang
gemilang, kita turut perjamuan Tuhan; Kita
s'kalian mendengar suara-Nya :
"Mari hamba yang baik dan s'tia".
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
