import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "segenap-hidup";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function SegenapHidup() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro:
G D/F# Em
G D/F# Em
G D/F# Em
G D/F# Em D

Verse 1
    G                     C 
Dalam setiap langkah Kau ada
    Bm               C
Dalam kesesakan Kau hadir
G   
Lewati sukaku
   D        Em
Lewati dukaku
  Am           D
Kuserahkan semua

Verse 2
     G                    C
Tempatku berharap hanya Kau
     Bm                    C
Tempatku bersandar bersamaMu
   G 
Lewati sukaku
   D        Em
Lewati dukaku
   Am          D 
Kuserahkan semua
     Am                   D
Biar jadi persembahan bagiMu

Reﬀ:
        G                 D/F#
Segenap hidup Segenap nafasku
       Em                      D Bm
Jadi persembahan di bawah kakiMu
          C           Bm Em
Kebanggaanku Kejayaanku
        F                     D
Tak ada artinya selain untukMu
        G                  D/F#
Segenap hidup Segenap nafasku
        Em                      D Bm
Jadi persembahan di atas mezbahMu
         C             Bm Em
Kekuatanku Pengharapanku
        Am            D     G
Kuserahkan semua hanya bagiMu

Interlude:
3 5  1 2 5  7 1
G    D/F#   Em
3 5  1 2 5  7 1 2
G    D/F#   Em  D
 
Verse 2
  G                       C
Tempatku berharap hanya Kau
  Bm                      C
Tempatku bersandar bersamaMu
   G 
Lewati sukaku
   D        Em
Lewati dukaku
   Am      C    D 
Kuserahkan semua
   Am      C    D 
Kuserahkan semua
      Am            C       D
Biar jadi persembahan bagiMu

Reﬀ:
        G                 D/F#
Segenap hidup Segenap nafasku
          Em                   D Bm
Jadi persembahan di bawah kakiMu
          C           Bm Em
Kebanggaanku Kejayaanku
        F                     D
Tak ada artinya selain untukMu
        G                  D/F#
Segenap hidup Segenap nafasku
        Em                     D Bm
Jadi persembahan di atas mezbahMu
         C            Bm Em
Kekuatanku Pengharapanku
        Am        D         G
Kuserahkan semua hanya bagiMu

Interlude:
55  44 33
D   G
55  44 33
D   G
6 4  3 4 5 1
C Bm  Em
4 3 2 1 1
Am D G

Bridge: (4x)
    D     G
Kusembah Kau Tuhan
    D     G
Kusembah Kau Tuhan
          C                     Bm  Em
Kusembah Kau dengan segenap jiwaku
        Am            D           G
Kusembah Kau dengan segenap hidupku

-----------------------------------
        Am            D           G
Kusembah Kau dengan segenap hidupku
E
[overtune]

Reﬀ:
         A                  E/G#
Segenap hidup Segenap nafasku
         F#m                  E C#m
Jadi persembahan di bawah kakiMu
           D         C#m F#m
Kebanggaanku Kejayaanku
         G                   E
Tak ada artinya selain untukMu
           A                E/G#
Segenap hidup Segenap nafasku
       F#m                    E C#m
Jadi persembahan di atas mezbahMu
          D          C#m F#m
Kekuatanku Pengharapanku
         Bm       E        A
Kuserahkan semua hanya bagiMu

          D          C#m F#m
Kekuatanku Pengharapanku
         Bm       E         A
Kuserahkan semua hanya bagiMu

          D          C#m F#m
Kekuatanku Pengharapanku
         Bm       E         A
Kuserahkan semua hanya bagi Yesus

[Ending]
55  44 33
E   A
55  44 33
E   A
3456  665 465 11
D C#m  F#m
5434 4343 211
Bm    E    A
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
