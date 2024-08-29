import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "66";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK66() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Belum 'kau dengar hal sungai yang
permai, di tanah pusaka Bapa? Dalam
t'rang surga airnya yang jernih m'ngalir
ke pantai baka.

Koor :
Carilah sungai itu, carilah sungai
itu; Sejuk airnya, ajaib kuasa -nya; Carilah
sungai itu.

2. Air -nya menderu dengan bunyi merdu
di tengah taman Tuhanku; Suaka indah,
terdengar nyanyian dari para biduan.

3. Di pancaran-Nya yang dalam dan
indah, menyegarkan jiwa lelah, tetap
mengalir dari takhta Allah; Datanglah
kepada-Nya.

4. Marilah minum dari sungai permai,
tinggal di pantai yang indah; Roh kata :
"Mari yang susah dan letih, jangan
berdosa pula.
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
