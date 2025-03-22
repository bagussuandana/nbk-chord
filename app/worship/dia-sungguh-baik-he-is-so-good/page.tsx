import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "dia-sungguh-baik-he-is-so-good";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function DiaSungguhBaikHeIsSoGood() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
D  C#m  Bm  E  A
D  C#m  Bm  E  A

Bait :
A
Dia Mati Bagiku
A
Dia Bangkit Bagiku
      D     E        A
Dia Tuhan Allah Penyelamatku

A
Kuasa Maut Dikalahkan
A
Hidupku Dipulihkan
      D     E       F#m
Dia Tuhan Allah Kem'nanganku

Reff :
D
Dia Sungguh Baik
C#m
Dia Sangat Baik
Bm    E        A
Yesus Dia Baik Bagiku

D
Dia Sungguh Baik
C#m
Dia Sangat Baik
Bm    E        A
Yesus Dia Baik Bagiku

Bait :
A
Dia Ada Dalamku
A
Bergerak Di Hidupku
      D     E     A
Dia Tuhan Allah Kekuatanku

A
Dia Penuhi Hatiku
A
Dengan Kuasa KasihNya
      D     E       F#m
Dia Tuhan Allah Kem'nanganku

Chorus :
D
He Is So Good To You
C#m
He Is So Good To Me
Bm      E               A
Jesus - He's So Good To You And Me
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
