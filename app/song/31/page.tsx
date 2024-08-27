import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "31";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK31() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Kenalkah engkau nama yang terindah
yang dib'ri oleh Tuhan? Terpuji nama itu
s'luruh dunia , baik di laut dan daratan.

Koor :
Nama yang terindah itu Yesus! Tak
ada yang lebih mulia! Di dalam nama
Yesus ada s'lamat Hanya dalam nama-
Nya.

2. Seperti bintang- bintang bercahaya,
atas dunia g'lap fana, Nama Yesus pun
terang pengharapan, bagi orang berdosa.

3. Adakah hati yang berdukacita? nama-
Nya menghiburkan, Dan teduhkan ombak
yang bergelora, tenangkan kehidupan.

4. Dan bila nama lain t'lah dilupakan,
nama Yesus tetaplah! Tinggal dalam hati
sampai s'lamanya, nama Yesus mulia!
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
