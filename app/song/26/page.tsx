import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "26";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK26() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. C'ritakanlah pada saya c'rita yang amat
indah, c'ritakanlah tentang Yesus yang saya
amat cinta; Tentang malaikat yang nyanyi
waktu kelahiran-Nya; "Pujilah Allah di tinggi,
damai kepada manusia".

Koor :
C'ritakanlah pada saya, C'rita yang
amat indah; C'ritakanlah tentang Yesus yang
saya amat cinta.

2. Ia berpuasa sendirian dalam gurun yang
lengang, lalu digodai setan, tapi Ia t'lah
menang; Bertahun-tahun karya-Nya,
tanggung sengsara yang b'rat, tidak
mempunyai rumah, hidup-Nya miskin dan
melarat.

3. Akhirnya Ia dipalang, dioloki musuh-Nya,
lalu Ia dikuburkan, tetapi bangkit pula; C'rita
hal cinta yang indah mengg'rakkan hati saya,
pujilah Yesus s'lamanya, yang telah mati
ganti saya!
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
