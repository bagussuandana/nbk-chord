import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongTransposerClient from "@/components/song-transposer-client";
import SongWrapper from "@/components/song-wrapper";
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
    const worshipNumber = `Intro:
| 6..5 | ...5 | 4#... | 4..3 | 
| 6..5 | ...5 | 4#... | 4..3 | 
| 6... | 5... | 4#... | 4..3 | 
| 6... | 5... | 4#... | 4... | 4... |

Verse1:
| 6... | 6... | 4... | 4... |
| 2sus... | 2M... | 4... | 4... |
| 6... | 6... | 4... | 4... |
| 2sus... | 2M... |

Pre-chorus:
| 4... | 4... | 6... | 6... |
| 2... | 3... | 4... | 4... |

Chorus:
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6.5. | 4#... | 4#... |

Intro:
| 6..5 | ...5 | 4#... | 4..3 | 

Verse2:
| 6... | 6... | 4... | 4... |
| 2sus... | 2M... | 4... | 4.5. | syncop
| 6... | 6... | 1... | 1... |
| 2sus... | 2M... |

Pre-chorus:
| 4... | 4... | 6... | 6... | drum triplet
| 2... | 3... | 4... | 4... |

Chorus:
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6.5. | 2M... | 2M... |

Interlude:
| 6... | 6... | 1... | 1... |
| 4#... | 4#... | 4... | 4... |
| 6... | 6... | 5... | 5... |
| 4#... | 4#... | 4... | 4... | tutti 32175
| 6... | 6.1. | 4... | 4.2. |
| 6... | 1... | 4... | 2... |
| 6... | 1... | 4... | 2... |

Chorus:
| 1... | 5... | 6... | 4... | breakdown
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6... | 4... |full
| 1... | 5... | 6.5. | 2M... |

Chorus:
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6... | 4... | syncop
| 1... | 5... | 6... | 4... |
| 1... | 5... | 6.5. | 2M... |

Intro:
| 6..5 | ...5 | 4#... | 4... |

*ending tutti: 456 356`;
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
