import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "2";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK2() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Besar setia-Mu, Allah Bapaku, besar dan
berlimpah kepadaku, tiada kurang dan tidak
berubah, sempurna dan tetap selamanya.

Koor:
Besar setia-Mu, besar setia-Mu, tiap
pagi nampak rahmat baru; Kau t'lah sediakan
s'gala yang kuperlu, besar setia-Mu kepadaku

2. Seg'nap makhluk serta bintang dan bulan,
seg'nap alam yang diciptakan-Nya, turut
menyaksikan dan bergembira, Kasih setia-Mu
yang mulia

3. Pengampunan dosa, damai abadi,
penghiburan, k'hadiran-Mu memb'ri kekuatan
dan pengharapan bagiku, bersama jutaan
yang menanti-Mu
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
