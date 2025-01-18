import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const chorusID = 'cinta-yesus-heran';
export const metadata: Metadata = {
  title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
  description: appConfig.choruses.find((s: any) => s.id === chorusID)
    .description,
};
export default function CintaYesusHeran() {
  const { choruses } = appConfig;
  const chorus = choruses.find((s: any) => s.id === chorusID);
  const chorusText = `
  E                        A
cinta Yesus heran sungguh ajaib benar
      F#m       B       E
ajaib benar cinta Tuhanku
  E                        A
terlihat, terdengar alkitab katakan,
      F#m       B       E
ajaib benar cinta Tuhanku 
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
