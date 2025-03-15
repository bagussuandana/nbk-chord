import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "261";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK261() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
G             C      G
Sungguhlah pelayananku
Em           Am         D
tidak sebanding cinta-Mu!
Em                      Am
Lemah tak berarti kerjaku;
D Ddim Em  D           G
O, jadikan 'ku saksi- Mu,

Koor :
G               C       D
Di bawah salib, saat suci,
G                      Em
ada kuasa yang membaharui,
G7       C      Em     Am
tak berdaya 'ku mohon kini,
D Ddim Em   G7   C    G
lengkapi 'ku untuk m'layani.

Tak hiraukan suara-Mu,
bagi-Mu lambat 'ku kerja,
bukit 'ku daki dengan lesu
yang mengantar ke'Golgota'.

Tambahkan kekuatanku,
Mataku Tuhan, celikkan,
b'ri iman dalam keraguan
agar layak p'layananku.
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
