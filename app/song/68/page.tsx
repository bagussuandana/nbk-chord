import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "68";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK68() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Berkat damai dan kesenangan
bagianmu; Kalau dengan sesal 'kau
datang pada Juru S'lamatmu.

Koor :
Dunia ini tak berkuasa
membahagiakan ; Yesus saja yang
menghilangkan segala kesedihan.

2. Bahagia lebih dari harta 'kau 'kan
t'rima dari Yesus dengan k'limpahan,
asalkan 'kau percaya.

3. Bebas dari takut dan risau inginkah
'kau? Yesus adalah pelepasmu yang
membebaskan engkau.

4. Damai mengalir s'perti sungai 'kau
'kan t'rima; Lepas dari susah sukarmu,
asal hidupmu bers'rah.
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
