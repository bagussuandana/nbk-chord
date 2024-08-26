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
1. Mari bersama menyanyi: Allah baik ! Surga
dan dunia memuji: Allah baik ! Bangunlah, hai
jiwa-jiwa dari tidur dalam dosa! Kini ramai-
ramai nyanyilah: Allah baik !

Koor :
Allah baik ! Allah baik ! Marilah bersama
menyanyi: Allah baik !

2. B'ritakan ke s'luruh bumi: Allah baik ! Darah
Yesus memb'ri damai, Allah baik ! Dosa kita
dihapuskan, malam yang g'lap dilenyapkan,
sekarang kita memujikan: Allah baik !

3. S'karang kita hidup baru, Allah baik !
Perjanjian-Nya tetap teguh, Allah baik ! Dia
penolong yang s'tia, harapan kita s'lamanya,
Dia s'lalu menyertai kita, Allah baik !

4. Meski sengsara hidupku, Allah baik ! Kristus
mengalahkan set'ru! Allah baik ! Maut tidak
lagi takutkan! Yesus tak akan tinggalkan,
serta dari kubur bangkitan, Allah baik !
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
