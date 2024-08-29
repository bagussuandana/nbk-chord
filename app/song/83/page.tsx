import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "83";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK83() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Malam g'lap t'lah tiba,
mengg'lisahkan jiwa, terpendam di hati
noda dan dosa; Waktu 'ku bersedih,
sukmaku tertindih oleh darah Yesus
t'lah dihilangkan-Nya.

Koor :
Luka Yesus terbuka agar orang
berdosa mendapat kesembuhan untuk
jiwanya.

2. Beban diringankan, hati disenangkan,
kar'na darah itu penawar dosa; G'lap
malam lenyaplah dan fajar merekah,
kesenangan baka meresap di jiwa.

3. Sekarang datanglah, jangan tunggu
lama! Kematian datang dengan segera;
Terpencar darah-Nya, mengalir rahmat-
Nya, cinta-Nya mengampuni segala
dosa.
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
