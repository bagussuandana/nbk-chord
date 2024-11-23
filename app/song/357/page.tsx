import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '357';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK357() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
"Dunia bagi Allah!" semboyan kita;
Baiklah terdengar di gunung dan lembah;
Neraka kalah dan Kristus menanglah,
kita turut Tuhan dengan s'tia.

Koor :
Majulah p'rajurit,
pandanglah Yesus!
Bersama Dia dalam medan p'rang;
Bendera kita tetap berkibar t'rus,
berp'rang bagi Tuhan hingga menang!

"Dunia bagi Allah!" panggilan kita;
Banyak jiwa terikat oleh dosa;
Bawalah mereka kepada Kristus
yang mati tersalib di Golgota.

"Dunia bagi Allah!" kita waspada;
Nanti datang g'lap, kerja waktu siang!
Cari yang hilang di desa dan kota,
turut p'rintah Tuhan dengan senang!

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
