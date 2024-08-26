import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "8";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK8() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Maha Cinta Tuhanku, aku puji
berseru, kar'na rindu hatiku, cinta-Nya
besar; Dari surga yang baka masuk
dunia yang fana, tanggung dosa atas-
Nya,cinta-Nya besar.

Koor :
Cinta-Nya besar, cinta-Nya
besar, tidak terduga dan luas benar,
cinta-Nya besar.

2. Yang buta dicelikkan ,yang timpang
pun berjalan, yang mati dibangkitkan,
cinta-Nya besar; Meski dosa Ia benci,
cinta-Nya lebih besar, yang salah
diampuni, cinta-Nya besar.

3. Tinggalkan semuanya, datang pada
rahmat-Nya, t'rima janji s'lamat-Nya,
cinta-Nya besar; Jangan sampai
terlambat dengar s'karang suara-Nya , ke
Yerusalem baka! Cinta-Nya besar.
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
