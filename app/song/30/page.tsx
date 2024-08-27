import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "30";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK30() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Juru S'lamat ada dekat, Yesus
yang maha cinta; Orang berdosa
yang sesat, o, dengarlah suara-Nya.
Koor : M'laikat puji di surga, nama
Yesus berkuasa; Juru S'lamat yang
mulia, Yesus, kekasihku.

2. Dosa dapat diampuni, dengarlah
suara Yesus; Engkau boleh masuk
surga dan tinggal serta Yesus.

3. Pujian, hormat dan syukur dib'ri
kepada Yesus. Ku percaya kuasa-
Nya dan cinta nama Yesus.
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
