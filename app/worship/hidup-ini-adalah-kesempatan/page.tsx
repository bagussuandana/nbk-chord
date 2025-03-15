import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "hidup-ini-adalah-kesempatan";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function HidupIniAdalahKesempatan() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro]
G: 12343 21
12343 21
12343 21 5

[Verse]
       D   G          D
Hidup ini adalah kesempatan
       F#m  Bm       E     A
Hidup ini untuk melayani Tuhan
    D        Bm     G             D
Jangan sia siakan waktu yang Tuhan beri
       D    A           D
Hidup ini harus jadi berkat.

[Chorus]
     D     G           D
Oh Tuhan pakailah hidupku
    Bm  D/A        E   A
Selagi  aku masih kuat
  G          A
Bila saatnya nanti
   F#m         Bm
Ku tak berdaya lagi
       D    A           D
Hidup ini sudah jadi berkat.
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
