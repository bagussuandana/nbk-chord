import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "29";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK29() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Ingat s'lalu nama Tuhan di dalam
kesusahan, sebab Ia menjanjikan
segala pertolongan.

Koor :
Ingatlah nama-Nya, Juru
S'lamat yang kuasa , ingatlah nama-
Nya, Juru S'lamat yang kuasa.

2. Ingat s'lalu nama Tuhan di
dalam pencobaan, Ia 'kan memb'ri
kekuatan dan memb'ri
kemenangan.

3. Ingat s'lalu nama Tuhan, ingat
kecintaan-Nya; Ia tidak melupakan
umat-Nya yang setia.
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
