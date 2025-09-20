import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const chorusID = 'ku-bersyukur-sbab-kau-setia';
export const metadata: Metadata = {
  title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
  description: appConfig.choruses.find((s: any) => s.id === chorusID)
    .description,
};
export default function KuBersyukurSbabKauSetia() {
  const { choruses } = appConfig;
  const chorus = choruses.find((s: any) => s.id === chorusID);
  const chorusText = `
G        Em   C            Dsus  D
Ku bersyukur s'bab Kau setia
G        Em   C   A      Dsus   D
Ku memujiMu karena Kau sangat baik
     Bm      E7    Am
Mulialah namaMu kutinggikan
   D                    G
Ku agungkan s'lama hidupku
`;
  return (
    <SongWrapper isChorus>
      <SongHeader song={chorus} isChorus />
      <TransposerWrapper>
        <Transposer initialKey={chorus.chord as string} songText={chorusText} />
      </TransposerWrapper>
    </SongWrapper>
  );
}
