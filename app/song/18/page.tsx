import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "18";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK18() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Tuhan itu gembalaku, yang
membimbing aku ke tempat rumput yang
segar, ke tempat rumput yang segar,
dekat sungai jernih.

2. Jiwaku disegarkan-Nya, jalan
diratakan, m'langkah dalam kebenaran,
m'langkah dalam kebenaran, karena
nama-Nya.

3. Meskipun aku berjalan di lembah
kek'laman, aku tak takut bahaya, aku tak
takut bahaya, berkatku berlimpah.

4. Hidangan disediakan-Nya didepan
musuhku, diurapi kepalaku, diurapi
kepalaku, berkatku berlimpah.

5. Sepanjang masa hidupku, tetap
anug'rah-Nya, 'ku akan tinggal selalu, 'ku
akan tinggal selalu, di dalam rumah-Nya.
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
