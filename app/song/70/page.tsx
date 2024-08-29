import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "70";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK70() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Datanglah orang berdosa, Yesus
panggil, datanglah! Ia mau memb'ri
sentosa, Janganlah lambat saja.

Koor :
Yesus panggil, Yesus panggil.
Datanglah kepada-Nya! Yesus panggil,
Yesus panggil. Datanglah kepada-Nya!

2. Dosa yang teramat jahat hilang oleh
darah-Nya; Dengan luka dan sengsara
Tuhan b'li kes'lamatan.

3. Mengapa'kau berlambatan s'mua
sudah sedia, jangan mendukakan
Kristus yang mati ganti kita.

4. Tuhan hanyalah meminta buangkan
s'mua dosa; Hidup suci dan setia untuk
balas cinta-Nya.
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
