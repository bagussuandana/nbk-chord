import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "92";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK92() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Pulang, domba yang penat, Tuhan
panggil engkau; Dari jalan yang sesat,
pada jalan yang s'lamat diantar jiwamu,
dengarlah suara Tuhan, Gembala yang
baik itu.

2. Dengarlah suara-Nya, hatimu bukalah,
Tuhan memb'ri sentosa,masuk surga yang
mulia dan hidup yang baka; Yang tetap
kepada-Nya, Ia tolong s'lamanya.

3. Tuhan b'li keampunan dengan
sengsara-Nya; Salib bawa tebusan,
carilah Tuhan s'karang; Akuilah dosa,
ingat akan kasih-Nya dan tinggallah
serta-Nya.

4. Hidup berkelimpahan dib'rikan domba-
Nya, yang mengikut di jalan kemana Ia
antarkan ke neg'ri yang mulia , tak
tersandung kakinya oleh anug'rah Allah!
`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
