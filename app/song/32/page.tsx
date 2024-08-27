import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "32";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK32() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Ku tak mengerti mengapa Ia datang ke
dalam dunia yang g'lap fana, di kandang
Betlehem yang sangat hina Yesus lahir,
baring di palungan.

Koor :
Ini 'ku tahu : Ia datang kar'na cinta, tak
hiraukan sengsara dan hina;
Cinta ajaib yang b'ri kita kes'lamatan, hidup
kekal, sentosa dan bahagia.

2. Ku tak mengerti Ia yang dimuliakan o leh
malaikat disurga baka, mau menderita dan
disengsarakan, Akhirnya mati disalib hina.

3. Ku tak mengerti mengapa Ia rela menjadi
sahabat manusia, tak hiraukan berdosa,
miskin, kaya, bagi semua besar kasih-Nya.

4. Ku tak mengerti Ia mau menyediakan
surga baka bagi kita s'mua, hidup kekal
dalam kemuliaan-Nya , senang, sentosa di
rumah Bapa.
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
