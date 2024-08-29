import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "85";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK85() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Mari orang berdosa, janganlah
menunda kes'lamatan Tuhan, penuh
dan mulia; Bangunlah,s'kalian yang di
perhamba dosa, percayalah, t'rang
surga pasti 'kau t'rima.

Koor :
Tuhan Yesus putuskan s'gala
rantai setan, oleh kuasa-Nya kita dapat
menang. Tuhan Yesus putuskan s'gala
rantai setan, oleh kuasa-Nya kita dapat
menang.

2. Dunia akan melawan, setan berusaha,
dengan bujukan serta tipu daya; Tetapi
Tuhan Yesus t'lah kalahkan dia, Ia tentu
dapat menolong engkau juga.

3. Meski pep'rangan hebat, banyak
aniaya, namun di surga tempat tersedia,
mahkota kerajaan akan dib'rikan pahala
bagi engkau tanda kem'nangan.
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
