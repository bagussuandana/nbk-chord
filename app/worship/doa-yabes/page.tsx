import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
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

    F          C/E
Kiranya Engkau Memberkati
A         Dm          F/C
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
        Gm     C    C
dan menjawab doaku
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
