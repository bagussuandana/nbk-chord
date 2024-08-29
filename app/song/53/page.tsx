import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "53";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK53() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Roh yang Suci datang s'perti
d'hulu; Sembuhkanlah kami dari
dosa, sucikanlah kami sama s'kali.

Koor :
 Mari Roh Suci, kami sangat
rindu jadi tempat tinggal-Mu, mari
Roh Suci.

2. Roh yang Suci, b'rilah pengertian
tentang kehendak-Mu, agar kami
melakukan hukum kasih s'lalu.

3. Roh yang Suci, Api Pentakosta,
turun dan tolonglah, agar kami
mewujudkan kasih Allah, Bapa.
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
