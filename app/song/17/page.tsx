import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "17";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK17() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Sungguh besar anug'rah-Nya
yang t'lah kut'rima! D'hulu 'ku
sesat, berdosa, sekarang 'ku
s'lamat.

2. Anug'rah-Nya t'lah hilangkan
s'mua ketakutan; Pada waktu 'ku
serahkan seg'nap kehidupan!

3. Sering bahaya dan jerat
mengancam hidupku, oleh
anug'rah 'ku s'lamat, ke surga 'ku
tuju.

4. Di rumah Bapa yang baka t'rang
bagai mentari; Selamanya 'ku di
sana memuji tak henti.
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
