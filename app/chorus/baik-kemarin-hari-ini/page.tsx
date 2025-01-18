import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const chorusID = 'baik-kemarin-hari-ini';
export const metadata: Metadata = {
  title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
  description: appConfig.choruses.find((s: any) => s.id === chorusID)
    .description,
};
export default function BaikKemarinHariIni() {
  const { choruses } = appConfig;
  const chorus = choruses.find((s: any) => s.id === chorusID);
  const chorusText = `
  E           A
baik kemarin, hari ini,
  E   F#     B
dan selamanya
  E           A
Tuhan Yesus tak berubah,
  E   B    E  B
Ia sama saja
 E       F#m     B       E
Ia sama saja, Ia sama saja;
 E    E7    A      Am   
Tuhan Yesus tak berubah
E    B     E
Ia sama saja
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
