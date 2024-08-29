import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "55";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK55() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Roh yang rahman, tinggallah dalam
kehidupanku; Agar hidupku s'lalu
memantulkan kasih-Mu, dengan lembut dan
b'rani untuk Tuhan bersaksi. Dengan lembut
dan b'rani untuk Tuhan bersaksi.

2. Roh yang benar, tinggallah dalam
kehidupanku; B'rilah hikmah ilahi, bimbinglah
'ku tiap hari, dengan kata dan t'ladan,
kabarkan kasih Tuhan, dengan kata dan
t'ladan, kabarkan kasih Tuhan,

3. Roh yang kuasa , tinggallah dalam
kehidupanku; Agar 'ku dapat m'lawan dosa
dan kejahatan; Dengan kasih bernyala,
mencari jiwa-jiwa, dengan kasih bernyala,
mencari jiwa-jiwa.

4. Roh yang suci, tinggallah dalam
kehidupanku; Agar 'ku hidup suci, jauhkan
dari yang keji; Semua yang 'ku punya untuk
Tuhan s'lamanya, semua yang 'ku punya
untuk Tuhan s'lamanya.
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
