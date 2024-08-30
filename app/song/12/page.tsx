import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "12";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK12() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
E   G#       A       E    
1.Pujilah bersama-sama
A     E      F#m  B
karunia Tuhan kita,
E   	 G#       A         E       
M'laikat-m'laikat dalam surga
A     E     B		E
juga puji nama-Nya.

Koor : 
 E             F#m         
Haleluya! hai jiwaku!
    B             E
pujilah akan Tuhan!
    E      G#m   A               
Pujilah seumur hidup
B      B7            E
akan Allah yang rahman
E/D                E           
Nyanyi Mazmur pada-Nya,
A/D             E
pujilah selamanya;
E           G#m   A   Am   
Nyanyi Mazmur pada- Nya,
B                E
pujilah selamanya.

2.Dapatkah kita berdiam
akan kemuliaan-Nya,
sedangkan sekalian alam
memujikan kuasa-Nya?

3.Hendaklah kita nyanyikan
dengan bersukaria,
kar'na s'lamat yang dib'rikan,
hati kita gembira.

4.Biarlah kita memuji
kar'na s'lamat yang dib'ri,
dalam kehidupan suci,
tanda kasih sejati.
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
