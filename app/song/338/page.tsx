import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '338';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK338() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
Mari Tuhan dengan kuasa s'karang,
b'rilah kepadaku,
Roh Kudus yang bawa kemenangan
serta hidup di hatiku.

Koor :
B'ri kemenangan iman, Tuhan,
agar hidup bagi kemulia'n-Mu,
b'rikanlah iman yang pantang mudur,
berkatilah pekerja'nku.

Ku sedia diutus bekerja bagi-Mu,
o, Tuhan, kasih-Mu
dan karunia yang besar
akan menolongku menang.

Dengan Engkau aku maju terus,
siapa yang melawan?
Dengan dipimpin oleh Roh Kudus
'ku hidup s'laku pemenang.

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
