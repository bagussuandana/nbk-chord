import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "21";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK21() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Baiklah alam s'kalian mengangkat suara-Nya,
memujikan nama Yesus selamanya, memujikan
nama Yesus selamanya; Patutlah syukur dan puji,
patutlah syukur dan puji, pada Juru s'lamat dib'ri,
pada Juru s'lamat dib'ri.

2. Ta 'da yang lebih baik bagi manusia, untuk
menghilangkan dosa dan susahnya,untuk
menghilangkan dosa dan susahnya; Ta 'da kuasa
yang menebus, Ta 'da kuasa yang menebus,
melainkan Tuhanku, Yesus, melainkan Tuhanku,
Yesus.

3. Orang dosa dengar suara Tuhanmu, untuk
t'rima s'lamat hati dan jiwamu, untuk t'rima
s'lamat hati dan jiwamu, Mari kita memujikan,
mari kita memujikan, kebesaran Kasih Tuhan,
kebesaran Kasih Tuhan.

4. Marilah bersama kita menyanyikan hal tebusan
muli a dib'ri oleh Tuhan, hal tebusan mulia dib'ri
oleh Tuhan; Bagi s'mua manusia, bagi s'mua
manusia, ampun disediakan-Nya, ampun
disediakan-Nya.
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
