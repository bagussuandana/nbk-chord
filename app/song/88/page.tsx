import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "88";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK88() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Orang berdosa, dengar kabar
s'lamat, darah Yesus menghilangkan
dosa, Ia datang hilangkan segala
laknat serta membawa t'rang dan
sentosa.

Koor :
Yesus memanggil yang berdosa,
janganlah tunggu, dengar suara-Nya!

2. G'laplah jalan pada arah
langkahmu, lebar jalan menuju
neraka, cinta Yesus melebihi kuasamu ,
t'rima s'lamat, bagimu ters'dia!

3. Mari s'kalian, orang yang hancur
hati, 'kau disembuhkan di salib Yesus,
suara Tuhan hilangkan kegelapan,
datanglah pada juru penebus!
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
