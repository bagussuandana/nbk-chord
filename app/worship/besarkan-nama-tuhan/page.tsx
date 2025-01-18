import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const worshipID = 'besarkan-nama-tuhan';
export const metadata: Metadata = {
  title: appConfig.worships.find((s: any) => s.id === worshipID).title,
  description: appConfig.worships.find((s: any) => s.id === worshipID)
    .description,
};
export default function BesarkanNamaTuhan() {
  const { worships } = appConfig;
  const worship = worships.find((s: any) => s.id === worshipID);
  const worshipText = `
Verse :
G                   C         G
Besarkan nama Tuhan pujilah Dia
G                  Am         D
KemurahanNya besar tiada terbilang
G                   C          G
Aku tak dapat balas besar kasihNya
Am      D          G
Oh besarkanlah namaNya

Chorus :
D                G
Tuhan yang ajaib Tuhan yang kuasa
D                        G
Tuhan yang menolong hidupku
D                G             Em
Tuhan yang ajaib Tuhan yang kuasa
Am       D         G
Jiwaku ditebus olehNya
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
