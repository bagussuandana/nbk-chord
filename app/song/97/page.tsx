import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "97";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK97() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Sungguhkah engkau penat dan berdosa,
yang mesti ditangisi, masih b'rat? Inginkah
'kau kini bebas sama s'kali? mari kepada
Pancaran Alhayat!

Koor :
Ada pancar yang hilangkan dosa.
Dalamnya orang dapat sentosa; S'gala
keb'ratan hilang olehnya, di dalam darah
Yesus, sungguh besar kuasa-Nya .

2. Apakah engkau m'ragukan kuasa-Nya yang
mengubahkan dan memb'ri s'lamat?
Apakah'kau cari damai yang sempurna? mari
kepada Pancaran Alhayat!

3. Apakah'kau dirantai cinta diri dan b'lum
beroleh ampun dan rahmat? 'Kau mencari
suka tapi dapat duka? mari kepada Pancaran
Alhayat!

4. Penyuci jiwa, dan Juru Selamat,
Pempimpin dan Sahabat yang s'tia; Tak
pernah menolak orang yang berdosa yang
datang pada pancaran Alhayat.
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
