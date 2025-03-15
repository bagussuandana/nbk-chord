import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "tahta-sucinya";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function TahtaSuciNya() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Itro:
56123 2343271
C    E    Am
23435 4' 5
Gm C D7   G

[Verse]
     C                  F/C
Kini saatnya berdiri di AltarNya
        C          Am          Dm   G
S'bab Allah Maha Kudus hadir disini
     C                    F/C
Mari memuji angkat tangan menyembah
        C   Am     Dm  G       C    G
S'bab Allah Maha Kudus hadir disini

[Chorus]
     C  Dm7 Em7   F    C    Dm7 Em7
Kita ma-suk    tahta suciNya
     Gm         A           Dm  G
Bersama para malaikat menyembah
     C  Dm7 Em7 F    C Dm7 Em7
Mari pu-ji      Yesusku
     Em7   F   G             C
Kita masuk hadiratNya Maha kudus
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
