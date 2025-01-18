import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '129';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK129() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
Intro:
G  G7  C
Am  D  G  D
   
    G      G7      C
Hai langit, bumi, nyanyilah,
   Am    D     G
puji nama Tuhan!
    G      G7      C
Dan Ia patut disembah,
   Am    D     G    G7
disanjung-sanjungkan.

Koor :
  C             G      Em
Bersukalah! berbaktilah!
   G    Em      Am    D 
di dalam t'rang Tuhan!
 G             G7      C
Dan datang di hadirat-Nya
   Am    D     G 
menyanyi pujian.

Tuhan Allah yang mulia,
pujilah nama-Nya!
dan kita jadi domba-Nya,
dijaga oleh-Nya.

Masuk dalam halaman-Nya
dan bersukaria,
bersatu padu nyanyikan
kemuliaan Allah.

Sungguhlah baik Tuhan kita,
selama-lama-nya!
Biar s'gala bangsa masyhurkan
cinta-Nya yang s'tia.
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
