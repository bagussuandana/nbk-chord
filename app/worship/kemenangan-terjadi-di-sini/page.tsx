import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "kemenangan-terjadi-di-sini";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function KemenanganTerjadiDiSini() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
23523  23523  23523  21
Gsus4  G      Em     D 

[Verse 1]
G                    Em
 Kumenyembah dalam kudus hadiratMu
     Am         D             G   C/G
Hampiri tahta kasih karuniaMu Bapa
G                   Bm
 Kekuatanku hanya dalam hadiratMu
     Am          D         G  C  D
Yesusku hanya Kaulah segalanya.

[Chorus]
    G       D/F#     Em  D
Kuyakin Kau hadir di sini
     C               Em       D
Kurasakan kuasa yang tak terbatas
    G       D/F#     Em
Kuyakin Kau nyata di sini
D     C       D        Em/G
Kemenangan terjadi disini.

[Instrumental]
 G  Em  D  

[Verse 2]
G                    D/F#
 Kumenyembah dalam kudus hadiratMu
     Am         D             G   C/G
Hampiri tahta kasih karuniaMu Bapa
G                   D/F#
 Kekuatanku hanya dalam hadiratMu
     Am          D         G   D
Yesusku hanya Kaulah segalanya.

[Chorus] [...]
[Bridge]
C                Em
 Segnap jiwaku memujiMu
C                  Em
 Sungguh besar Kau Yesusku
C                Em     D
 Segnap hatiku menyembahMu
      A         C
Kau besar Kau besar
      Am        F
Kau besar Kau besar.

[Tag]
F
Kemenanganku ada dalamMu.

[Chorus] 2X [...]
[Ending]
D      C      D        Em
Kesembuhan terjadi disini
D      C   D             Gsus
Kelepasan... terjadi disini.

[Outtro]
 G  Em  D  
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
