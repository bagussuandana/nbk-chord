import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "11";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK11() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Pujilah Allah, Pencipta, Raja seg'nap alam, hai
jiwaku pujilah kar'na kes'lamatan-Nya. Mari s'mua
datanglah kepada-Nya, sembah dan pujilah Dia.

2. Pujilah Allah, yang b'rikan berkat-Nya
berlimpah, rahmat-Nya mengikuti kehidupan
anak-Nya; Renungkanlah karya yang Mahakuasa ;
Dengan kasih Ia p'lihara.

3. Pujilah Allah, pelindungmu dalam bahaya, yang
mem'bri damai meskipun ombak bergelora,
tenang teduh! alam dip'rintahkan-Nya; Badai pun
menaati-Nya.

4. Pujilah Allah yang menyertai dalam keg'lapan,
meskipun iblis menyerang dengan kegeraman;
Sinar t'rang-Nya mengusir ketakutan, rahmat-Nya
b'ri kemenangan.

5. Pujilah Allah, seg'nap yang ada di dalamku,
s'mua yang bernafas mari datang menyembah Hu,
terdengarlah s'mua umat-Nya berseru: Amin,
amin, pujilah Hu.
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
