import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "346";
export const metadata: Metadata = {
  title: appConfig.songs.find((s: any) => s.id === songID).title,
  description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK346() {
  const { songs } = appConfig;
  const song = songs.find((s: any) => s.id === songID);
  const songText = `
Tuhanlah batu karangku,
naungan yang tetap teguh;
Ku s'lamat dari tiap set'ru,
naungan yang tetap teguh.

Koor:
Ya, Yesus Batu Karang perlindungan,
perlindungan, perlindungan;
Ya, Yesus Batu Karang perlindungan,
naungan yang tetap teguh.

Selalu Kau di sisiku,
naungan yang tetap teguh;
Tak ada takut padaku,
naungan yang tetap teguh.

Biarlah topan berderu,
naungan yang tetap teguh;
Tak	goncang perlindunganku,
naungan yang tetap teguh.

Ya Tuhanku, Kau sungguhlah,
naungan yang tetap teguh;
Penolongku selamanya,
naungan yang tetap teguh.
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
