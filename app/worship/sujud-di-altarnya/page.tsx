import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "sujud-di-altarnya";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function SujudDiAltarnya() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Verse 1]
     F      G/F    F
Bila hati terasa berat
       F        Gm            F/A
Tak seorang pun mengerti bebanku
   Cm   F   Bb
Ku ta - nya Yesus
 Gm      Dm    C
Apa yang harus kubuat?

[Transition]
Bb    C   

[Verse 2]
       F        G/F      F
Dia berfirman mari datanglah
        F    Gm       F/A
Dia selalu pedulikan aku
   Cm   F    Bb
Ku da - tang Yesus
    Gm    G      C
Dia pikul s'gala bebanku.

--Silent--
[Chorus]
         F         F/A
Sujud Di AltarNya
         Bb
'Ku Bawa Hidupku
        F/A  Gm
'Ku T'rima  Anug'rahNya
          G        C
Dia Ampuniku Dan Bebaskanku

         F       Cm
Dia Ubah Hidupku
              Bb     Bbm
Baharu - i    Hatiku
        F/C  Dm
Sesuatu Terjadi
     Gm     C       F
Saat Datang Di AltarNya

[Intrerlude]
F Bb F Bb
15154 15154
F   G/F   F
345 54'565
F   Gm   F/A
345 51165
   Cm   F   Bb
Ku ta - nya Yesus
 Gm      Dm    C
Apa yang harus kubuat?

F   G/F   F
345 54'565
F   Gm   F/A
345 51165
   Cm   F    Bb
Ku da - tang Yesus
    Gm    G      C
Dia pikul s'gala bebanku.

[Chorus]
         F         F/A
Sujud Di AltarNya
         Bb
'Ku Bawa Hidupku
        F/A  Gm
'Ku T'rima  Anug'rahNya
          G        C
Dia Ampuniku Dan Bebaskanku

         F       Cm
Dia Ubah Hidupku
              Bb     Bbm
Baharu - i    Hatiku
        F/C  Dm
Sesuatu Terjadi
     Gm     C       F
Saat Datang Di AltarNya

[Ending]
Bbm        F    Dm
 Pemulihan terjadi
Bbm      F    Dm
 Mujizat terjadi
Bbm         F    Dm
 Kemenangan terjadi
     Gm     C
Saat datang di altarNya.

[Outro]
Bbm  Gm  C  F 
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
