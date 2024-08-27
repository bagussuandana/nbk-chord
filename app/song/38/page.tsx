import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "38";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK38() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Puji Yesus Juru Penebus kita yang
s'lamatkan orang yang terhilang;
Janganlah takut, dengarlah kata-Nya:
"Allah Bapa-Ku besarlah cinta-Nya

Koor :
Puji Yesus! Puji Yesus!, Puji
Yesus! Puji Yesus!.

2. Puji Yesus, 'ku sorak selamanya,
imanku tak dipermalukan-Nya;
Kuserahkan seg'nap roh, jiwa, badan
dan kehidupanku t'rus pada Tuhan;

3. Puji Yesus! Suara-Nya
menyenangkan hatiku, t'rus 'ku mau
ikut Tuhan; Ku mau berp'rang meski
ada bahaya, banyak pencobaan dan
aniaya,
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
