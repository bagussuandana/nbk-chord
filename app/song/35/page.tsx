import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "35";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK35() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Nama Yesus, o, sungguhlah, lembut
dan manis bunyinya! Yang membawa
perdamaian, nama-Nya indah mulia .

Koor :
Yesus, nama Tuhanku, Yesus,
Juru S'lamatku, Yesus, segenap dunia,
m emujikan nama-Nya.

2. Nama yang amat mulia,
menghilangkan dukacita. Ia
menanggung bebanku, 'ku cinta nama
Yesus.

3. O, Yesus, Juru S'lamatku, 'ku
hendak s'tia selalu, 'ku mau memuji
nama-Mu, hingga tiba ajalku.
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
