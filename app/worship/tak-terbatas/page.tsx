import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "tak-terbatas";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function TakTerbatas() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro
D G
D G

Verse 1
      D          G
Kukagumi cara-Mu mencintaiku
        A                     D
Kau ada di cerita proses hidupku
     G           A
Di titik terendahku
          F#m7          Bm7
Kau hadir tuk mengangkatku, ku tahu
    Em7                    A
Kau tak menyerah akan hidupku
 
 
[Verse 2]
      D          G
Kukagumi cara-Mu mencintaiku
        A                     D
Kau ada di cerita proses hidupku
     G           A
Di titik terendahku
          F#m7          Bm7
Kau hadir tuk mengangkatku, ku tahu
    Em7                    A
Kau tak menyerah akan hidupku
 
 
[Chorus]
    D           G
Tak terbatas kuasa-Mu
    Em        A
Tak Terduga cara-Mu
    F#m    A#m  B
Kau yang kuandalkan
         Em           A
Disetiap langkah hidupku
 
    D          G
Tak terbatas Kasih-Mu
    Em        A
Tak terduga jalan-Mu
    F#m    A#m  B
Kau yang kupercaya
          Em    A    D
Di s’gala musim hidupku
 
 
Interlude
D G
 
 
Verse 1
      D          G
Kukagumi cara-Mu mencintaiku
        A                     D
Kau ada di cerita proses hidupku
     G           A
Di titik terendahku
          F#m7          Bm7
Kau hadir tuk mengangkatku, ku tahu
    Em7                    A
Kau tak menyerah akan hidupku
 
 
Chorus
    D           G
Tak terbatas kuasa-Mu
    Em        A
Tak Terduga cara-Mu
    F#m    A#m  B
Kau yang kuandalkan
         Em           A
Disetiap langkah hidupku
 
    D          G
Tak terbatas Kasih-Mu
    Em        A
Tak terduga jalan-Mu
    F#m    A#m  B
Kau yang kupercaya
          Em    A    F# G
Di s’gala musim hidupku
 
 
Interlude
D C#
F# G D C# 
F# G D C# 
F# G D C# 

 
 
Bridge
F# G                    C# D
    Cara-Mu mengangkatku
F# G                    C# D   A
    Cara-Mu mengubah hatiku
F# G                   C# D
    Cara-Mu menuntunku
        G          Bm         A
    Tak terbatas didalam hidupku
F# G                  C#  D
    Cara-Mu mengangkatku
F# G                    D   A
    Cara-Mu mengubah hatiku
F# G                   C#D
    Cara-Mu menuntunku
        G          Bm         A     B
    Tak terbatas didalam hidupku
 
 
Chorus
    E           A
Tak terbatas kuasa-Mu
    F#m       B  C#m B  A
Tak Terduga cara-Mu
    G#m    Cm   C#
Kau yang kuandalkan
         F#m          B
Disetiap langkah hidupku
    E          A
Tak terbatas Kasih-Mu
    F#m       B
Tak terduga jalan-Mu
    G#m    Cm   C#
Kau yang kupercaya
          F#m   B    E
Di s’gala musim hidupku
 
-----------------------

    G#m    Cm   C#
Kau yang kupercaya
          F#m   B    E
Di s’gala musim hidupku
 
 
Outro
E A
E A
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
