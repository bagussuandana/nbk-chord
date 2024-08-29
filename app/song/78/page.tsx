import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "78";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK78() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Hanya selangkah saja! datang pada
Yesus! Mari mengaku dosa, pada
Tuhan Yesus!

Koor :
Satu langkah, satu langkah,
marilah cepat! Mari, mengaku dosa,
dan t'rimalah sentosa, janganlah tolak
rahmat dari Juru S'lamat.

2. Hanya selangkah saja, percaya
darah-Nya, Ia tunggu dengan cinta,
mau ampuni dosa.

3. Dari dosa ke rahmat hanyalah
selangkah, waktumu lekas lewat
jawabmu apakah?

4. Hanya selangkah saja! Mari dan
katakan: "dengan senang ku'srahkan
diri pada Tuhan."
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
