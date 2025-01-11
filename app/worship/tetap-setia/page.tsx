import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "tetap-setia";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function TetapSetia() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro:
512345 434321231 231 565
C G F G F
512345 43432 12 -- 1217
C F G

Bait :
         C            F
Selidiki Aku, Lihat Hatiku
       Dm             G        Fm/C  C
Apakah Ku Sungguh Mengasihi-Mu Yesus
    G         C/E
Kau Yang Maha Tahu
        F
Dan Menilai Hidupku
     C/G     G             C      
Tak Ada Yang Tersembunyi Bagi-Mu

         C            F
Selidiki Aku, Lihat Hatiku
       Dm             G        Fm/C  C
Apakah Ku Sungguh Mengasihi-Mu Yesus
    G         C/E
Kau Yang Maha Tahu
        F
Dan Menilai Hidupku
     C/G     G             C      Gm7
Tak Ada Yang Tersembunyi Bagi-Mu

Reff :
       F  G/F     Em  Am
T’lah Kulihat Kebaikan-Mu
         Dm       G       C      Gm7
Yang Tak Pernah Habis Dihidupku
    F     G/F     Em
Kuberjuang Sampai Akhirnya
A       Dm     G       C
Kau Dapati Aku Tetap Setia

interlude :
F Em Dm G
123 6 22 5 21

         C            F
Selidiki Aku, Lihat Hatiku
       Dm             G        Fm/C  C
Apakah Ku Sungguh Mengasihi-Mu Yesus
    G         C/E
Kau Yang Maha Tahu
        F
Dan Menilai Hidupku
     C/G     G             C      Gm7
Tak Ada Yang Tersembunyi Bagi-Mu

Reff :
       F  G/F     Em  Am
T’lah Kulihat Kebaikan-Mu
         Dm       G       C      Gm7
Yang Tak Pernah Habis Dihidupku
    F     G/F     Em
Kuberjuang Sampai Akhirnya
A       Dm     G       C
Kau Dapati Aku Tetap Setia

Overtune:

Guitar solo:

Reff :
       G  A/G     F#m  Bm
T’lah Kulihat Kebaikan-Mu
         Em       A       D      Am7
Yang Tak Pernah Habis Dihidupku
    G     A/G     F#m
Kuberjuang Sampai Akhirnya
B       Em     A       D
Kau Dapati Aku Tetap Setia

       G  A/G     F#m  Bm
T’lah Kulihat Kebaikan-Mu
         Em       A       D      Am7
Yang Tak Pernah Habis Dihidupku
    G     A/G     F#m
Kuberjuang Sampai Akhirnya
B       Em     A       D
Kau Dapati Aku Tetap Setia

    G     A/G     F#m
Kuberjuang Sampai Akhirnya
B       Em     A       D
Kau Dapati Aku Tetap Setia

Outro:
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
