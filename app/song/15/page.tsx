import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "15";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK15() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Raja Yang Mulia, s'karang kami
sembah Kepada-Mu, Engkau Raja
Damai, dan yang Maha Pengasih,
penuhilah kami dengan roh-Mu.

2. Berkatilah kami dengan sukacita
dan kekuatan, pimpin dan bimbinglah,
Cukuplah s'lamanya, serta
lengkapilah, Raja Mulia .

3. Rahmat dan anug'rah bagi umat
Allah, s'karang juga, agar kehidupan,
hati dan pikiran satu dengan Tuhan
Yang mulia.

4. Roh suci marilah, kalam hidup Allah,
yang berkuasa, jamahlah bibirku,
Sucikan hatiku, nyalakan Api-Mu di
dalamku.
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
