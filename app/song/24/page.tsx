import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '24';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK24() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
G       G7     C     Cm
Cinta sungguh ajaib dan mulia,
G       D    D7    G   
cintanya Yesus yang tak terduga ;
G       G7     C     Cm
Yang t'lah hapuskan s'gala dosaku,
G       D    D7    G   G7
cintanya Yesus, Tuhanku.

Koor :
C
Ajaib dan mulia
       G        Em
sungguh tak terkata,
      A         A7            D
cinta heran dan sangat berkuasa;
G     G7           C     Cm
Cinta indah sungguh luar biasa
G        D   D7        G
bagiku orang yang berdosa.

Cinta yang mencari dan m'nemukan
hidupku dalam dosa ke g'lapan; Ku
diampuni dan di s'lamatkan oleh darah
Yesus, Tuhan.

Bahagia dan sentosa kini hidupku
dengan Tuhanku Yesus; Tak 'da yang
dapat c'raikanku lagi dari kuasa
Penebus.
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
