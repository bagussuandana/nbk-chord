import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "159";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK159() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
         E    G#m        C#m      G#m
1.	O, betapa ajaib p'rubahan hatiku,
   A                E  B
sejak akut'rima Yesus;
        E    G#m      C#m      G#m
Ku bersukacita kar'na hidup baru,
   F#      F#7        B
sejak aku t'rima Yesus.

Koor :
B   E                 E7
Sejak aku t'rima Yesus,
A         A7          E
sejak aku t'rima Yesus,
     E       G#m    C#m      E7
Sukacita di hatiku berlimpahlah,
A     E    B     E
sejak aku t'rima Yesus!

2.	Aku tinggalkan jalan dunia yang fana,
sejak aku t'rima Yesus;
Serta rantai dosa telah putus s'mua,
sejak aku t'rima Yesus.

3.	Pengharapanku s'karang di dalam Tuhan,
sejak aku t'rima Yesus;
Ta'da awan yang g'lap yang dapat takutkan,
sejak aku trima Yesus.

4.	O, betapa senang, berjumpa di surga,
kar'na aku t'rima Yesus;
Aku b'rani maju dengan sukacita,
kar'na aku t'rima Yesus.
`;
  return (
    <SongWrapper>
      <SongHeader song={song} />
      <TransposerWrapper>
        <Transposer initialKey={song.chord as string} songText={songText} />
      </TransposerWrapper>
    </SongWrapper>
  );
}
