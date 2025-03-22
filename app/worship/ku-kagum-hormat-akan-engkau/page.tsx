import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const worshipID = "ku-kagum-hormat-akan-engkau";
export const metadata: Metadata = {
    title: appConfig.worships.find((s: any) => s.id === worshipID).title,
    description: appConfig.worships.find((s: any) => s.id === worshipID)
        .description,
};
export default function KuKagumHormatAkanEngkau() {
    const { worships } = appConfig;
    const worship = worships.find((s: any) => s.id === worshipID);
    const worshipText = `
[Verse]
        G
Kau Sungguh Indah Tiada Taranya
    C     D     G    D
Sungguh Menakjubkan
    G             G
Sungguh Ajaib Tuk Dimengerti
  C              A     D
Lebih Dari S'mua Yang Ada
 
      Em             D
HikmatMu Tiada Terselami
     C    Am         D
KasihMu Dalam Tak Terduga
        G
Kau Sungguh Indah Tiada Taranya
    C     D     G   D
Mulia Dan Berkuasa
 
[Chorus]
     G       Bm  C
Ku Kagum Hormat Akan Engkau
     G       Bm  C
Ku Kagum Hormat Akan Engkau
    Em         B
Kau Allah Yang Layak
Em        C
Di - pu - ji
     Am   D      G
Ku Kagum Akan Engkau
 
[Verse]
        G
Kau Sungguh Indah Tiada Taranya
    C     D     G    D
Sungguh Menakjubkan
    G             G
Sungguh Ajaib Tuk Dimengerti
  C              A     D
Lebih Dari S'mua Yang Ada
 
      Em             D
HikmatMu Tiada Terselami
     C    Am         D
KasihMu Dalam Tak Terduga
        G
Kau Sungguh Indah Tiada Taranya
    C     D     G   D
Mulia Dan Berkuasa
 
[Chorus]
     G       Bm  C
Ku Kagum Hormat Akan Engkau
     G       Bm  C
Ku Kagum Hormat Akan Engkau
    Em         B
Kau Allah Yang Layak
Em        C
Di - pu - ji
     Am   D      G
Ku Kagum Akan Engkau
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
