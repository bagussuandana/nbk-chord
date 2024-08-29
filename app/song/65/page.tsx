import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "65";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK65() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Apakah 'kau rasa letih, susah
hatimu? Kata Yesus: "Marilah kepada-
Ku!"

2. Dengan apa Ia memanggilku
kepada-Nya? Dengan luka di tangan
dan kaki-Nya.

3. Apakah Tuhan memakai mahkota
raja? Mahkota-Nya hanya duri belaka.
4. Jikalau 'ku ikut Tuhan, apa 'ku
t'rima? Banyak berkat s'karang dan
selamanya.

5. "Dapatkah aku dit'rima?", apa
jawab-Nya? Tentu Tuhan tidak tolak
anak-Nya.
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
