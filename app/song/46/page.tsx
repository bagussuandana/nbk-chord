import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "46";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK46() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Yesus Tuhanku, Rajaku yang mulia , 'ku
nyanyi mazmur kepujian-Mu ; Hendak 'ku
cinta, puji dan sembah, hingga
kupandang wajah-Mu.

2. Yesus terangku, cah'ya di jalanku, lebih
t'rang dari matahari; T'rang-Mu
membawa hidup dan s'lamat, yang
tinggal tetap dan benar.

3. Engkaulah Jalan, Keb'naran dan Hidup
yang mengantarku t'rus ke surga,
Engkaulah S'habat, Imam dan Raja,
Tuhanku yang termulia.

4. Tak seorang pun yang mengasihiku
dengan tetap seperti Engkau; Ta'da di
dunia yang kumuliakan dan 'ku cinta
s'perti Tuhan.
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
