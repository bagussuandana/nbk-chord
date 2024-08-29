import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "58";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK58() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Ada neg'ri jauh di sana, mulia,
mulia, di mana dosa dan susah tak
ada, tak ada; Malaikat kumpul di sana,
menyanyi lagu gembira dengan Yesus,
Anak Allah, mulia, mulia.

2. Tak ada awan pencoba'n, di sana, di
sana! Air mata pun tak berlinang, di
sana, di sana! M'reka minum air
alhayat yang dib'rikan Juru S'lamat,
sehingga ta'da yang penat, di sana, di
sana!.

3. Bagi kita Yesus mati di salib, di
salib! Keampunan dosa dib'ri, di salib,
di salib! Dari laknat dosa s'kalian, kita
dapat disucikan, kar'na jasa
pengorbanan, di salib, di salib!
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
