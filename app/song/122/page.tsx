import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "122";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK122() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
D    Ddim               Em
Bila menempuh g'lombang kehidupan,
A                        D
hatimu menjadi takut dan bimbang;
D    Ddim               Em
Coba hitung berkatmu sekalian,
A                        D
sungguh besar kasih dan kuasa Tuhan

Koor :
D    Ddim               Em
Coba hitung berkat s'kalian
A                        D
yang dib'ri s'lalu oleh Tuhan;
Bm    G      Em        F#m
Coba hitung s'mua jumlahnya,
Bm     F#m     G           Em  A   D
sungguhlah besar kasih dan kuasa-Nya!

Kalau hatimu kecil dan 'kau penat,
kar'na pikul salib yang terlalu b'rat,
hitung s'mua berkatmu, maka tentu,
Engkau akan puji Allahmu s'lalu

Kala 'kau melihat orang yang kaya,
ingat Tuhan hendak b'ri harta surga,
Berkat yang lebih berharga dari uang,
nanti 'kau mendapat dalam surga t'rang

Dalam peperangan tinggal setia,
penolongmu Allah yang Mahakuasa,
janganlah engkau takut, malaikat-Nya
menolong dan mengantar 'kau ke surga!
`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
