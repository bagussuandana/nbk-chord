import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "321";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK321() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
    D   G   D
1. Kesuka'n
             Bm      A
di dalam Bala tentara Tuhan,
Em B Em           
kesuka'n
    A      A7       D
dalam Bala tent'ra-Nya!
D                                        
Nyanyilah, nyanyilah!
    Bm            A
Puji Allah di surga!
D                                              
Bunyikan genderang!
    Em     E      A
dengan musik bersama:
Em            A           D      
Biar ramai disertai nyanyian,
Bm    Em    A     D    Bm
pujilah selalu nama Tuhan,

G     G#dim      A     Bm
sebab Ia b'ri keselamatan
Em      E       A
bagi yang percaya;
D   G   D                           
Kesuka'n
            Bm      A
di dalam Bala tentara Tuhan,
Em B Em           
kesuka'n
A      A7       D
dalam Bala tent'ra-Nya!

2.	Kesuka'n
di dalam Bala tentara Tuhan,
kesuka'n
dalam Bala tent'ra-Nya!
Kuasa-Mu s'lamanya
dalam 'Darah dan Api';
Dalam p'rang 'kau menang
dan iblis dikalahkan;
Api Tuhan memb'ranikan jiwa
orang yang berp'rang kar'na nama-Nya,
yang s'lalu gunakan sabda-Nya
sebagai senjatanya;
Kesuka'n
di dalam Bala tentara Tuhan,
kesuka'n
dalam Bala tent'ra-Nya!

3.	Kesuka'n
di dalam Bala tentara Tuhan,
Kesuka'n
dalam Bala tent'ra-Nya!
Maju t'rus, maju t'rus,
turut firman Allahmu!
Tetapkan hatimu,
tinggal setia dan teguh!
Biarlah nyanyian serta hidupmu
menunjukkan kuasa Roh Tuhanmu,
yang membaharui hatimu,
puji, pujilah Tuhan!
Kesuka'n
di dalam Bala tentara Tuhan,
kesuka'n
dalam Bala tent'ra-Nya!
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
