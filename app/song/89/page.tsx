import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "89";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK89() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Orang berdosa yang jauh dari Allah,
'kau seperti domba yang terhilang;
Tuhanmu memanggil dengan kasih-
Nya serta mengajak engkau pulang.

Koor :
Datang s'karang, datang
s'karang, Yesus yang panggil, datang
s'karang.

2. Mengapa engkau menolak cinta-
Nya, yang t'lah mati disalib gantimu?
Yang berseru: "Ampunilah, ya Bapa!"
Ia mend'rita kar'na engkau.

3. Katakanlah: S'karang kudatang
Tuhan! Aku menyesali s'mua dosaku,
Sucikanlah Tuhan, s'karang hatiku,
agar 'ku t'rima kes'lamatan.
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
