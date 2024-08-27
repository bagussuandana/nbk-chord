import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "43";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK43() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Yesus akan jadi raja di dalam seg'nap
dunia, kuasa-Nya akan dapat dilihat di
seluruh jagad raya.

2. S'gala bangsa memuliakan kasih-Nya
dengan nyanyian; Anak-anak turut nyanyi
juga, puji nama-Nya yang mulia .

3. Bila Yesus jadi raja, adil dan makmur di
dunia ; yang terb'lenggu akan dibebaskan,
yang dahaga dipuaskan.

4. Kuasa Yesus menghilangkan maut
serta s'mua kutukan; Apa yang Adam
telah musnahkan, oleh Yesus dipulihkan.

5. Tiap mahluk, hormatilah Raja kita
Maha Murah! Para m'laikat menyanyi
pujian, dunia t'rus menggemakannya.
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
