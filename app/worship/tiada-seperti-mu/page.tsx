import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "tiada-seperti-mu";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function TiadaSepertiMu() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
D  A/C#  Bm  G

Bait :
D
AnugrahMu Kepadaku
A/C#
Tak Pernah Berubah
Bm
PerbuatanMu Terlukiskan
  G
Didalam Hatiku

D
Tercengangku DibuatMu
  A/C#
Kukagum PadaMu
    Bm
Tak Ada Hal Di Hidupku
     G
Yang Luput DariMu

      A
Kau Indah Kau Mulia
      Bm
Tiada SepertiMu
       D/F#                G
Kungin Hidupku MenyenangkanMu

D
Kau Terawal Dan Terakhir
   A/C#
Pencipta Segalanya
    Bm
Seluruh Bintang Pun Bersinar
 G
Oleh UcapanMu

D
Engkau Pun Mengasihiku
  A/C#
Penulis Hidupku
    Bm
Tak Henti Segnap Nafasku
  G
MenyembahMu Selalu

    A
Kupuji Kusembah
        Bm
Tiada SepertiMu
        D/F#                G
Kuingin Hidupku MenyenangkanMu

Reff :
         D
S’gala Puji
          A/C#
S’gala Hormat
          Bm         G
Seg’nap Hatiku MenyembahMu
      D                A/C#
Terimalah Seg’nap Hidupku
           Bm             G
S’bagai Persembahan Yang Hidup

Bridge :
D/F#         G
  Bukan Kehendakku
D/F#         G
  Namun KehendakMu
Bm            G
  Hidupku BagiMu
        A
  Kau Indah, Kau Mulia
          A
  Kuingin Hidupku MenyenangkanMu

Musik :
D  A/C#  Bm  A  G  D/F#  Em  A
D  A/C#  Bm  A  G  D/F#  Em  A

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
