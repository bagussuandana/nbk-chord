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
        C    Em   Am  Em   Dm  G      C  G
1.	Meski jalan hidupmu terasa amat b'rat,
    C     Em   Am  Em   Dm  D7      G  
sandarlah pada Tuhan, Yesus ada dekat;
  Dm   G    C   Am     Dm     G   C   Am
Bila hari berkabut dan malam pun gelap,
    F       Em        D         D7           G
"O, janganlah 'kau takut," perjanjian-Nya tetap!

Koor :
 C      Em      Am  G
Betapa indah mulia
 Dm    G      C  G
kesetiaan Allah;
 C      Em      Am  G
Kita tetap milik-Nya
 Dm     G      C 
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
