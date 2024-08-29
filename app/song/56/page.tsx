import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "56";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK56() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Turunlah s'perti waktu dahulu, Roh-
Elkudus! Roh-Elkudus! Tulis dalam hatiku
hukum-Mu, Roh-Elkudus! Roh-Elkudus!
Kar'na Engkau jiwaku bergemar, kasihku
pada-Mu sungguh besar; Baptiskanlah aku
s'karang juga, Roh-Elkudus! Roh-Elkudus!

2. B'ri padaku Roh yang membebaskan,
lepaskanku, lepaskanku! Supaya 'ku turut
p'rintah Tuhan, lepaskanku, lepaskanku!
Kesenangan dunia 'ku buang, supaya kuasa-
Mu dapat menang; Di dalam-Mu aku s'lalu
senang, lepaskanku, lepaskanku!

3. B'rilah padaku pedang Ilahi, Roh-Elkudus!
Roh-Elkudus! B'rilah percaya, tambah berani,
Roh-Elkudus! Roh-Elkudus! Agar 'ku tetap
gagah dan kuat, untuk mencari orang yang
sesat,
supaya ia mendapat s'lamat, Roh-Elkudus!
Roh-Elkudus!
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
