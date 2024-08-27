import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "50";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK50() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. O, Kristus, Api Penyucian, curahkanlah s'karang
Api-Mu! Yang dib'li oleh darah Tuhan, curahkanlah
s'karang api-Mu; Lihatlah kami yang menanti Roh
Kudus yang telah dijanji; B'rikanlah Pentakosta
lagi, curahkanlah s'karang Api-Mu!.

2. Allah Elia, o, dengarlah, curahkanlah s'karang
Api-Mu! Baik hidup, mati, kami sedia , curahkanlah
s'karang Api-mu! Supaya menghanguskan dosa,
dan bawa terang dari surga, terjadi revolusi jiwa,
curahkanlah s'karang Api-Mu!.

3. Api yang sangat dibutuhkan, curahkanlah
s'karang Api-Mu! Dan b'ri apa yang diperlukan,
curahkanlah s'karang Api-Mu! Agar berbuat yang
benar, menang seperti pendekar, hidup suci
dengan tak cemar, curahkanlah s'karang Api-Mu!.

4. B'ranikanlah kami yang lemah, curahkanlah
s'karang Api-Mu! Untuk menolong jiwa-jiwa,
curahkanlah s'karang Api-Mu! Lihatlah atas
medzbah Tuhan, hidup kami dipersembahkan,
semoga Engkau perkenankan, curahkanlah
s'karang Api-Mu!
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
