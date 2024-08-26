import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "94";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK94() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. 'Kau yang cinta Tuhan, pujilah
nama-Nya, nyanyilah hal kecinta'n-
Nya, kabarkan keselamatan.

Koor:
Puji Tuhan, haleluya, puji
Tuhan, haleluya! Haleluya, haleluya,
haleluya, puji Tuhan.

2. Hingga dilangit pun nyatalah
rahmat-Nya, yang t'lah menebus
jiwaku untuk kemulian-Nya.

3. Puji akan Tuhan, yang ampuni
dosa, yang membarui hidupku dan
memberikan sentosa.

4. S'perti Yerusalem terlingkung
bukitnya, Tuhan m'lindungi umat-
Nya, yang setia kepada-Nya.
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
