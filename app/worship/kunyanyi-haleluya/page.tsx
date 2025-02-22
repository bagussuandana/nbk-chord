import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "kunyanyi-haleluya";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function KunyanyiHaleluya() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G

[Verse]
D         Am
 Bapa kudatang
Em           G
 MenyembahMu disini
D          Am
 Kupercaya Kau
Em       G
 Ada bagiku.

[Instrumental]
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G

[Verse] [...]
[Pre-Chorus]
Em               D/F
 Tak usah kutakut,  s'bab Kau sertaku
G                   A
 Tak usah ku bimbang, Kau di dalamku
Em                D/F#
 Tak usah ku cemas, Kau penghiburku
G                  A
 Saat ku lemah Kau kuatku.

[Chorus]
         D     Dmaj7
Kunyanyi haleluya
         Bm    Bm9
Kunyanyi haleluya
              G
Sungguh Kau hebat
           D/F#        Em A
Ajaib perkasa perbuatanMu
- - - - -
         D    Dmaj7
Kunyanyi haleluya
          Bm    Bm9
Ku nyanyi haleluya
              G
Sungguh Kau hebat
           D/F#        Em A
Ajaib perkasa perbuatanMu
        D
Di hidupku.

[Instrumental 2]
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G

[Pre-Chorus] [...]
[Chorus] [...]
[Outro]
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G
  323.23.53 323.23.53 32323 21...
 D         Am        Em       G

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
