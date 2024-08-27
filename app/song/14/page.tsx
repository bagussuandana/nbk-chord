import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "14";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK14() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Raja Kasih, gembalaku, kekal
kebaikan-Nya! Tak berkekurangan aku,
yang jadi milik-Nya.

2. Ke tempat air alhayat dibimbing-Nya
aku, Roti surga,istirahat, dib'rikan-nya
s'lalu!

3. Bodoh, s'ring aku tersesat, tapi
dengan kasih; Atas pundak-Nya dibawa
domba-Nya kembali.

4. Dalam lembah kematian hatiku tak
gentar, Tongkat-Nya b'ri penghiburan
kar'na Ia mengantar

5. Sepanjang umur hidupku tetap
kebaikan-Nya; Gembala baik, pujianku
sampai selamanya.
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
