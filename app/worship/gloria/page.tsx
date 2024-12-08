import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "gloria";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function Gloria() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
D  G  Bm  G
D  G  Bm  G

Bait :
D                G   D
Kami Datang Bawa Pujian
Bm            A
Bersama MemujiMu Tuhan
D/F#              G     Bm
Satukan Suara Dan Nyanyikan
  Em    A     D
Sorak Kemenangan

Reff :
D/F#  G   A
Glo ooo oooria
D/F#  G   A
Glo ooo oooria
D/F#    G    F#/Bb   Bm
Besar Tuhan, Ditinggikan
   G         A
Diatas S'galanya

D/F#  G   A
Glo ooo oooria
D/F#  G   A
Glo ooo oooria
D/F#    G    F#/Bb   Bm
Besar Tuhan, Ditinggikan
       Em  A  D
Puji Dia Gloria

Intro :
D  G  Bm  G

Bait :
D                G   D
Kami Datang Bawa Pujian
Bm            A
Bersama MemujiMu Tuhan
D/F#              G     Bm
Satukan Suara Dan Nyanyikan
  Em    A     D
Sorak Kemenangan

Reff :
D/F#  G   A
Glo ooo oooria
D/F#  G   A
Glo ooo oooria
D/F#    G    F#/Bb   Bm
Besar Tuhan, Ditinggikan
   G         A
Diatas S'galanya

D/F#  G   A
Glo ooo oooria
D/F#  G   A
Glo ooo oooria
D/F#    G    F#/Bb   Bm
Besar Tuhan, Ditinggikan
       Em  A  D
Puji Dia Gloria

Bridge : 3x
G
  We Give You Glory
D             Bm
  We Give You Honour
A
  We Give You Praise
      D/F#
  For All That You Are
G
  We Give You Glory
D             Bm
  We Give You Honour
A
  We Give You Praise
    D/F#
  Gloooria

  Reff :
D/F#  G   A
Glo ooo oooria
D/F#  G   A
Glo ooo oooria
D/F#    G    F#/Bb   Bm
Besar Tuhan, Ditinggikan
   G         A
Diatas S'galanya

D/F#  G   A
Glo ooo oooria
D/F#  G   A
Glo ooo oooria
D/F#    G    F#/Bb   Bm
Besar Tuhan, Ditinggikan
       Em  A  D
Puji Dia Gloria

Outro :
D  G  Bm  G
D  G  Bm  G
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
