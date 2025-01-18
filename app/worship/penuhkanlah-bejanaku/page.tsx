import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const worshipID = 'penuhkanlah-bejanaku';
export const metadata: Metadata = {
  title: appConfig.worships.find((s: any) => s.id === worshipID).title,
  description: appConfig.worships.find((s: any) => s.id === worshipID)
    .description,
};
export default function PenuhkanlahBejanaku() {
  const { worships } = appConfig;
  const worship = worships.find((s: any) => s.id === worshipID);
  const worshipText = `
Bait :
      G
Aku Datang Dan Kubersujud
   C      G
Di HadapanMu
      G         Am     D
Kurasakan Indah HadiratMu
          G         G/B
Telah Kubuka Mata Hatiku
    C           G
Dan Seluruh Jiwaku
     G/D    D        G
Untukku Nikmati FirmanMu

Reff :
      D
FirmanMu Yg Kuasa
         C           G
Tuk Mengubah Sikap Hati
      D
FirmanMu Yang Tegakkan
    A         D
Disaat Kuterjatuh

        G
Penuhkanlah Bejanaku
        C        Cm/D#
Dengan Air SungaiMu
G/D     D         G
Ku Haus Akan FirmanMu
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
