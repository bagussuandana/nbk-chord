import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '367';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK367() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
Tuhan yang memanggil kita
untuk melayani Dia,
s'karang dengan sukacita,
bersyukur kar'na berkat- Nya.

Koor :
Puji Tuhan!
dengan s'nang melayani Dia,
Puji Tuhan!
yang memb'ri kita rahmat-Nya.

Tuhan memb'ri kesempatan
untuk melayani Dia,
dan m'reka yang membutuhkan,
ini kewajiban kita.

Tuhan ingin agar kita
m'lakukan tugas yang dib'ri,
dengan taat dan percaya,
serta s'lalu hidup suci.
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
