import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "160";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK160() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
    G            G  
O, s'lamat yang luas!
   C        D     G
O, laut kasih Allah,
  D        Em   C     G     D     G
kelimpahan rahmat datang dari surga ;
   Em      Bm
Dunia sekalian
      C       G       
t'lah ditebus oleh-Nya,
G
Membanjiri semua,
G
membanjiri semua,
    D      Em   C      
membanjiri semua,
G     D     G
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
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
