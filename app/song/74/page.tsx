import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "74";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK74() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Dengarlah Yesus mengetuk hatimu, Ia
ingin mendiaminya, bukalah s'karang dan
jangan 'kau tunggu, t'rimalah Anak Allah.

Koor :
Buka hatimu s'karang, bimbang
dan takut hilang; Ia masih tunggu dan
ketuk pintu, buka hatimu s'karang.

2. Dengan kasih-Nya Tuhan masih ketuk
Ia mau tempati hatimu; Bukalah s'karang
agar Ia masuk, damai kekal milikmu.

3. Jikalau engkau membuka hatimu,
dip'nuhinya dengan cinta, Yesus, ialah
Juru Selamatmu, yang tolong dengan
setia .

4. Berbahagia yang dengar suara -Nya,
yang memanggil dengan cinta; Ia
memb'ri damai pada yang percaya dan
perhentian padanya.
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
