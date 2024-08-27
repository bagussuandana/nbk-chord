import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "36";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK36() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. O, Yesus, kalau 'ku kenang hidup dan
kasih-Mu. Hati jiwaku bergirang, merindu
pada-Mu.

2. Ta'da nama di dunia semanis nama-Mu
Engkau juga Juru S'lamat Pemimpin
hidupku.

3. Harapan bagi yang sesal, Penolong
yang penat; Cinta-Mu sungguhlah indah,
bagi yang tersesat.

4. Siapa yang dapat kes'nangan, menjadi
milik-Mu? Hanya yang mengenal Tuhan
,dan cinta pada-Mu.

5. O, Yesus kesenanganku, nama-Mu yang
mulia . Tinggallah padaku s'lalu sampai
selamanya.
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
