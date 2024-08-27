import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "42";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK42() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Walaupun s'ribu lidahku tak cukup, ya,
Tuhan, memuji kasih, rahmat-Mu, memuji
kasih, rahmat-Mu; Rajaku dan Tuhan,
Rajaku dan Tuhan, Rajaku dan Tuhan.

2. Ya Tuhan yang maha mulia , tolonglah
padaku, masyhurkan ke s'luruh dunia ,
masyhurkan ke s'luruh dunia ; Nama-Mu
yang merdu, nama-Mu yang merdu,
Nama-Mu yang merdu.

3. Nama Tuhan menghilangkan takut dan
sengsara; Orang yang pikul keb'ratan,
orang yang pikul keb'ratan; Mendapat
sentosa, mendapat sentosa, mendapat
sentosa.

4. Rantai dosa diputuskan oleh kuasa-
Nya, darah-Nya dapat hapuskan, darah-
Nya dapat hapuskan. Dosa manusia, dosa
manusia, dosa manusia.
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
