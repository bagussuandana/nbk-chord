import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "natal-di-hatiku";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function NatalDiHatiku() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Bait :
G    Am    Bm
Se - per - ti
C      D       G
Pa  -  lung - an
C           G
Layakkanlah Hatiku
  Am          D
MenyambutMu Tuhan

G    Am     B
Se - per - ti
      C            Cm
Emas, Kemenyan Dan Mur
     G        A           D
Biar Hidupku Berkenan Pada-Mu

Reff :
      G         D     Em
Sebab Natal Tak Akan Berarti
   Bm      C  
Tanpa KasihMu
      Am     D
Lahir Di Hatiku

      G      D
Hanya BersamaMu
      Em    Bm
Yesus Kurasakan
    C 
Selalu
     Am        D      G
Indahnya Natal Di Hatiku

Bridge :
     C         D
Bersama Paduan Suara
   B           Em
Surga Ku Bernyanyi
    C           D            Em
Kemuliaan Di Tempat Maha Tinggi

      C          D
Dan Damai Sejahtera
       B           Em
Di Antara Manusi - a
       C           Am      D
Yang Hidupnya Berkenan KepadaMu
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
