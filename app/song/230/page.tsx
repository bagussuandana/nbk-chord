import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "230";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK230() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
C                   G/B              
Ku serahkan pada Yesus,
Am      F     G      C	
tubuh, hati dan jiwa;
C                     G/B             
Ku mau cinta dan berbakti
Am   F    G         C
tiap hari bagi-Nya.

Koor :
C             Dm  
S'mua 'ku serah,
G              C
s'mua 'ku serah;
C        C7                
Pada Tuhan,
F     D7 
Juru S'lamat,
G       G7     C
s'mua 'ku serah.

2.Ku menyerah pada Yesus
dan menyembah pada-Nya;
Kes'nangan dunia 'ku buang,
s'karang 'ku Tuhan punya.

3.Ku menyerah pada Yesus,
'ku menjadi milik-Nya;
Agar Roh-Elkudus pimpin
hidupku senantiasa.

4.Ku menyerah pada Yesus,
hidupku dipenuhi
dengan kuasa Roh-Elkudus
agar nyatakan kasih.

5.Ku menyerah pada Yesus,
s'mangat baru 'ku t'rima;
Karna s'lamat yang sempurna
'ku memuji nama-Nya.
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
