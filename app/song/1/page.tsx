import appConfig from "@/app.config";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "1";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK1() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
    G               C        
1. Banyaklah yang 'ku
          Bm     Em
tak dapat mengerti,
Am      D            G D
semua bagaikan misteri;
    G      C
Tapi karunia Allah yang
Bm      Em
'ku t'rima
Am      A                   D
sungguh mengherankan dan mulia.

Koor :
C             D            G
Lebih tinggi dari angkasa raya,
C             Am A          D
lebih luas dan tak ada batasnya,
G           C
Itu kasih Allah yang
Bm       Em   
mengampuni
Am      D       G
orang berdosa ini.

2. Bila 'ku datang membawa dosaku serta
s'gala persoalanku,
Tentu Tuhan akan menerimanya, kasih
Allah luar biasa!

3. Pengertian yang sangat
mengherankan, tidak dapat aku pikirkan,
Yesus, dalam kasih, datang
`;
  return (
    <>
      <div className="container">
        <section className="prose dark:prose-invert">
          <h3>{song.title}</h3>
          <h2>{song?.description}</h2>
          <p>
            Chord : {song?.chord} {song?.rhythm} {song?.tempo}
          </p>

          <pre className="bg-transparent text-black/80 !p-0">
            <Transposer initialKey={song.chord as string} songText={songText} />
          </pre>
        </section>
      </div>
    </>
  );
}
