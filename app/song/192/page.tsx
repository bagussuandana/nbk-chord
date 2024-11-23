import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '192';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK192() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
Sudah 'ku dengar suara-Mu, Tuhan,
menyatakan cinta-Mu;
Dengan percaya, s'karang 'ku ingin
lebih dekat pada-Mu.

Koor :
Lebih dekat, dekat dekat Tuhanku,
yang mati di Golgota;
Lebih dekat, dekat, dekat salib-Mu,
itu yang aku minta.

B'rikanlah kuasa dan anugerah
untuk kerja bagi-Mu,
jadikan Tuhan hatiku suci,
hidup berserah s'lalu.

O, kes'nanganku kalau bertelut
dan menghadap takhta-Mu;
Di dalam doa aku bertemu
dengan Tuhan s'habatku.

Ada damai dan cinta yang kekal
yang akan 'ku terima,
bila 'ku masuk surga yang senang,
s'lalu tinggal serta-Mu.
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
