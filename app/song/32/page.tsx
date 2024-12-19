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
       C                   F
Ku tak mengerti mengapa Ia datang
         C                G  G7
ke dalam dunia yang g'lap fana,
          C                     F
di kandang Betlehem yang sangat hina
          C       Dm     G     C  G
Yesus lahir, baring di palungan.

Koor :
        C          F            C   Em 
Ini 'ku tahu : Ia datang kar'na cinta,
          Am        D        G  G7
tak hiraukan sengsara dan hina;
       C         F         C       Am
Cinta ajaib yang b'ri kita kes'lamatan,
      Dm             G          C
hidup kekal, sentosa dan bahagia.

Ku tak mengerti Ia yang dimuliakan
oleh malaikat disurga baka,
mau menderita dan disengsarakan,
Akhirnya mati disalib hina.

Ku tak mengerti mengapa Ia rela
menjadi sahabat manusia,
tak hiraukan berdosa, miskin, kaya,
bagi semua besar kasih-Nya.

Ku tak mengerti Ia mau menyediakan
surga baka bagi kita s'mua,
hidup kekal dalam kemuliaan-Nya ,
senang, sentosa di rumah Bapa.
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
