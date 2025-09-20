import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const chorusID = 'besar-anugerah-mu';
export const metadata: Metadata = {
  title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
  description: appConfig.choruses.find((s: any) => s.id === chorusID)
    .description,
};
export default function BesarAnugerahMu() {
  const { choruses } = appConfig;
  const chorus = choruses.find((s: any) => s.id === chorusID);
  const chorusText = `
     G     G7          G6    G
Ku ada sebagaimana ku ada
     Am 　  C/Ab  　　　C/G
Berdiri menghadap takhta-Mu Bapa
   D 　　D7/F# G/B 　　C
Semua kar'na anug'rah-Mu
G/D 　　　A/C#　 D
Yang t'lah s'lamatkanku

      G   　G7　　　     G6    G
Ku hidup dalam s'gala kelimpahan
     Am 　 C/Ab  C/G
Ku layak untuk melayani Tuhan
   D 　　D7/F# G/B 　C
Semua kar'na anug'rah-Mu
G　　 　  D　 G  C  D
Tercurah bagiku

Ref:
   G   C/G     Dsus  D
Besar anug'rah-Mu
    G     C/G    Dsus  D
Berlimpah kasih-Mu
     C     Cm/Eb     G/B  B/Eb C/E
Semakin hari, s'makin ber-tam-bah
Cm/Eb G/D D       G
Be---sar anug'rah-Mu
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
