import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "72";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK72() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Dengarlah Injil anug'rah atas bukit
Golgota; Darah Kristus terpancarlah sumber
s'gala anug'rah; O, pandanglah Anak Allah
tanggung semua dosa, O, pandanglah Anak
Allah tanggung semua dosa.

2. Lari kebukit Golgota, carilah perlindungan,
Dalam sumber kasih Allah dosamu
dihapuskan; Datang pada Anak Allah yang
tanggung semua dosa, Datang pada Anak
Allah yang tanggung semua dosa.

3. Dalam sungai kasih Allah jutaan
dis'lamatkan, tak perlu orang binasa, ampun
disediakan; Percayalah Anak Allah yang
tanggung semua dosa, Percayalah Anak Allah
yang tanggung semua dosa.

4. Kristus sumber kehidupan k'lak dijumpai di
surga; Dalam samud'ra kasih-Nya sentosa
selamanya; Kepenuhan kasih Tuhan dinikmati
di sana, Kepenuhan kasih Tuhan dinikmati di
sana.
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
