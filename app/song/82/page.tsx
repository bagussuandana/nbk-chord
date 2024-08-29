import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "82";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK82() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Lihatlah Aku mengetuk di depan
pintu hatimu; O, dengarkanlah
suara-Ku, biarkanlah Aku masuk.

Koor :
Aku ketuk di depan pintu
mau masuk dalam hatimu;
Orang berdosa jangan tunggu,
biarkanlah Aku masuk.

2. 'Ku pakai mahkota duri, panjang
sabar dan kasih-Ku; Orang yang
berdosa yang tertindih, biarkanlah
Aku masuk.

3. Aku bawa dari surga damai,
sentosa dan senang; Orang berdosa
yang gelisah biarkan Aku masuk.
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
