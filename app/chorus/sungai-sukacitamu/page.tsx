import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const chorusID = "sungai-sukacitamu";
export const metadata: Metadata = {
    title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
    description: appConfig.choruses.find((s: any) => s.id === chorusID)
        .description,
};
export default function SungaiSukacitaMU() {
    const { choruses } = appConfig;
    const chorus = choruses.find((s: any) => s.id === chorusID);
    const chorusText = `
[Intro] 



[Verse] :
G      G/B     C
Sungai SukacitaMu
D          G     G/B  C  D
Mengalir Dalamku
G      G/B     C
Anggur SukacitaMu
D          G      G/B
Melimpah Dalamku

       C           G
Ku Menari Dan Bersuka
    Em              C
PujiMu Di Setiap Waktu
           G         D
Sebab Sungai SukacitaMu
         G
Ada Dalamku

Reff :
     D
Mengalir BersamaMu
     G
Bersuka Di DalamMu
    D
MengikutiMu Tuhan
          G
Dalam KegerakanMu

    D
MelayaniMu Tuhan
     G
Di Dalam SukacitaMu
            C
S'bab Hanya Tuhan
               D
Yang Membuat Sukacitaku
  G
Penuh
`;
    return (
        <SongWrapper isChorus>
            <SongHeader song={chorus} isChorus />
            <TransposerWrapper>
                <Transposer
                    initialKey={chorus.chord as string}
                    songText={chorusText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
