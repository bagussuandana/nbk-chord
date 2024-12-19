import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "254";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK254() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
    C         G        C
Ku datang pada-Mu, Tuhan,
    C     Em       F   C
dan memohon pertolongan,
    C     G     C
dengarlah doaku;
C  C7          F   C
Di dalam suka dan duka,
G   C     G     F   G   C
Engkaulah yang kubutuhkan,
 F     C    G    C
'Kau s'mua bagiku.

Koor :
C     C7    F   C
S'mua dalam semua,
F   C     D       C
bagiku Kristus s'mua;
C     C7    F   C
S'mua dalam s'mua,
F   C     G     C
bagiku Ia s'mua.

S'gala kemuliaan dunia,
kehormatan, kes'nangannya,
s'mua akan lenyap;
Dengan-Mu 'ku pikul salib,
'ku rasa berbahagia,
'Kau s'mua bagiku

Di depan takhta-Mu Tuhan,
'ku mengaku, aku lemah,
dan tidak berdaya;
Tetapi kuasa darah-Mu
sanggup menghapuskan dosa,
'kau s'mua bagiku.

Penyakit dan pencobaan
tak akan memisahkanku
dari kasih Tuhan,
meskipun 'ku tak mengerti,
'ku tahu Ia akan
 menjadi semua bagiku.
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
