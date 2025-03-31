import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "yesusku-kau-terindah";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function YesuskuKauTerindah() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
C/E  F  Bb   C/E  F  Bb
2 3 3 5 6    2 3 3 5 6 
C/E  F  Bb   C/E  F  Bb
2 3 3 5 6    2 3 3 5 6

[Verse]
F        C/E
Kudatang dengan syukurku
Dm      Am            Bb
Membawa kerinduanku Yesus
        Gm   C      F  C# D#
Inginku menyenangkanMu
- - - - -
F       C/E
KaryaMu indah bagiku
Dm         Am           C
Kasih yang menyelamatkanku
  Bb         Gm         C  Bb C
Yesus inilah persembahanku.

[Chorus]
      F        Bb
Ku membawa hatiku
         Gm          C
Hanya Engkau di hidupku
     Am          Dm
Yesusku Kau terindah
          Gm         C
S'lamanya kumenyembahMu
-----
      F         Bb
Ku membawa hidupku
       Gm         C
Inilah persembahanku
          Am           Dm
'tuk Yesusku yang terindah
          Gm         C    F
S'lamanya kumenyembahMu Yesus.

[Instrumen 1]
C/F  F  Bb  C/F  F  Am Bb
2 3 3 5 6    2 3 3 5 6

[Verse] [...]
[Chorus] [...]
[Bridge 1] 2X
C            Dm   F/A   Bb
 Bawaku erat di hadirat-Mu
C             Dm     F/A  Bb
 Hatiku persembahkan bagi-Mu
C              Dm   F/A   Bb
 Jiwaku tenang di hadirat-Mu
C            Dm    F/A   Bb
 Hatiku aman dalam kasih-Mu.
-----
C/E   F       Dm   F/A   Bb
  Bawaku erat di hadirat-Mu
C/E   F        Dm     F/A  Bb
  Hatiku persembahkan bagi-Mu
C/E   F         Dm   F/A   Bb
  Jiwaku tenang di hadirat-Mu
C/E   F       Dm    F/A   Bb
  Hatiku aman dalam kasih-Mu.

[Transition]
D

[Chorus (overtone )]
Key
 G
---
     G        C
Kumembawa hatiku
         Am         D
Hanya Engkau dihidupku
     Bm        Em
Yesusku Kau terindah
          Am          D
S'lamanya ku menyembahMu
-----
     G         C
Kumembawa hidupku
        Am        D
Inilah persembahanku
          Bm           Em
'Tuk Yesusku yang terindah
          Gm          D     G
S'lamanya ku menyembahMu, Yesus.

[Instrumen (free worship)] 3X
C  Em  D/F#  G/B
C  Em   D    G/B

[Bridge 2 (English)] 3X
C             Em            D/F#
  We lift You high and glorify
G/B            C
Name above all names
         Em            D/F#   G/B
Lift You high and magnify,  Jesus
C             Em            D/F#
  We lift You high and glorify
G/B            C      Em  D  G/B
Name above all names, owoo...

[Ending] 3X
G/B            C    Em  D  G/B
Name above all names... owoo...
G/B            C    Em  D  G/B
Name above all names.., owoo...
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
