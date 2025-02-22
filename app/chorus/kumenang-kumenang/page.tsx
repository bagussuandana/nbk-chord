import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const chorusID = "kumenang-kumenang";
export const metadata: Metadata = {
    title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
    description: appConfig.choruses.find((s: any) => s.id === chorusID)
        .description,
};
export default function KumenangKumenang() {
    const { choruses } = appConfig;
    const chorus = choruses.find((s: any) => s.id === chorusID);
    const chorusText = `
[Intro] 
12 23   34   56  4321521
G  F#m  Em A Bm  Em A D

   D
Ku menang ku menang
  Em
Bersama Yesus Tuhan
   A
Ku menang ku menang
   D
Di dalam peperangan
       D         D7
Ku menang ku menang
     G         G7
Atas segala setan
     D        A          D
Haleluya haleluya ku menang

   D          Em
Haleluya Dia Bangkit
   A          D
Haleluya Dia Hidup
   D   D7       G Gm
Haleluya Dia naik
   D       A     D
Roh'el Kudus Turun
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
