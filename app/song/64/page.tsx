import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "64";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK64() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Apakah hatimu berduka, hidup
sungguh b'rat dengan beban? Bawalah
saja ke Golgota serta tinggalkan
kekuatiran.

Koor :
Hati kuatir , gundah gulana,
bawalah ke Bangku Anug'rah;
Bebanmu akan lenyap seg'ra, pada
Yesus, datanglah!.

2. Ta'da s'habat begitu setia yang
sedia b'ri pertolongan; Ta'da tempat
tinggalkan beban serta doamu 'kan
dikabulkan.

3. Dengar Tuhan memanggil engkau,
janganlah takut atau ragu; Damai-Nya
k'lak dib'ri padamu, datanglah
s'karang dan jangan tunggu!.
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
