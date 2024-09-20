import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "6";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK6() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
                G	    Bm	    C	
1.	Kalau 'ku lihat karya tangan Tuhan,
              G	    D	    G	    D
s'kalian alam yang 'Kau t'lah jadikan; 
                G   	Bm	    C	
Tiap makhluk dalam kejadian mulia,
        G	    D	    G	    D
yang 'Kau pimpin dengan kecintaan.

Koor :
      G	     C	   G    Em	
Maka jiwaku sorak, berseru:
    Am      D	    G	    D
Betapa mulia Allah Hu!
        G	    C	 Bm 	Em
Maka jiwaku sorak, berseru:
    Am      D	    G	    
Betapa mulia Allah Hu!

2.	Kalau kubaca di dalam sabda-Nya,
s'gala mukjizat 'ku lihat pula,
bagaimana Tuhan antar umat-Nya
yang terpilih, tertolong oleh- Nya.

3.	Kalau 'ku pandang ke sepanjang jalan
di mana Tuhan antarkan aku;
Bagaimana Tuhan b'ri kes'lamatan
dan mengampuni s'mua dosaku.

4.	Kalau 'ku rasa pengaruh Roh Kudus
 yang bekerja di dalam hatiku;
 Jiwaku tidak dapat melawan t'rus
 tapi percaya dan taat s'lalu.
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
