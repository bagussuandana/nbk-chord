import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongTransposerClient from "@/components/song-transposer-client";
import SongWrapper from "@/components/song-wrapper";
import { Metadata } from "next";

const worshipID = "doa-yabes";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function DoaYabes() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
Bb  C

    F                 A
Kiranya Engkau Memberkati
         Dm          F/C
Aku Berlimpah-Limpah
          Bb   Gm        C Bb C
Dan Memperluas     Daerahku
        F          A
Dan Kiranya Tangan-Mu Menyertai Aku
      Dm           F/C
Dan Melindungi Aku
       Bb         Am   Dm
Dari Pada Malapetaka
      Gm       F/A
Sehingga Kesakitan
      Bb   C   F
Tidak Menimpa Aku

Outro :
Bb             Am
dan Tuhan mendengarkan
        Gm     C    F
dan menjawab doaku
`;
    const worshipNumber = `
Intro:
| 5... |

Chorus:
| 1... | 7... | 6... | 5m.13 |

| 4..3 | 2.1. | 7b... | 5.(567) | (triplet)
| 1... | 7.3M/5#. | 6... | 1.(1234) |
| 4..(.6) | (feel in)... | 7b.4/6. | 4m/6b.1/5. |
| 1... |`;
    return (
        <SongWrapper isWorship>
            <SongHeader song={worship} isWorship />
            <SongTransposerClient
                initialKey={worship.chord as string}
                songText={worshipText}
                songNumber={worshipNumber}
            />
        </SongWrapper>
    );
}
