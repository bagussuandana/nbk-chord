import appConfig from '@/app.config';
import SongHeader from '@/components/song-header';
import SongWrapper from '@/components/song-wrapper';
import TransposerWrapper from '@/components/transposer-wrapper';
import Transposer from '@/lib/transposer';
import { Metadata } from 'next';

const songID = '353';
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK353() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
 G      Bm         Em     G7
Bala Kes'lamatan tetap maju,
C       A      D D7
mengiringi Yesus,
G      Bm         C     
kibarkan bendera bergerak maju,
G     D      G
kalahkanlah musuh!

Koor :
G  Em      Am
Maju tetap maju!
D       G
kabarkan Injil- Nya,
G  Bm      C           Cm
kabarkanlah Injil dengan s'tia
G      D      G
ke seluruh dunia!

Kepada nusa dan bangsa kita,
bersinar kiranya
t'rang Injil Tuhan Yesus, Jurus'lamat,
untuk selamanya.

Bangkitlah maju, para p'rajurit
Bala Kes'lamatan,
ajaklah seg'nap rakyat Indonesia,
jadi rakyat Tuhan.

Bala Kes'lamatan tentu akan
sorak haleluya,
bila Indonesia berbahagia,
hale-haleluya!
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
