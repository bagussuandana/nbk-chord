import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "23";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK23() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Cinta ajaib t'lah bagiku
tercurah, di atas bukit keji
Golgota; Ya, di sana disiksa
Penebusku, kasih nyata, bagimu
dan aku.

2. Dari surga Ia datang di dunia
tak ada tempat disediakan,
Akhirnya kandang Bethlehem
dib'rikan, kar'na cinta Ia t'rima
semuanya.

3. Tuhan, b'rilah 'ku mengerti
kasih-Mu, pemb'rian indah,
karunia-Mu; Agar 'ku wartakan di
mana-mana kasih-Mu bagi orang
berdosa.
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
