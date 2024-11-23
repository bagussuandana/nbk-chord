import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '160';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK160() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
O, s'lamat yang luas!
O, laut kasih Allah,
kelimpahan rahmat datang dari surga ;

Dunia sekalian
t'lah ditebus oleh-Nya,
Membanjiri semua,
membanjiri semua,
membanjiri semua,
meliputi saya.

Banyak dosa saya,
dan dalam bekasnya,
air mata berlinang,
sesal hati saya,

tangis saya tak guna,
o, laut karunia,
Air-Mu dapat bersihkan,
air-Mu dapat bersihkan,
air-Mu dapat bersihkan,
meliputi saya.

Watak saya bertingkah,
nafsu amat kuat,
memaksa saya melakukan yang jahat;
Di bawah ombak-Mu
saya akan merdeka;
O,datanglah laut kasih,
o, datanglah laut kasih,
o, datanglah laut kasih,
meliputi saya.
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
