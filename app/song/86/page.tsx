import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "86";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK86() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Maukah 'kau bebas dari dosamu? Darah
Tuhan yang berkuasa! Maukah 'kau
kalahkan kuasa set'ru? Darah Tuhan yang
berkuasa !

Koor :
Ada kuasa yang amat ajaib dalam
darah Tuhan, ada kuasa yang amat ajaib,
dosaku dihapuskan.

2. Maukah engkau kalahkan nafsumu?
Darah Tuhan yang berkuasa! Rahmat-Nya
menyucikan jiwamu, darah Tuhan yang
berkuasa !

3. Maukah 'kau hidup tanpa bercela? Darah
Tuhan yang berkuasa! Jiwamu akan
diselamatkan, darah Tuhan yang berkuasa!

4. Maukah 'kau melayani Rajamu? Darah
Tuhan yang berkuasa? Setiap hari
memujikan Hu, darah Tuhan yang
berkuasa !
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
