import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '431';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK431() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
  Intro:
 C Am Dm G C

  C    
Tanam waktu pagi,
  F
bibit cinta Allah,
 C          Am
tanam waktu siang
  Dm          G
dan petang juga;
 C
Tunggu musim panen
 F
nanti akan datang,
 C          Am
dalam pesta panen
  Dm          G
kita bergirang.

Koor :
 C
Kita bergirang,
 F           C
membawa pulang,
  C          Am
hasil jiwa-jiwa
  D          G
dalam surga t'rang,
  C
Meski pun lemah,
 F
Tuhan yang kuasa,
  C          Am
tolong kita bawa
  Dm   G    C
jiwa pada-Nya.

Tanam waktu panas,
tanam waktu mendung,
tidak takut hujan
dan angin kencang;
Set'lah musim panen
kita ber'nti kerja,
bawa hasil pulang
ke lumbung Surga.

Biar pun dengan tangis,
tanam bagi Tuhan,
meski hati susah
dengan keb'ratan;
Nanti Tuhan b'rikan
kita s'lamat datang,
kita 'kan bersuka
dalam surga t'rang.
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
