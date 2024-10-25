import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "267";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK267() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
Tuhan Yesus, Engkau saja
kekuatan dan hidupku,
ceraikanlah 'ku dari dunia agar jadi hambaMu.
Ceraikanlah 'ku dari dunia agar jadi hambaMu.

Koor :
Yesus, 'Kau Hidup dan Kuatku,
Yesus, 'Kau Hidup dan Kuatku,
Yesus, 'Kau Hidup dan Kuatku,
dengan Tuhan 'ku menang.

Penuhkan hatiku, Tuhan,
dengan api kasih- Mu,
biar itu tetap menyala,
s'lamanya di dalamku,
s'lamanya di dalamku.

Batu karang bagi jiwa,
perlindungan dalam p'rang!
Janji Tuhan aku percaya,
dengan Tuhan 'ku menang!
dengan Tuhan 'ku menang!

Tuhan, yang patut disembah,
'ku s'rahkan seg'nap hati;
Hendak menjadi Tuhan punya,
t'rima persemb'han ini,
t'rima persemb'han ini.
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
