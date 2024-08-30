import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "180";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK180() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
G        D             G
1.Akan ada hujan berkat,
D      D7        G
itulah janji Allah!
C           Bm    Em  
Saat penuh kesegaran,
 Am       A        D
yang datang dari surga.

Koor : 
G      D        G                      
K'limpahan berkat,
Em         Am     D
itu yang kami minta,
G         C      Bm   Em
rintik jatuh berkeliling,
Am        D          G
b'rilah kelimpahannya.

2.Akan ada hujan berkat
yang menggenangi ladang,
gemerlap hujan yang lebat
atas bukit dan padang.

3.Akan ada hujan berkat,
basahi hati kami!
Moga segarlah dan sehat,
s'perti Tuhan berjanji.

4.Akan ada hujan berkat,
hari ini turunlah!
Kini umat-Mu bertobat,
kini kami berserah!

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
