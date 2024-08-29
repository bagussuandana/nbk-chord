import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "51";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK51() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Permintaan doa kami, naik
hingga takhta Allah! B'rilah kami,
Allah Bapa, seperti d'hulu kala,
berkat hari Pentakosta; Roh-
Elkudus yang mul ia.

2. Roh Tuhan hendak penuhi yang
merindu pada-Nya dengan cinta,
terang, kuasa , serta hasrat
bernyala; Kini pula doa kami, Roh-
Elkudus, datanglah!.

3. Penuhkanlah hati kami dengan
Roh kecinta'n-Mu, biar kami dengar
suara -Mu, dan terima damai-Mu;
Kami sembah dan berbakti, kepada-
Mu selalu.
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
