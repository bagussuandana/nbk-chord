import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "62";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK62() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
    G	  Bm	   C     G
1. Apakah 'kau ada tempat
 Am   D	        G  D
bagi Juru Selamat,
    G	  Bm	    C    G
yang ketuk dan minta masuk?
  Am   D	         G
Buka s'karang hatimu!.

Koor :
 D   D7	       G    G7
Buka bagi Raja mulia ,
  C	      A	        D D7
s'karang pintu hatimu,
 G    C       Bm   Em
agar Ia dapat masuk,
  Am    D         G
sedang Ia menunggu.

2. Tempat bagi kesenangan dapat banyak
perhatian, tapi tidak bagi Tuhan yang rela
disalibkan.

3. Apakah'kau ada waktu? Tuhan tunggu
dengan kasih; S'karang harus t'rima Dia,
seb'lum kasip waktunya.

4. Tempat, waktu b'rikan Tuhan,
janganlah sampai terlambat; Kelak tak
ada jemputan bagi yang cari s'lamat.
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
