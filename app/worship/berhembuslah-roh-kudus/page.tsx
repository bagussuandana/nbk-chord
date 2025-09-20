import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const worshipID = 'berhembuslah-roh-kudus';
export const metadata: Metadata = {
  title: appConfig.worships.find((s: any) => s.id === worshipID).title,
  description: appConfig.worships.find((s: any) => s.id === worshipID)
    .description,
};
export default function BesarDiDalamku() {
  const { worships } = appConfig;
  const worship = worships.find((s: any) => s.id === worshipID);
  const worshipText = `
Bait :
      A          F#m
Berhembuslah Roh Kudus
   Bm
Di Tempat Ini
      E
Berhembuslah Roh Kudus
    D/A     A
Dengan KuasaMu

     A          A7
Pulihkanlah G’rejaMu
   D       Dm
Di Akhir Jaman
      A/E     F#m
Berhembuslah
      Bm     E     A     E
Berhembuslah   S’karang

Reff :
   A       F#
Urapilah Kami
       Bm
Dengan Minyak Baru
    E
Penuhilah Kami
D             A
Dengan HadiratMu
     D       E/D
Kami Rindu Tuhan
    C#sus4   F#m
Melihat KuasaMu
    Bm        E       A
Dicurahkan Di Tempat Ini

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
