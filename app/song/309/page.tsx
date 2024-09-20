import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "309";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK309() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
  D F#m Bm F#m Em A D A
1.	Meski jalan hidupmu terasa amat b'rat,
D F#m Bm F#m Em E7 A
sandarlah pada Tuhan, Yesus ada dekat;
Em A D Bm Em A D Bm
Bila hari berkabut dan malam pun gelap,
G F#m E E E7 A A7 
"O, janganlah 'kau takut," perjanjian-Nya tetap!

Koor :
D F#m Bm A
Betapa indah mulia
Em A D A
kesetiaan Allah;
D F#m G
Kita tetap milik-Nya
Em A D
untuk s'lama-lamanya

2.	Carilah kuasa Tuhan yang tetap setia,
Ia b'ri kemenangan dengan kuasa-Nya;
Walau jalanmu sukar, ikutlah jejak-Nya,
kar'na Ia mengantar, peganglah tangan-Nya.

3.	Carilah perlindungan kepada Allahmu,
yang pada waktu susah mengatur hidupmu;
Ia pun dengan kasih dalam suka-duka
menarik engkau lebih dekat kepada-Nya.
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
