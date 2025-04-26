import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "nyanyi-dan-bersoraklah";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function NyanyiDanBersoraklah() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Bait :
A          E/G#
  Yesusku    Penyelamatku
  F#m          E        D
  Tiada Yang Seperti Engkau
           A/C#  D     A/E
  Setiap Hari    Kumemuji
    F#m     G  D/F#    E
  Keajaiban Ka - sih - Mu

A           E/G#
  Penghibur   Pelindung
  F#m    E    D
  Menara Kekuatan
              A/C#
  Biarlah Semua
  D         A/E
  Yang Bernafas
      F#m        G   D/F#  E
  Tak Berhenti Menyembah - Mu

Reff :
A          F#m     D        E
Nyanyi Dan Bersoraklah Bagi Dia
  A         F#m       D      E
Puji Dan Hormat Kuasa Bagi Raja
F#m                D
Gunung Tunduk Laut Bergelora
       E  D/F#   E/G#
Mendengar Nama - Mu

A       F#m     D        E
Ku Bersuka Atas PerbuatanMu
    A       F#m    D        E
S'lamanya Kukasihi Engkau Tuhan
F#m
Tiada Janji
        D        E   A
S'perti Yang Ada PadaMu


Versi GMS Worship

Bait :
A          E
  Yesusku    Penyelamatku
  F#m          E        D
  Tiada Yang Seperti Engkau
           A/C#      D
  Setiap Hari, Kumemuji
            Bm   E
  Keajaiban KasihMu

A           E
  Penghibur   Pelindung
  F#m    E    D
  Menara Kekuatan
              A/C#
  Biarlah Semua
            D
  Yang Bernafas
                 Bm     E
  Tak Berhenti MenyembahMu

Reff :
A          A/C#    D
Nyanyi Dan Bersoraklah Bagi Dia
  A         A/C#      D      E
Puji Dan Hormat Kuasa Bagi Raja
F#m       A/E      D
Gunung Tunduk Laut Bergelora
       Bm     E
Mendengar NamaMu

A       A/C#    D
Ku Bersuka Atas PerbuatanMu
    A       A/C#   D        E
S'lamanya Kukasihi Engkau Tuhan
F#m      A/E
Tiada Janji
        D        E   A
S'perti Yang Ada PadaMu

Medley :
   A          C#m  F#
To God Be The Glory
   Bm  Bbdim    Dm  E
To God   Be The Glory
   C#  C#/F     F#m
To God   Be The Glory
        B7            E
For The Things He Has Done

         A            C#m  F#
With His Blood He Has Saved Me
         Bm  Bbdim    Dm     E
With His Power He Has Raised Me
   C#  C#/F     F#m  B7
To God   Be The Glory
        A/E    E      A
For The Things He Has Done
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
