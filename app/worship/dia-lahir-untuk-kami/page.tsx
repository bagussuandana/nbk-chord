import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "dia-lahir-untuk-kami";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function DiaLahirUntukKami() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
    C            C7       F           C
Dia lahir untuk kami, Dia mati untuk kami
    Am            D7       A# G
Dia bangkit untuk kami semua
    C          C7       F          C
Dia itu Tuhan kami, Dia itu Allah kami
    C    Am    Dm    G     C
Dia Raja di atas s'gala raja

Reff:
    F                     C           Em
Dia itu Firman Allah yang turun ke bumi
     Am        D7           A# G
Yang jadi sama dengan manusia
    C            C7       F            C
Dia Yesus sobat kami, Dia Yesus Tuhan kami
       C     Am    Dm    G    C
Sang Penebus Jurus'lamat dunia
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
