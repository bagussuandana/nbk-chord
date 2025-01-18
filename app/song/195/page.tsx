import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '195';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK195() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
  C
Tuhan, bimbing hidupku,
  G                  C
jangan sampai tersesat;
 C   C7             F
Tinggal dalam kasih-Mu
 D              G
aku tetap selamat.

Koor :
C   Em Am   G  
Yesus, Tuhan!
C       Am             G    G7
Bimbinglah t'rus jalan hidupku,
 C    C7          F 
'ku berhadap selalu
C           G     C
pimpinan-Mu padaku.

Engkau perlindunganku
saat taufan menderu;
Aku aman selalu
bila kau bersamaku.

Pegang tanganku,
Tuhan, bila maut 'ku bersua,
masuk neg'ri Kanaan,
hidup s'nang selamanya.

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
