import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "75";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK75() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Di seluruh pelosok Indonesia, Bala
kes'lamatan bekerja dengan kasih dan hasrat
bernyala, wartakan kabar kelepasan; Tuhan
Yesus yang t'lah di salibkan s'lamatkan orang
yang berdosa; Kar'na itu kami menyerukan:
Marilah dan t'rima s'lamat-Nya!

Koor :
Bagimu pun ada s'lamat, bagimu pun ada
s'lamat; Bagimu Yesus mati di salib, Bagimu
pun ada selamat!

2. Lihatlah dosa yang merajalela, merusak dan
membawa susah; Hanya dalam TuhanYesus
saja ada tebusan yang sempurna; Dengan
bendera "Darah dan Api", melawan segala yang
jahat dan berseru dengan gagah b'rani: Tuhan
Yesus saja b'ri s'lamat!

3. Siapa yang percaya kepada Tuhan dan turut
segala p'rintah-Nya, hidupnya dipenuhi
kesenangan, hilanglah segala susahnya; Mari
kita s'kalian puji Tuhan dalam dunia dan
akhirat; Muliakan bersama kasih Tuhan, kar'na
Ia yang b'rikan s'lamat!
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
