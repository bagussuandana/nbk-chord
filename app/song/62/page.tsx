import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "62";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK62() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Apakah 'kau ada tempat bagi Juru
Selamat, yang ketuk dan minta masuk?
Buka s'karang hatimu!.

Koor :
Buka bagi Raja mulia , s'karang
pintu hatimu, agar Ia dapat masuk,
sedang Ia menunggu.

2. Tempat bagi kesenangan dapat banyak
perhatian, tapi tidak bagi Tuhan yang rela
disalibkan.

3. Apakah'kau ada waktu? Tuhan tunggu
dengan kasih; S'karang harus t'rima Dia,
seb'lum kasip waktunya.

4. Tempat, waktu b'rikan Tuhan,
janganlah sampai terlambat; Kelak tak
ada jemputan bagi yang cari s'lamat.
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
