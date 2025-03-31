import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "kusorakkan-haleluya";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function KusorakkanHaleluya() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
Bb  F         Dm   C
65353(i75)    6535 3 2 (56i2i)
Bb  F         Dm   C    F
65353(i75)    6535 3 2  1

[Verse]
F               Bb
 Yesus Kau kekuatan di hidupku
Dm                    C
 Takkan gentar langkahku
F                       Bb
 Kau angkat tanganku di saat ku jatuh
Dm                 C
 Kaulah sumber kuatku.

[Instrumen 1]
i 7 6 5 6

[Pre-Chorus]
                    1          4  1 6                
Gm                      Bb
 Lembah yang kelam 'kan kulewati
                  1  5     i 7 6 5 6
Gm                 C
 Sebab Engkau sertaku
                1             4  1 6         
Gm               Bb
 Dengan imanku kudiselamatkan
                 1 5 
Gm               C
 Oleh kuasa Yesusku.

[Chorus]
         F          Dm            Bb
Kuangkat tanganku kusorakan haleluya
             Dm                C
NamaMu berkuasa, Surga bumi nyatakan
         F                       Bb
Kuangkat tanganku nyatakan Kau hebat
                Dm    C
Allah yang perkasa berkuasa s'lamanya.

[Instrumen 2]
[Intro]
Bb  F         Dm   C
65353(i75)    6535 3 2 (56i2i)
Bb  F         Dm   C    F
65353(i75)    6535 3 2  1

[Verse] [...]
[Pre-Chorus] [...]
[Chorus] [...]
[Tag]
Gm Am Bb
•  •  •  • Oo..oo..oo..oo..
Gm Am Bb
•  •  •  • Oo..oo..oo..oo..
F  C/E Eb  C 
•  •   •   Oo.. oo..

[Chorus (Interlude)]
         F          Dm            Bb
Kuangkat tanganku kusorakan haleluya
             Dm                C
NamaMu berkuasa, Surga bumi nyatakan
-----
Key:
 G
-----
         G
Kuangkat tanganku
               C
Nyatakan Kau hebat
                Em
Allah yang perkasa
   D           Am Bm  C  D
berkuasa s'lamanya.

[Chorus (overtone)]
         G                        C
Kuangkat tanganku kusorakan haleluya
             Em                D
NamaMu berkuasa, Surga bumi nyatakan
         G                       C
Kuangkat tanganku nyatakan Kau hebat
                Em     D           C
Allah yang perkasa, berkuasa s'lamanya,

[Outro]
C       G       Em      D
Ooo.. ooo.. Oo, Ooo.. ooo..
C       G       Em      D
Ooo.. ooo.. Oo, Ooo.. ooo..
Am    Bm      C       D

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
