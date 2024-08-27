import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "19";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK19() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Tuhan, kekuatanku , kupuji nama-Nya;
Ku 'kan menang s'lalu meskipun
ditentang; Kuasa iblis akan kalah, kuasa
Tuhan pasti menang!

2. Tuhan pelindungku, s'karang dan
s'lamanya, dengan Dia hidupku tinggal
tetap teguh; Kuasa musuh akan kalah,
kuasa Tuhan pasti menang!

3. Tuhan Gembalaku, tahu kebutuhanku
dan mengaruniakan makanan jiwaku;
Maut dan dosa akan kalah, kuasa Tuhan
pasti menang!

4. Tuhanlah Bapaku, yang cinta anak-Nya;
Ia tak 'kan tinggalkan, Ia s'lalu sertaku;
Kuasa dunia akan kalah, kuasa Tuhan
pasti menang!
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
