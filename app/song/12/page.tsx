import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "12";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK12() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Pujilah bersama-sama karunia Tuhan
kita, M'laikat-m'laikat dalam surga juga
puji nama-Nya.
Koor : Haleluya! hai jiwaku! pujilah akan
Tuhan! Pujilah seumur hidup akan Allah
yang rahman Nyanyi Mazmur pada-Nya,
pujilah selamanya; Nyanyi Mazmur ada-
Nya, pujilah selamanya.

2. Dapatkah kita berdiam akan
kemuliaan-Nya , sedangkan sekalian
alam memujikan kuasa-Nya?

3. Hendaklah kita nyanyikan dengan
bersukaria, kar'na s'lamat yang
dib'rikan, hati kita gembira.

4. Biarlah kita memuji kar'na s'lamat
yang dib'ri, dalam kehidupan suci, tanda
kasih sejati.
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
