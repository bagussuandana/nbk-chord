import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songChorusID = "5";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songChorusID).title,
    description: appConfig.songs.find((s: any) => s.id === songChorusID)
        .description,
};
export default function NBKChorus5() {
    const { song_choruses } = appConfig;
    const songChorus = song_choruses.find((s: any) => s.id === songChorusID);
    const songChorusText = `
    F
Mari Roh Suci
    F
ajar ku berdoa
  Bb       F
supaya jiwaku segar;
    C        Dm
mari Roh Suci
   C        Dm
ajar ku berdoa
  Bb      F    C     F
sehingga kujumpa Allah
`;
    return (
        <SongWrapper isChorus>
            <SongHeader song={songChorus} isChorus />
            <TransposerWrapper>
                <Transposer
                    initialKey={songChorus.chord as string}
                    songText={songChorusText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
