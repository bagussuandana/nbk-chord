import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "187";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK187() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
  D      D7     G    E9
Indahlah waktu berdoa,
D      Bm        Em     A
sungguhlah sedap rasanya;
D        D7     G    E9
Di depan takhta Bapaku,
D      Bm    Em        A D
b'ritahukan s'mua yang perlu;
A   D    Em   F#m     G
Di dalam susah dan duka
A   D    Em   F#m   G
jiwaku dapat sentosa,
D          D7    G      E9
dan menang atas penggoda,
D  Bm  Em  A  D
karena kuasa doa.

Indahlah waktu berdoa,
'ku datang dihadirat-Nya,
berjumpa dengan yang memb'ri
berkatnya dengan tak henti;

Tuhan berjanji padaku,
bahwa anug'rah-Nya s'lalu
cukup dalam kesusahan,
pada waktu 'ku berdoa.

Indahlah waktu berdoa,
s'moga 'ku dapat anug'rah;
Dari atas puncak Pisga
'ku memandang surga baka;

Ku tanggalkan tubuh ini,
t'rima pahala semawi;
Di sana 'ku tetap rasa
hasil dari kuasa doa.
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
