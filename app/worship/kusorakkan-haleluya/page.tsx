import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "kusorakkan-haleluya";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function KusorakkanHaleluya() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
Bb  F  Dm  C
Bb  F  Dm  C

Bait :
F                Bb
  Yesus Kau Kekuatan Di Hidupku
Dm                      C
  Tak Kan Gentar Langkahku
F                       Bb
  Kau Angkat Tanganku Disaat Ku Jatuh
Dm                  C
  Kaulah Sumber Kuatku

Gm                      Bb
  Lembah Yang Kelam Kan Ku Lewati
Gm                  C
  Sebab Engkau Sertaku
Gm                 Bb
  Dengan Imanku Ku Dis'lamatkan
Gm                C
  Oleh Kuasa Yesusku

Reff :
         F
Kuangkat Tanganku
                Bb
Kusorakan Haleluya
             Dm
NamaMu Berkuasa
              C
Surga Bumi Nyatakan

         F
Kuangkat Tanganku
               Bb
Nyatakan Kau Hebat
                Dm
Allah Yang Perkasa
   C
Berkuasa S'lamanya
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
