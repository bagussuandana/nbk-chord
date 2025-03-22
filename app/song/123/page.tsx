import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AudioPlayer = dynamic(() => import("@/components/audio-player"), {
    ssr: false,
});

const songID = "123";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK123() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
A     C#m     F#m     E
Dalam dosa'ku tengg'lam
A    C#m    Bm    D
jauh dari daratan;
Bm    E     Bm    E   
Hatiku sangat cemas,
Bm    E        A   Bm
putus pengharapan;
A     C#m     F#m     E
Dengar doaku Tuhan,
A    A7          D
b'ri 'ku keselamatan,
D          A      F#m
dari dosa 'ku seg'ra
Bm    E     A
diangkat-Nya.

Koor :
A C#m F#m A
Kasih Tuhan
F#m  E   D   D
mengangkat 'ku,
Bm  E    A   F#m
aku selamat oleh
B         E  E7
kasih Tuhan;
A    E    A  A
Kasih Tuhan
F#m   E     D
mengangkat 'ku,
D   D7     A     F#m
tak lain hanya oleh
Bm   E    A
kasih Tuhan.

Hidupku 'kuserahkan
pada penebusku;
'Ku mau hidup serta-Nya,
Ia pimpinku s'lalu;
Kasih Tuhan yang besar
patut 'ku balaskan,
'ku layani dengan senang
s'lamanya.

Pandanglah pada Yesus
sobatmu yang benar,
Ia mau s'lamatkan engkau
dengan pengasihan;
Datanglah kepada-Nya
janganlah 'kau gentar,
baiklah 'kau seg'ra
t'rima kes'lamatan.
`;
    const songFile = `/assets/mp3/${songID}.mp3`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <AudioPlayer src={songFile} />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
