import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "37";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK37() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Puji! Puji! Yesus Juru S'lamat kita! Nyanyi!
Dunia masyhurkan nama-Nya! Sorak, sorak,
tent'ra malaikat di surga, b'rilah hormat,
pujilah nama-Nya! Dengan cinta-Nya, Ia
melindungi kita, jaga kita seperti gembala;
Puji! Puji! Besarlah kemuliaan-Nya! Nyanyi!
Nyanyi pujilah s'lamanya!

2. Puji! Puji! Yesus Juru S'lamat kita! Di salib,
menebus s'gala dosa; Bawa harapan, sentosa
dan selamat; Nyanyi! Nyanyi! B'ritakan
rahmat-Nya; Pujilah Tuhan, yang
menanggung sengsara, tak terduga ajaiblah
cinta-Nya! Puji! Puji! Besarlah kemuliaan-
Nya! Nyanyi! Nyanyi! Pujilah S'lamanya!

3. Puji! Puji! Yesus Juru S'lamat kita, seg'nap
alam sorak haleluya! Yesus, Penebus yang
mem'rintah s'lamanya, sambut Dia, Nabi,
Imam, Raja! Kristus k'lak datang, datang pula
ke dunia; Kemulia'n kuasa dib'ri pada-Nya;
Puji! Puji! Besarlah kemuliaan-Nya! Nyanyi!
Nyanyi! Pujilah s'lamanya!
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
