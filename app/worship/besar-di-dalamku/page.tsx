import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "besar-di-dalamku";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function BesarDiDalamku() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
1111 7777 6666 7777
C   G/B   Am   F 
  Ooo.. Ooo..
1111 7777 6666 7777
C  G/B  Am  F 
  Ooo.. Ooo...

[Verse 1]
C          G/B           Am
 Selangkah demi selangkah,
        F          C
Ku maju tiada lelah
      G/B            Am
Sekalipun ku berjalan
         F            C
Dalam lembah kekelaman
         G/B               Am
Ku tak takut, ku tak gentar
      F
Semua musuh gemetar

[Instrumental]
1111 7777 6666 7777
C   G/B  Am   F

[Verse 2]
C       G/B         Am
 Imanku tak perlu besar
        F                C
Cukup sebutir pun dahsyat
          G/B          Am
Kar’na Dia yang bekerja,
         F           C
Bukanlah kuat gagahku
            G/B         Am
Ku tak takut, ku tak gentar
        F          C  G/B  Am  F
Semua musuh gemetar
                   C  G/B  Am  F
Semua musuh gemetar

[Chorus]
  C        G/B
Yesus Tuhan
            Am          F
Engkau yang s’lalu bekerja
     C        G/B
Di dalam hidupku
             Am       F
Dan t’lah menjadi kuatku
    Am    G
S’karang aku
            F          C/E
S'lalu 'kan meninggikanMu
    F         G           C
KesetiaanMu besar di dalamku.

[Interlude] 2X
1111  7777 6666 7777
F    Am    G
 Ooo.. Ooo..
1111  7777 6666 7777
F   Am    G 
 Ooo.. Ooo..

[Bridge]
     F          Am
Bila Kau di sisiku,
     G
Pada siapa kutakut
       F          Am          G
Kar’na Kaulah perisai dan kuatku.

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
