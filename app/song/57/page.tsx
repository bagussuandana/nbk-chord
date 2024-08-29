import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "57";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK57() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Tuhan Yesus kami datang di hadapan-
Mu s'karang, baptiskanlah dengan Roh-
Mu, marilah, kami tunggu!.
Koor : Curahkanlah s'karang Roh-Mu di
dalam hati kami; Agar mulai saat ini,
pekerjaan-Mu maju.

2. Hati kami t'lah terbuka, curahkan Roh-
Mu s'karang; Penuhkanlah jiwa kami
dengan pujian dan kuas a.

3. Waktu dan talenta semua , kami
s'rahkan pada-Mu; Berpegang pada janji-
Mu, curahkanlah Api-Mu!.

4. Haleluya! Roh-Mu datang, hatiku
disucikan; Watak 'ku t'lah dimurnikan, 'ku
disucikan s'karang.
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
