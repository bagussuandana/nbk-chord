import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "25";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK25() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. C'ritakan pada saya cerita yang lama
tentang perkara surga, Yesus dan cinta-
Nya; C'ritakan dengan jelas s'perti pada
anak kecil, saya merasa lemah, berdosa
dan bernajis.

Koor :
C'ritakan pada saya, c'rita itu yang
lama; C'ritakan pada saya tentang cinta
Tuhan.

2. C'ritakan pada saya, biar saya mengerti
tebusab ajaib s'kali, obat bagi dosa;
C'ritakanlah s'ringkali agar saya tidak
lupa, saya perlu mendengar c'rita indah
itu.

3. C'ritakan pada saya dengan sungguh
nyata, bahwa Yesus t'lah datang
selamatkan saya; C'ritakan selamanya
agar saya diingatkan, dalam susah dan
duka jadi penghiburan.
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
