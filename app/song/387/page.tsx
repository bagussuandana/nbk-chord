import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "387";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK387() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
D             G   A  D
Bersukalah Tuhan datang
G     A      D
merajai dunia!
 G    A      D
Biarlah hatimu
 G     A      D
terbuka bagi-Nya,
 D  
seg'nap alam nyanyi,
  A            
seg'nap alam nyanyi,
  D          G
seg'nap, seg'nap
    A       D
alam menyanyi.

Bersukalah Penebusmu
memerintah dunia!
Biar s'gala bangsa
mengangkat suaranya,
nyanyi puji Dia,
nyanyi puji Dia,
nyanyi, nyanyi
puji Dia.

Tiada lagi dukacita,
tiada derita;
Yesus t'lah datang,
berkat-Nya berlimpah,
bagi s'gala bangsa,
bagi s'gala bangsa,
bagi, bagi
s'gala bangsa.

Seg'nap dunia
'kan melihat,
rahmat- Nya yang besar;
Kemuliaan dan kebenaran-Nya,
kasih-Nya yang besar,
kasih-Nya yang besar,
kasih, kasih-Nya
yang besar.

`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
