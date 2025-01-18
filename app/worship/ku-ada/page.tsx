import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const worshipID = 'ku-ada';
export const metadata: Metadata = {
  title: appConfig.worships.find((s: any) => s.id === worshipID).title,
  description: appConfig.worships.find((s: any) => s.id === worshipID)
    .description,
};
export default function KuAda() {
  const { worships } = appConfig;
  const worship = worships.find((s: any) => s.id === worshipID);
  const worshipText = `
Verse :
     C               G/B
I Am Here Because Of Your Grace
     Dm   G            F/C  C
I Am Here   Because Of Your Love
G    C     C/E       F
Lord Jesus   I Am So Thankful
Dm       C/G    G         C
For Your Grace Abounds To Me

Chorus :
          F      Em     Am
Thank You Jesus, Jesus
Dm     G           C
Jesus,   Thank You Jesus
          F
It’s Only By Your Grace
             Em          A
That I Could Live Today
        Dm            G
Forever I Will Praise
     C
Your Name

Bait :
    C           G/B
Ku Ada S'bab Anug'rahMu
    Dm  G           F/C   C
Ku Ada     Kar’na Kasih - Mu
G     C     C/E
Tuhan Yesus
          F    Dm
Ku Bert'rima Kasih
     C/G  G           C
Buat Ka  -  sih RahmatMu

Reff :
       F     Em    Am
T'rima Kasih Yesus
Dm    G        C
Yesus   T'rima Kasih
        F
Kar'na Anug'rahMu
          Em          A
Buat Hidupku S'karang
         Dm      G
Ku Kan MemujiMu
      C
S'lamanya
`;
  return (
    <SongWrapper isWorship>
      <SongHeader song={worship} isWorship />
      <TransposerWrapper>
        <Transposer
          initialKey={worship.chord as string}
          songText={worshipText}
        />
      </TransposerWrapper>
    </SongWrapper>
  );
}
