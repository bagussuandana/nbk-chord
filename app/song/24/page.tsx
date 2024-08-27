import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "24";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK24() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Cinta sungguh ajaib dan mulia,
cintanya Yesus yang tak terduga ;
Yang t'lah hapuskan s'gala dosaku,
cintanya Yesus, Tuhanku.

Koor :
Ajaib dan mulia sungguh tak
terkata, cinta heran dan sangat
berkuasa; Cinta indah sungguh luar
biasa bagiku orang yang berdosa.

2. Cinta yang mencari dan m'nemukan
hidupku dalam dosa ke g'lapan; Ku
diampuni dan di s'lamatkan oleh darah
Yesus, Tuhan.

3. Bahagia dan sentosa kini hidupku
dengan Tuhanku Yesus; Tak 'da yang
dapat c'raikanku lagi dari kuasa
Penebus.
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
