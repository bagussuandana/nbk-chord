import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "91";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK91() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Pancaran darah yang kudus, yang
hilangkan dosa, yang mengalir dari
Yesus dan sucikan jiwa.

Koor :
O, datanglah orang berdosa,
kepada salib-Nya agar hatimu yang
bernoda disucikan oleh-Nya.

2. Mari s'mua yang b'lum kenal pada
Juru S'lamat, percaya kuasa darah-Nya
dapat pengampunan.

3. Bagi seg'nap manusia ada
kes'lamatan, kar'na Tuhan Allah kita
penuh b'las kasihan.

4. Pancaran s'lamat terbuka bagi s'mua
orang, yang terjahat pun dit'rima
dengan kasih sayang.
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
