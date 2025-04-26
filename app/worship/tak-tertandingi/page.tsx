import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "tak-tertandingi";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function TakTertandingi() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
C#m  E/B  F#/Bb  A

Bait :
C#m
  Pada Siapa Kau Bandingkan
A                         F#sus4
  PerbuatanNya Yang Heran
F#    A
  Tak Ada

C#m
  K’rajaanNya Yang Terbesar
A                      F#sus4  F#
  Tak Akan Tergoyahkan
    A
  Semua Musuh Pun Gemetar
     C#m
  Mendengar NamaMu Tuhan
    F#m   E/G#  A
  Sorak Kemenangan

Reff :
E       B             C#m
Sungguh Tak Tertandingi
A            E          B
Tak Ada Yang Setara DenganMu
      C#m        A             E
Hanya Yesus Tuhanlah Yang Terhebat
  B        C#m
Jauh Melebihi
A         E        B
Dari Penguasa Di Dunia
    C#m    B    F#
Kerajaan - Mu Kekal

Bait :
C#m
  Pada Siapa Kau Bandingkan
A
  PerbuatanNya Yang Heran
F#    A
  Tak Ada

C#m
  K’rajaan-Nya Yang Terbesar
E                      F#
  Tak Akan Tergoyahkan
      A
  Semua Musuh Pun Gemetar
     C#m
  Mendengar NamaMu Tuhan
    F#m   E/G#  A
  Sorak Kemenangan
`;
    return (
        <SongWrapper isWorship>
            <SongHeader song={worship} isWorship />
            <TransposerWrapper>
                <Transposer
                    initialKey={worship.chord as string}
                    songText={worshipText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
