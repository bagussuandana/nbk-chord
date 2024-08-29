import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "99";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK99() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Yang berdosa dan penat, datang ke
Salib; S'gala bebanmu yang b'rat bawa
ke Salib; B'ritahukan pada Tuhan,
buanglah ketakutan, Ia tentu
mendengarkan; datang ke Salib.

2. Yang berdosa, cepatlah datang ke
Salib, tempat Kudus carilah; datang ke
Salib; Yang menanggung susah b'rat
Tuhan saja b'ri s'lamat, Dialah penuh
rahmat; datang ke Salib.

3. Syukur bagi siapa yang datang ke
Salib, Yesus memberi ampun, datang
ke Salib; Pancaran anug'rah-Nya bagi
s'mua terbuka, hingga dunia
s'lamatlah; datang ke Salib.
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
