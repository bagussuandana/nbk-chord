import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const chorusID = "besarkan-nama-tuhan";
export const metadata: Metadata = {
    title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
    description: appConfig.choruses.find((s: any) => s.id === chorusID)
        .description,
};
export default function BesarkanNamaTuhan() {
    const { choruses } = appConfig;
    const chorus = choruses.find((s: any) => s.id === chorusID);
    const chorusText = `
[Verse]
G                   C         G
Besarkan nama Tuhan pujilah Dia
G                  Am         D
KemurahanNya besar tiada terbilang
G                   C          G
Aku tak dapat balas besar kasihNya
Am      D          G
Oh besarkanlah namaNya

[Chorus]
D                G
Tuhan yang ajaib Tuhan yang kuasa
D                        G
Tuhan yang menolong hidupku
D                G             Em
Tuhan yang ajaib Tuhan yang kuasa
Am       D         G
Jiwaku ditebus olehNya
`;
    return (
        <SongWrapper isChorus>
            <SongHeader song={chorus} isChorus />
            <TransposerWrapper>
                <Transposer
                    initialKey={chorus.chord as string}
                    songText={chorusText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
