import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "44";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK44() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Yesus, nama yang termulia di dunia
dan surga, s'gala makhluk menyembah-
Nya dan setan larilah.

Koor :
Tak ada lagi nama lain yang b'rikan
sentosa; Cukuplah Yesus disalib bagi kita
s'mua.

2. Yesus lepaskan umat-Nya dari rantai
dosa, yang lemah pun dib'ri kuasa dengan
anug'rah-Nya.

3. Biar s'mua orang t'rima anugerah Allah,
seperti 'ku, s'moga m'reka dipeluk kasih-
Nya.

4. Bila ajalku t'lah tiba 'ku masuk ke
surga sambil memuji nama-Nya selama-
lama-Nya.
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
