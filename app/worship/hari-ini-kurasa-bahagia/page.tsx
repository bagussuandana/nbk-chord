import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "hari-ini-kurasa-bahagia";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function HariIniKurasaBahagia() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro] 2x
3   2   234  543 21
C   G   Am   F
3   532  321
C   G   F 

[Verse]
C  G         F          C
Ha-ri ini ku rasa bahagia
      Am             D        G
Berkumpul bersama saudara seiman
C  G               F          C
Tu-han Yesus telah satukan kita
      Am           F   G    C
Tanpa memandang di antara kita

[Pre-Chorus]
C
Bergandengan tangan
  G           F     G     C
Dalam kasih dalam satu hati
     Am          D            G
Berjalan dalam terang kasih Tuhan

[Chorus]
F     G       Em     Am
Kau sahabatku kau saudaraku
      F            G           C   C7
Tiada yang dapat memisahkan kita
F     G       Em     Am
Kau sahabatku kau saudaraku
      F            G           C
Tiada yang dapat memisahkan kita
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
