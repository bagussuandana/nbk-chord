import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import SoundCloudEmbed from "@/components/soundcloud-embed";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "265";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK265() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
    A  A        Bm      E
Tuhan, bila'ku tersandung
Bm     E        A   Bm E
pada jalan hidupku,
A  A7            D      B7
tujuan hidupku tak tetap,
A          E    A
berubah tiap waktu;
E  E                A     
B'ri 'ku kesempatan lagi
B               E
untuk melayani-Mu;
A  A7         D       D
Jadikan 'ku suci, murni,
A          E    A
taati kehendak-Mu.

Koor :
E  E            A
Semua pekerjaanku
 B               E
untuk Tuhan 'ku memb'ri;
A  A7            D
Moga 'ku setia s'lalu
A          E    A
pada waktu diuji.

Bila 'ku hanya bekerja
untuk upahnya saja.
Lupakan perjanjianku
mencari jiwa- jiwa;
Engkau tahu hidupku Tuhan,
semua t'rang bagi-Mu;
Pasti Engkau mengadili
s'gala perbuatanku.

Kasih harus menguasai
hidupku selamanya,
tanpa kasih yang sejati
karyaku	sia-sia;
Dengan sabar penuh kasih
dan hasrat	yang bernyala,
'ku bekerja	dengan s'lamanya.
s'tia bagi Tuhan
`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <SoundCloudEmbed trackUrl="https://soundcloud.com/gusti-bagus-suandana/bnbk-265" />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
