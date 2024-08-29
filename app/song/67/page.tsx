import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "67";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK67() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Berjuta-juta jiwa t'lah masuk surga
mulia ; Meskipun banyak jumlahnya,
tempat masih ada.

Koor :
Marilah bersama saya menuju
tempat mulia ; Dan kesenangan
sempurna sampai selamanya.

2. Yang timpang, yang buta, tuli dapat
masuk juga; Oleh kematian Kristus,
pintunya terbuka.

3. Orang yang paling durhaka dapat
masuk juga; S'perti penyamun disalib
di bukit Golgota.

4. Bagiku t'lah tersedia tempat yang
mulia!. Walau seorang berdosa
dis'lamatkan juga.
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
