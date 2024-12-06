import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "bila-kulihat-bintang-gemerlapan";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function BilaKulihatBintangGemerlapan() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Verse 1 :
       A                  D
Bila kulihat bintang gemerlapan
          A     E          A    E
Dan bunyi guruh riuh ‘ku dengar
        A                D
Ya Tuhanku tak putus aku heran
        A    E            A   E
Melihat ciptaan-Mu yang besar

Chorus :
       A      D          A  F#m
Maka jiwa---kupun memuji-Mu
          Bm E7        A  E
Sungguh besar Kau Allahku
       A      D          A  F#m
Maka jiwa---kupun memuji-Mu
          Bm E         A
Sungguh besar Kau Allahku

Verse 2 :

Ya Tuhanku, ‘pabila kure-nungkan 
Pemberian-Mu dalam Penebus
‘Ku tertegun bagiku dicu-rahkan
Oleh Putra-Mu darah-Nya kudus

Verse 3 :
‘Pabila nanti Kristus memanggilku
Sukacitaku amatlah besar
Kar’na terkabullah yang kurindukan
Melihat Dikau Tuhanku akbar
`;
    return (
        <SongWrapper isWorship>
            <SongHeader song={worship} isWorship />
            <TransposerWrapper>
                <Transposer
                    initialKey={worship.chord as string}
                    songText={worshipText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
