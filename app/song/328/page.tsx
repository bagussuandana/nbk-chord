import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "328";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK328() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
[Intro]
.556 3.45 .123 6.71 .121 3.15 5631
G    G7   C  Am   G Em    Am  D  G

G        Am         D             G
Aku tak takut walau awan mengitarku,
G        Am             D            G
Tuhanku s'lalu m'lindungi dan p'lihara;
G        Am        D             G    Em
Taufan sekalipun mengamuk, mengancamku,
            A7                 D
'ku yakin 'ku ada di tangan-Nya!

Koor :
G         G7
Di tangan-Nya,
          C   Am
di tangan-Nya,
       G       Em
masa depanku pun
          A7  D  D7
di tangan-Nya!
       G        G7
Hariku t'lah tentu,
          C   Am
diatur Tuhanku,
       G       Em
jalanku yang terbaik
          Am  D  G
di tangan-Nya!

Walaupun jalan di depanku tak aku tahu,
'ku akan tetap taat pada p'rintah- Nya;
Kar'na Tuhanku yang menjaga 'ku tak ragu,
'ku yakin 'ku ada di tangan- Nya!
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
