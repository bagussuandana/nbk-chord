import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "20";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK20() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Ada cerita yang selalu baru dan menyenangkan
jiwaku, yaitu hal Tuhan Juru S'lamatku, yang rela
menanggung dosaku; Cerita itu dari hal gembala
dan m'laikat yang nyanyi merdu; Orang Alim
membawa pembr'iannya dan menyembah Anak
itu.

Koor :
Tuhanku tergantung di salib, orang
mengumpati Dia; Sengsara ditanggung, o, cinta
ajaib ! kar'na dosa manusia.

2. Juga dikatakan hal cinta, rahmat, harapan
orang berdosa, yang lemah dan duka serta yang
penat, Tuhan memanggil mereka; Yang mati
dib'rikan-Nya hidup pula, angin ribut diteduhkan-
Nya; Juga bagi yang di dalam bahaya, Dia s'habat
yang Mahakuasa.

3. Bagiku Tuhan t'lah datang di dunia maksud-Nya
membebaskanku; Piala hukumanku diminum-Nya,
mMurka Allah sudah lalu, Cinta Yesus t'lah
menangkan hatiku, s'karang 'ku jadi milik-Nya,
dengan sukarela dan hati sungguh 'ku serah s'mua
pada-Nya.
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
