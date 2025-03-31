import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "roh-elkudus-roh-tuhan-holy-spirit-move-again";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function RohElkudusRohTuhanHolySpiritMoveAgain() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Intro] :
C     Fm
G: 3.4.5.4   323
C Fm
G: 3.4.5.5'
C Fm
G: 3.4.5.4   323
C Fm
G: 3.4.5.5'
 
C                  Fm
Roh Elkudus Roh Tuhan
C   C/B    C
Turun atasku
C                 F/C     
Roh Elkudus Roh Tuhan
G           C
Turun atasku
 
Intro :
C Fm
G: 4.5.5'.5.4.5.3
 
C                Fm/C
Roh Elkudus Roh Tuhan
C   C/B    C
Turun atasku
C                Fm/C  
Roh Elkudus Roh Tuhan
G          C
Turun atasku
 
 
Dm              Am               
Pecahkan, hancurkan,
 D/F#         G
bah’rui hidupku
C                 Fm/C
Roh Elkudus Roh Tuhan
C     G     C
turun atasku
 
Intro:
C Fm
G: 4.5.5'.5.4.5.3
C Fm
G: 4.5.5'.5.4.5.3

C                Fm/C
Roh Elkudus Roh Tuhan
C   C/B    C
Turun atasku
C                Fm/C  
Roh Elkudus Roh Tuhan
G          C
G: 345 6-7.1
Turun atasku
 
 
Dm              Am               
Pecahkan, hancurkan,
 D/F#         G
bah’rui hidupku
C                 F/C    
Roh Elkudus Roh Tuhan
G          C
turun atasku
 
 
Dm              Am               
Pecahkan, hancurkan,
 D/F#         G
bah’rui hidupku
C                 F/C    
Roh Elkudus Roh Tuhan
G          C
turun atasku
 
 
Dm              Am               
Pecahkan, hancurkan,
 D/F#         G
bah’rui hidupku
C                 F/C    
Roh Elkudus Roh Tuhan
G          C
turun atasku
 
Intro :
C     Fm
G: 3.4.5.4   323
C Fm
G: 3.4.5.5
C Fm
G: 3.4.5.4   323
C Fm
G: 3.4.5.5'
 
 
C          F       
Come Holy Spirit
C                 Dm
I need Your presence
          G             
Fill my heart
          C       Fm/C
with Your love
C         F       
Come Holy Spirit
C                  Dm
Come with Your power
          G            
Touch my life
        F       G
once again
 
 
C                  Fm/C     
Holy Spirit move again,
C     Am     Dm           Em  
Holy Spirit move again
 
            F        Dm           
Holy Spirit move again,
Am                    G
Come and fill my heart
 
 
C                  Fm/C     
Holy Spirit move again,
C     Am     Dm           Em  
Holy Spirit move again
 
            F        Dm           
Holy Spirit move again,
Am                    G
Come and fill my heart
 
 
 
C          F       
Come Holy Spirit
C                 Dm
I need Your presence
          G             
Fill my heart
          C       Fm/C
with Your love
C         F       
Come Holy Spirit
C                  Dm
Come with Your power
          G            
Touch my life
        F       G
once again
 
 
 
C                  Fm/C     
Holy Spirit move again,
C     Am     Dm           Em  
Holy Spirit move again
 
            F        Dm           
Holy Spirit move again,
Am                    G
Come and fill my heart
 
 
 
 
C                  Fm/C     
Holy Spirit move again,
C     Am     Dm           Em  
Holy Spirit move again
 
            F        Dm           
Holy Spirit move again,
Am                    G  C  Fm/C
Come and fill my heart
 
 
C              Fm/C       
Roh Kudus Bekerja,
C      Am         Dm     Em 
dengan kuasa kasihMu
 
      F          Dm           
Kurindu hadiratMu
  Am      G
memenuhiku
 
C             Fm/C    
Roh Kudus bekerja,
C      Am         Dm     Em 
dengan kuasa kasihMu
      F           Dm          
Kurindu hadiratMu
Am         G  C  
memenuhiku
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
