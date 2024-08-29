import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "71";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK71() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Dengan kasih sayang Yesus
memanggil, panggil engkau dan saya;
Dengan sabar Ia sedang menanti,
menanti 'kau dan saya.

Koor :
Mari, pulang! Orang berlelah
pulang pulang! Yesus memanggil
dengan kasih sayang, orang berdosa
pulang!

2. Yesus memanggil, k'napa 'kau
menunda? panggil engkau dan saya,
k'napa lambat tak menghiraukan Dia?
Rahmat-Nya tersedia.

3. Ingatlah janji kasih-Nya yang indah,
bagi engkau dan saya, walau berdosa
ada keampunan bagi engkau dan saya.
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
