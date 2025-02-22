import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "320";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK320() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
     G            Am
Kami jalan maju, kuat dalam Tuhan,
      D          G
serta bekerja giat bagi Tuhan,
        G         Am
dengan iman teguh kami bertahan,
        C     D         G
hingga Tuhan Yesus datang.

Koor :
  123      123
G
Angkatlah suara,
        712        123
        D          G
nyanyilah, nyanyilah;
       123       123
       G
Soraklah, soraklah,
       A      A7     D
sedang t'rus kami maju;
     G           Am
Kami maju dan menyanyi pujian,
          D           G
t'rus ke Kanaan, neg'ri perjanjian,
      G          Am
mari turut kami dalam pep'rangan,
       C     D      G
hingga Tuhan Yesus datang.

Kami jalan maju, Tuhan tentulah
jaga dan menolong kami s'lamanya;
Turut panji-Nya kami bergembira,
hingga Tuhan Yesus datang.

Kami jalan maju, dan nyanyi saja,
"Darah Yesus yang menghilangkan dosa,"
Mari, ikutlah, hai orang berdosa,
seb'lum Tuhan Yesus datang.

Kami jalan maju, Tuhan nanti b'ri
Mahkota mulia di surga yang suci,
dan takhta-Nya kami mengelilingi,
set'lah Tuhan Yesus datang.
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
