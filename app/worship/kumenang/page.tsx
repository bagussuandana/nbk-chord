import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "kumenang";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function Kumenang() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro] 2X
C                Dm7
Nanana nanana... nanana nanana
Em7              F
Nanana nanana... uooo yee.

[Verse] 2X
C                        F
Bangkitlah dan perkataan berkat
C                        F
Atas hidup yang dib'rikanNya
C
Dengan pasti dengan iman
F
Nyatakan kekuatanNya
Am               G    F
KedasyatanNya di hidupku.

[Pre-Chorus]
    Em      F       Em7  F
Imanku berkata Tuhanku hebat
     Em      F
Yesusku berkata
     Em                   F
Ku kuat melangkah bersama Dia.

[Chorus]
      C           F
Kumemuji, ku bersorak
       Am                 G
Ku mengangkat tinggi panjiNya
      F
Panji kemenanganNya
         C            F
Ku bernyanyi, ku bersorak
       Am                 G
Ku mengangkat tinggi panjiNya
      F                  C
Panji kemenanganNya, kumenang.

[Intro] [...]
[Verse] [...]
[Pre-Chorus] [...]
[Chorus] [...]
[Instrumen]
| Dm  Em  F  C |

[Intro] 3X [...]
[Pre-Chorus] [...]
[Chorus] [...]
[Ending]
    Dm        Em
Kumenang, kumenang
    F         C
Kumenang, kumenang.
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
