import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongTransposerClient from "@/components/song-transposer-client";
import SongWrapper from "@/components/song-wrapper";
import { Metadata } from "next";

const worshipID = "tiada-seperti-mu";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function TiadaSepertiMu() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro :
D  A/C#  Bm  G

Bait :
D
AnugrahMu Kepadaku
A/C#
Tak Pernah Berubah
Bm
PerbuatanMu Terlukiskan
  G
Didalam Hatiku

D
Tercengangku DibuatMu
  A/C#
Kukagum PadaMu
    Bm
Tak Ada Hal Di Hidupku
     G
Yang Luput DariMu

      A
Kau Indah Kau Mulia
      Bm
Tiada SepertiMu
       D/F#                G
Kungin Hidupku MenyenangkanMu

D
Kau Terawal Dan Terakhir
   A/C#
Pencipta Segalanya
    Bm
Seluruh Bintang Pun Bersinar
 G
Oleh UcapanMu

D
Engkau Pun Mengasihiku
  A/C#
Penulis Hidupku
    Bm
Tak Henti Segnap Nafasku
  G
MenyembahMu Selalu

    A
Kupuji Kusembah
        Bm
Tiada SepertiMu
        D/F#                G
Kuingin Hidupku MenyenangkanMu

Reff :
         D
S’gala Puji
          A/C#
S’gala Hormat
          Bm         G
Seg’nap Hatiku MenyembahMu
      D                A/C#
Terimalah Seg’nap Hidupku
           Bm             G
S’bagai Persembahan Yang Hidup

Bridge :
D/F#         G
  Bukan Kehendakku
D/F#         G
  Namun KehendakMu
Bm            G
  Hidupku BagiMu
        A
  Kau Indah, Kau Mulia
          A
  Kuingin Hidupku MenyenangkanMu

Musik :
D  A/C#  Bm  A  G  D/F#  Em  A
D  A/C#  Bm  A  G  D/F#  Em  A

`;
    const worshipNumber = `
Intro:
| 1... | 7... | 6... | 4... |

Verse1:
| 1... | 7... | 6... | 4... |
| 1... | 7... | 6... | 4... |
| 5... | 6... | 1/3... | 4... |
| 4… |

Intro:
| 1... | 7... | 6... | 4... |

Verse2:
| 1... | 7... | 6... | 4... |
| 1... | 7... | 6... | 4... |
| 5... | 6... | 1/3... | 4... |
| 4… |

Chorus: 
| 1... | 7... | 6... | 4... | 8 beat rock
| 1... | 7... | 6... | 4... |

Intro: 
| 1... | 7... | 6... | 4... | 1st beat

Verse3:
| 1... | 7... | 6... | 4... |
| 1... | 7... | 6... | 4... |
| 5... | 6... | 1/3... | 4... |
| 4… | syncope

Chorus:
| 1... | 7... | 6... | 4... |
| 1... | 7... | 6... | 4... |

Chorus:
| 1... | 7... | 6... | 4... |
| 1... | 7... | 6... | 4... |

Bridge:
| 1/3... | 4.(345)(567) | 1/3... | 4.(713) |
| 6... | 4... | 5... | 5... |

Interlude: 
| 1... | 7... | 6... | 5... | 8beat rock
| 4... | 3... | 2... | 5... |
| 1... | 7... | 6... | 5..3 |
| 4... | 3... | 2... | 5... |

Chorus:
| 1... | 7... | 6... | 4... |
| 1... | 7... | 6... | 4... |

Chorus:
| 1... | 5m... | 4... | 4m/6b... |
| 6... | 5m... | 4... | (6b5)(.4)(.3b)((2b-1-7b-6b)) |

Chorus:
| 1... | 5m... | 4... | 4m/6b... |
| 6... | 5m... | 4... | 4m... | syncope

Chorus: breakdown
| 1... | 5m... | 4... | 4m/6b... |
| 1... | 5m/1... | 4... | 4m... |`;
    return (
        <SongWrapper isWorship>
            <SongHeader song={worship} isWorship />
            <SongTransposerClient
                initialKey={worship.chord as string}
                songText={worshipText}
                songNumber={worshipNumber}
            />
        </SongWrapper>
    );
}
