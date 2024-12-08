import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "you-are-good";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function YouAreGood() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
Intro
E    B/E    D/E    A/E
E    B/E    D/E    A/E
E    B/E    D/E    A/E
E    B/E    D/E    A/E
 
Verse
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever (People from every nation)
 
Pre-Chorus
A                 B/A
People from every nation and tongue
C/A                D/A
From generation to generation
 
Chorus
   E       B   D          A
We worship You Hallelujah Hallelujah
   E       B               D   A
We worship You for who You are
   E       B   D          A
We worship You Hallelujah Hallelujah
   E/G#    Bm7             C    D
We worship You for who You are
        Em7
You are good!
 
Instrumental
| Em7 / / / | / / F#m7/E / | x4
 
[Verse]
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever      (People from every nation)
 
Pre-Chorus
A                 B/A
People from every nation and tongue
C/A                D/A
From generation to generation
 
Chorus
   E       B   D          A
We worship You Hallelujah Hallelujah
   E       B               D   A
We worship You for who You are
   E       B   D          A
We worship You Hallelujah Hallelujah
   E/G#    Bm7             C    D
We worship You for who You are
 
You are good!
 
Bridge
Play this riff:

7--7--10--10--12
7--7--5--5--4
7--7--10--10--12
7--7--5--5--4
3-3---2

---4x-----

E E G G A
E E D D C#
E E G G A
E E D D C#
C C B
 
N.C.
You are good all the time, all the time You are good!
(repeat)
 
[Verse]
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever      (People from every nation)
 
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever
E
Lord You are good
         B/E               D/E   A/E
And Your mercy endureth forever      (People from every nation)

Pre-Chorus
A                 B/A
People from every nation and tongue
C/A                D/A
From generation to generation
 
Chorus
   E       B   D          A
We worship You Hallelujah Hallelujah
   E       B               D   A
We worship You for who You are
   E       B   D          A
We worship You Hallelujah Hallelujah
   E/G#    Bm7             C    D
We worship You for who You are

   E       B   D          A
We worship You Hallelujah Hallelujah
   E/G#    Bm7             C    D
We worship You for who You are

   E       B   D          A
We worship You Hallelujah Hallelujah
   E/G#    Bm7             C    D
We worship You for who You are

[Outro]
            C                D
For who You are, For who You are
            C               D
For who You are, For who You are
             E7#9
    You are Good
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
