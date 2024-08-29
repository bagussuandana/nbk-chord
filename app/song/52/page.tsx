import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "52";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK52() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Roh Kasih yang abadi, bimbinglah 'ku
tiap hari, arahkanlah hatiku pada-Mu
s'lalu; Dunia dan isinya akan lenyap
semua, s'moga s'lalu kurasa dekat pada-
Mu!.

Koor :
Dekat pada-Mu! dekat pada-Mu!
s'moga s'lalu 'ku rasa dekat pada-Mu!.

2. Roh El-kudus, datanglah dalam hati
bertahta; Biar hasratku s'lamanya
bers'rah pada-Mu! Hidupku damai kini,
hilanglah nafsu keji; Sentosa dalam hati,
dekat pada-Mu!.

3. Bila rasa kuasa -Mu, 'ku tahu Engkau
sertaku; Jiwaku s'nang selalu, hidup bagi-
Mu! Pikiran yang gelisah, semua dosa
hilanglah; S'karang mulailah surga dalam
hatiku!.
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
