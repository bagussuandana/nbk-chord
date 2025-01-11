import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "langit-dan-bumi-pujilah-tuhan";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function LangitDanBumiPujilahTuhan() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
  1  35   61'  •   6#  66    5 
- - - - - - - - - - - - - - - - - -
  11 • 35  61'    6#6#  66   55 45
- - - - - - - - - - - - - - - - - -
  1  35   61'  •   6#  66    5 
- - - - - - - - - - - - - - - - - -
  11 • 35  61'    6#6#  66   55 45
- - - - - - - - - - - - - - - - - -
  1  •   1   •   1   •    1   •
 A7      A7      A7       A7
- - - - - - - - - - - - - - - - - -

Bait :
A
Langit dan bumi pujilah Tuhan
D                       A
Sebab Dia ciptakan semuanya
                    A    E/G#   F#m
KeagunganNya mengatasi langit bumi
Bm           E         A 
Sembah sujud di hadapanNya.

Interlude :
  1  2   2#    3   1  •    •    4
- - - - - - - - - - - - - - - - - -
  1  2   2#    3   1  •    •    4
- - - - - - - - - - - - - - - - - -

Bait :
A
Langit dan bumi pujilah Tuhan
D                       A
Sebab Dia ciptakan semuanya
                    A    E/G#   F#m 
KeagunganNya mengatasi langit bumi
Bm           E         A 
Sembah sujud di hadapanNya.

Reff :
  A   A   D        A      D
Kupuji  kusembah kupuji kusembah
A         B            E  E
Yesus Kristus Sang Penebusku
  A   A  D         A      D
Kupuji  kusembah, kupuji kusembah
A      E           A  E
Yesus Tuhan dan Rajaku.

Intro :
1  •  35   6i    6#   66    5   •
- - - - - - - - - - - - - - - - - -
11 •  34   6i    6#6# 66    55  345
- - - - - - - - - - - - - - - - - -

Bait :
A
Langit dan bumi pujilah Tuhan
D                       A
Sebab Dia ciptakan semuanya
                    A    E/G#   F#m
KeagunganNya mengatasi langit bumi
Bm           E         A 
Sembah sujud di hadapanNya.

Reff :
  A   A   D        A      D
Kupuji  kusembah kupuji kusembah
A         B            E  E
Yesus Kristus Sang Penebusku
  A   A  D         A      D
Kupuji  kusembah, kupuji kusembah
A      E           A  E
Yesus Tuhan dan Rajaku.

Reff :
  A   A   D        A      D
Kupuji  kusembah kupuji kusembah
A         B            E  E
Yesus Kristus Sang Penebusku
  A   A  D         A      D
Kupuji  kusembah, kupuji kusembah
A      E           A  E
Yesus Tuhan dan Rajaku.

interlude :
Notation :
: 3 3 3  4 • 4#4# 4 •  3 3 3  4 • 4#4# 5
- - - - - - - - - - - - - - - - - -
:•4  33    4  •   4#    5  5# 6   •
- - - - - - - - - - - - - - - - - -
2   5  •  1 •
Bm  E    A 

Bridge :
A   D    A   D
Haleluya amin
A   D    B   E      
Haleluya a - min
C#m  D   E  F#m
Haleluya  amin,
Bm    E   A   
Haleluya amin.
-----------------(WL: singing out)
||:0
Haleluya amin,
||:0
Haleluya amin
||:0
Haleluya amin,
Bm    E   A   
Haleluya amin.
-----------------
A   D    A   D
Haleluya amin
A   D    B   E      
Haleluya a - min
C#m  D   E  F#m
Haleluya  amin,
Bm    E   A   
Haleluya amin.
-----------------
Bm    E   A   
Haleluya amin.
Bm    E   A   
Haleluya amin.

outro :
1  35   6i  •   6#  66    5  A7,13•
- - - - - - - - - - - - - - - - - -
11 • 35  6i    6#6#  66   55 45
- - - - - - - - - - - - - - - - - -
1  •   •   • | •   •    1   •
A7                      A7  
- - - - - - - - - - - - - - - - - -

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
