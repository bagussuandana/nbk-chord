import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "3";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK3() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Betapa mulia Yesus Tuhanku, besar
cinta-Nya pada diriku, Ditinggalkan-
Nya surga yang mulia , kar'na tak
terhingga kasih yang nyata

Koor :
Yesus Tuhanku, 'ku muliakan
hingga akhir hidup ini; Ku mau
tinggikan, 'ku mau masyhurkan :
Yesusku, sampai s'lamanya .

2. Apa dayaku untuk membalas cinta
kasih-Nya begitu mulia? Seg'nap
hidupku hanya untuk-Mu, aku mau
persembahkan atas medzbah-Mu

3. Kasih sempurna, indah, mulia! Bapa
telah b'rikan pada anak-Nya; Begitu
luhur tak 'da taranya! Kasih Maha
Kuasa kekal s'lamanya
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
