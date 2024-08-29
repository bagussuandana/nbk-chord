import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "59";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK59() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Ada satu neg'ri senang, amat
t'rang!. Yang tak ada kesusahan,
amat t'rang! Orang yang menang di
sana, mengangkat sorak gembira,
dengan malaikat bercah'ya, amat
t'rang!.

2. Kelaliman, kejahatan, tak ada!.
Kematian, kebusukkan, tak ada!.
Hanya m'reka yang ditebus oleh
darah Domba Allah; Orang yang
ingin dosa t'rus, tak ada!.

3. Meskipun kita berdosa, ditebus!.
Meskipun hilang sentosa, ditebus!.
Kita dapat disucikan, kar'na darah-
Nya menebus; Hidup senang
dengan Tuhan, ditebus!.
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
