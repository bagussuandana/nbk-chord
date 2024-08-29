import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "60";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK60() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Apakah ada harapan bagi orang
yang sesat; Yang tahu dirinya
terhilang, dan memikul dosa b'rat?
Tuhan Yesus, Tuhan Yesus yang
memanggil padamu.

2. Tuhan pandang dari surga
dengan kasih dan rahmat, dan
dengan sabar s'lamanya cari orang
yang sesat; Perdamaian,
perdamaian, dib'ri pada yang sesal.

3. Tuhan cari kita lebih dari kita cari
Dia ; Serahkanlah t'rus hatimu,
kar'na kuasa cinta-Nya; Kehidupan,
kehidupan, yang kekal dib'ri Tuhan.
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
