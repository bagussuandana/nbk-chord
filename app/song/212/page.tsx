import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import SoundCloudEmbed from "@/components/soundcloud-embed";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "212";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK212() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
A   A7     D     Bm
Aku rindu hati suci
E  E7         A E
bebas dari dosa,
A  A7     D     Bm
agar Allah yang semawi
E  E7         A D A
met'raikan kasih-Nya,
E  E7         A    A
met'raikan kasih-Nya,
E  E7         A    A E
met'raikan kasih- Nya,
A  A7     D     Bm
agar Allah yang semawi
E  E7         A D A
met'raikan kasih-Nya.

Hati yang pada Allah
ku selalu berserah,
di sana hanya Tuhanku
yang boleh bertakhta,
yang boleh bertakhta,
yang boleh bertakhta;
Di sana hanya Tuhanku
yang boleh bertakhta.

Baharuilah hatiku,
suci dan sempurna,
supaya s'perti Tuhanku,
penuh dengan cinta,
penuh dengan cinta,
penuh dengan cinta;
Supaya s'perti Tuhanku,
penuh dengan cinta.

Ya Tuhan, dalam hatiku,
yang lemah dan hina,
baiklah ditulis nama-Mu,
ya nama-Mu: "Cinta",
ya nama-Mu: "Cinta",
ya nama-MU: " Cinta";
Baiklah ditulis nama-Mu,
ya nama- Mu: "Cinta".

`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <SoundCloudEmbed trackUrl="https://soundcloud.com/gusti-bagus-suandana/bnbk-212" />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
