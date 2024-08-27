import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "48";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK48() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Hembuskanlah Rohmu, b'rilah
hidup baru, agar hidup dan cintaku
meniru teladan-Mu.

2. Hembuskanlah Roh-mu, sucikan
hatiku, agar kehendakku padu
dengan kehendak-Mu.

3. Hembuskanlah Roh-Mu,
kuasailah aku, agar Api-Mu selalu
memenuhi hidupku.

4. Hembuskanlah roh-Mu, agar 'ku
hidup t'rus, tinggal setia selalu
dengan hati yang kudus.
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
