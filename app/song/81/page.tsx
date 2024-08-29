import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "81";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK81() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Ku bawa kabar, kabar dari Yesus,
ingatlah hidupmu, waktu t'rus lalu;
Datang kepada-Nya dan bawalah
dosamu, dengan kasih-Nya Ia sedang
menunggu.

Koor :
Yesus yang memanggil,
dengarlah suara-Nya , Ia memanggilmu
datang kepada-Nya.

2. Ku bawa kabar, kabar dari Yesus,
yang memb'ri harapan bagi yang penat;
Kar'na kasih-Nya Ia t'lah datang ke
dunia untuk menyelamatkan yang
tersesat.

3. Ku bawa kabar, kabar dari Yesus,
janganlah lambat dan tolak kasih-Nya;
Yesus yang mengundang, marilah t'rima
Dia, dalam kasih-Nya 'kau jadi
sempurna.
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
