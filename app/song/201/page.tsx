import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "201";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK201() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
Maukah 'kau tahu pada siapa
'ku persembahkan bunga
s'bagai tanda t'rima kasih
dan cinta ku padanya?
Tentulah pada ibuku
membawa hormatku.

Setiap hari 'ku melihat
ibu kerja tak penat;
Rupanya bagi anaknya
kerja tak dirasa b'rat,
dengan suka dan s'tia
jaga akan anaknya.

B'rilah berkat-Mu Tuhanku,
tolong ibuku s'lalu!
Biarlah aku membawa
kesenangan padanya,
agar bersama-sama
kami jalan ke surga.
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
