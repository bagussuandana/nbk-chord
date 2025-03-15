import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "9";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK9() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
[Intro]:
11.111 2176 52 1 0
C  C7  F D7  Dm G C

C       Em      F G C
Mari bersama menyanyi:
F    G    C
Allah baik !
C       Em      F G Am
Surga dan dunia memuji:
D       G
Allah baik !
Dm         G           C
Bangunlah, hai jiwa-jiwa
Dm         G           C
dari tidur dalam dosa!
C       C7     F     D7
Kini ramai-ramai nyanyilah:
Dm    G    C
Allah baik !

Koor :
C   A7    Dm
Allah baik !
G         C
Allah baik !
C       C7     F     D7
Marilah bersama menyanyi:
Dm    G    C
Allah baik !

B'ritakan ke s'luruh bumi:
Allah baik !
Darah Yesus memb'ri damai,
Allah baik !
Dosa kita dihapuskan,
malam yang g'lap dilenyapkan,
sekarang kita memujikan:
Allah baik !

S'karang kita hidup baru,
Allah baik !
Perjanjian-Nya tetap teguh,
Allah baik !
Dia penolong yang s'tia,
harapan kita s'lamanya,
Dia s'lalu menyertai kita,
Allah baik !

Meski sengsara hidupku,
Allah baik !
Kristus mengalahkan set'ru!
Allah baik !
Maut tidak lagi takutkan!
Yesus tak akan tinggalkan,
serta dari kubur bangkitan,
Allah baik !
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
