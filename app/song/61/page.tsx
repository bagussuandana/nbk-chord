import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "61";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK61() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Apakah cinta Tuhan itu tak pernah kau
pikirkan, yang kar'na mati-Nya di salib
memb'ri engkau kes'lamatan?

Koor :
Hai, ingatlah, hai, ingatlah, cinta-
Nya yang besar bagimu! Hai, ingatlah,
hai, ingatlah, sengsara-Nya bagimu!

2. Apakah 'kau mau perhatikan panggilan
Tuhan Yesus? T'rimalah s'karang
kes'lamatan, janganlah k'raskan hatimu.

3. Apakah kurnia Tuhan itu k'lak
menangkan hatimu? Lihat b'tapa besar
kasih-Nya, Ia sungguh cinta padamu!.

4. Apakah arti nama Yesus? berp'rangkah
'kau bagi-Nya? Ia panggil: "Ikutlah Aku,
melayani-Ku di dunia !"
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
