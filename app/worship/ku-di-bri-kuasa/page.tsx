import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "ku-di-bri-kuasa";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function KuDiBriKuasa() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
  G  C/G  G  C/G   G  C/G  G  C/G  
i7i 54345 i7i 5434• i7i 54345 i7i 5434•
  G   C   Em  F    G   C   Em  F  
i7i 54345 i7i 5434• i7i 54345 i7i 5434•
 
[Verse]
G                    Em
Ku diberi kuasa dari Raja Mulia
C           G/B      Am        D
Menaklukkan musuh di bawah kakiku
G                  Em
Kupakai kuasa dari Raja Mulia
     C            G/B
Bila Allah ada bersamaku
      C         D
Siapa jadi lawanku.

[Chorus]
          Gsus4     G
Sungguh besar Kau Tuhanku
         Em
Engkau perisai hidupku
        C          G/B
Ku berdiri dengan iman
       Am          D
Iman dalam Yesus Tuhan
            Gsus4    G
Kau yang memb’ri kemenangan
       Em
Kubersorak merayakan
       C            D           G
Terpujilah Engkau Raja s’gala raja.

[Intro]
i7i 54345 i7i 5434• i7i 54345 i7i 5434•
 G  C  Em  F   G  C  Em  F 

[Verse]
G                    Em
Ku diberi kuasa dari Raja Mulia
C           G/B      Am        D
Menaklukkan musuh di bawah kakiku
G                  Em
Kupakai kuasa dari Raja Mulia
     C            G/B
Bila Allah ada bersamaku
      C         D
Siapa jadi lawanku.

[Bridge]
     C            G/B
Bila Allah ada bersamaku
      C         D
Siapa jadi lawanku.

     C            G/B
Bila Allah ada bersamaku
      C         D
Siapa jadi lawanku.
     C            G/B
Bila Allah ada bersamaku
      C         D
Siapa jadi lawanku.

[Chorus]
          Gsus4     G
Sungguh besar Kau Tuhanku
         Em
Engkau perisai hidupku
        C          G/B
Ku berdiri dengan iman
       Am          D
Iman dalam Yesus Tuhan
            Gsus4    G
Kau yang memb’ri kemenangan
       Em
Kubersorak merayakan
       C            D           G
Terpujilah Engkau Raja s’gala raja.

[Interlude]
 Em
7"" 5"" 3"" 2" 1"
 C
7"" 5"" 3"" 2" 1"
 G           D
1 2 3 4 3212 17
 Em
7"" 5"" 3"" 2" 1"
 C
7"" 5"" 3"" 2" 1"
 G           D
1 2 3 4 5 1 671 . . . .

E   E   E   E

[Chorus (Overtone)] 2X
          A
Sungguh besar Kau Tuhanku
         F#m
Engkau Perisai hidupku
        D          A/C#
Ku berdiri dengan iman
       Bm          E
Iman dalam Yesus Tuhan
            A
Kau yang memb’ri kemenangan
        F#m
Ku bersorak merayakan
       D            E           F#m D E
Terpujilah Engkau Raja s’gala raja

[Ending]
       Bm           A/C#        D  F#m
Terpujilah Engkau Raja s’gala Raja
   C#m  D            E           A
Terpuji-lah Engkau Raja s’gala Raja.

[Outtro] 2X
C# D   F# G
3 4   6 6''
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
