import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '114';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK114() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
  G    G7        C     Em
Ya, Tuhan, janganlah lalu,
  Am     D    G  
dengar doaku,
 G    G7        C     Em
orang lain Tuhan memanggil,
  Am     D    G  D
ingat hamba-Mu!

Koor :
G    G7        C     Am
Yesus, Tuhan,
G      A    D  D7
dengar doaku!
G    G7        C     Em
Orang lain Tuhan memanggil,
  Am     D    G
ingat hamba-Mu!

Biarlah pada tempat kudus
hatiku teduh,
dengan menyesal kusujud,
kuatkan imanku!

Kumencari Engkau saja,
kar'na jasa- Mu,
sembuhkan hati yang luka
dengan rahmat-Mu.

Kaulah sumber kehidupan
dan penghiburku;
Siapakah di surga dunia,
s'perti Tuhanku.
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
