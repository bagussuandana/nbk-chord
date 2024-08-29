import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "87";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK87() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Nyanyikan padaku s'lalu, Injil yang
b'ri hidup; Nyatakan keindahannya, Injil
yang b'ri hidup; Injil yang mengajar
agar 'ku setia.

Koor :
Injil indah, Injil ajaib, Injil yang
b'ri hidup; Injil indah, Injil ajaib, Injil
yang b'ri hidup.

2. Yesus datang bawa s'lamat, Injil yang
b'ri hidup; Mencari orang yang sesat,
Injil yang b'ri hidup; Dib'rikan kepada
orang yang percaya.

3. Terdengar merdu bunyinya, Injil yang
b'ri hidup; B'ri hati damai gembira, Injil
yang b'ri hidup; Yesus Juru S'lamat
p'lihara s'lamanya.
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
