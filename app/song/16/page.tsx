import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "16";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK16() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. S'gala kemulia'n bagi Allah Rahman,
Put'ra-Nya Ia b'rikan sebagai kurban,
untuk menebus dosa isi dunia, o leh-Nya
pintu surga t'lah terbuka.

Koor :
Pujilah Tuhan Hu! Soraklah
Bergirang! Pujilah Tuhan Hu! Hai jiwa
yang senang! Datanglah pada-Nya demi
anak-Nya, hormatilah Dia kar'na jasa-
Nya.

2. Tebusan yang mulia oleh darah-Nya,
bagi orang yang percaya pada-Nya; Juga
yang terjahat dapat dit'rima, jikalau
menyesal akan dosanya.

3. Mulia s'gala firman dan perbuatan-Nya ,
kita bergirang di dalam nama-Nya, tapi
lebih mulia nanti di surga, kita hidup
bersama dengan Dia.
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
