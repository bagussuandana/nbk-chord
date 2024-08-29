import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "80";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK80() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. K'lak dengan Yesus 'ku jumpa di
dalam neg'ri Bapaku, dan kar'na
itu di surga 'ku simpan harta
bendaku.

2. Oleh darah Tuhan Yesus aku
jadi warga surga, Allah akan
bertakhta t'rus selamanya di
hatiku.

3. S'mua waktu dan kuatku 'ku
serahkan selamanya, biar
Kerajaan Ttuhan menang di
seg'nap dunia.

4. Biar Kerajaan Yesus bertambah
luas dan maju, hingga manusia
ditebus, itu tujuan hidupku.
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
