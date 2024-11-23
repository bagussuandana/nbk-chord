import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '331';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK331() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
  G       Bm            Em     G
Berpegang pada perjanjian Rajaku,
C                      G       D
'ku bersorak dan memuji nama-Nya,
G       Bm            Em     Bm
memuliakan Allah itu maksudku,
Am          D               G
berpegang pada perjanjian-Nya.

Koor :
G  G7    Am 
Ku berpegang,
D                         Am   D
berpegang pada perjanjian Tuhan Allah;
G   G7  C   Cm
Ku berpegang,
G             D              G
'ku berpegang pada perjanjian-Nya.

Perjanjian-Nya tinggal tetap teguh,
meski ketakutan membuatku ragu;
Kar'na firman Allah 'ku tak 'kan goyah,
berpegang pada perjanjian-Nya.

Berpegang pada perjanjian Tuhanku,
aku dilindungi dengan kasih- Nya;
Dengan pedang Roh aku menang s'lalu,
berpegang pada perjanjian-Nya.
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
