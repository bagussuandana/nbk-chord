import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "427";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK427() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
      G  D       C  G
Bawalah persembahanmu
   D           G
ke atas mezbah Tuhan;
      G  D          C  G
Serahkanlah dengan iman
      D           G
pada-Nya s'bagai kurban.

Koor :
      C               G
Serahkan dirimu s'karang,
          C                 G
b'ri yang terbaik pada Tuhan,
      Bm             C
dan rela menyangkal diri
       D             G
serta b'rani berkurban,
       G               C
dan rela menyangkal diri
       Am     D       G       
serta b'rani berkurban.

S'rahkanlah hidupmu kini,
waktu dan tenagamu,
tentu Tuhan memberkati
yang berkorban bagi Hu.

Biar pemb'rianmu sedikit,
persembahkanlah s'mua.
Kar'na Tuhan menghargai
yang memb'ri dengan rela.

Tuhan sudah menjanjikan,
mencurahkan berkat-Nya;
Berkat yang berkelimpahan
pada m'reka yang s'tia.

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
