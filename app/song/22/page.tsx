import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "22";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK22() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Betapa mulia setiap hari Yesus
Tuhan aku miliki, Lepas dari s'gala
tekanan 'ku girang dan aman.

Koor :
Ku tak akan kuatir dalam
kesukaran! O, betapa indah dengan
Tuhan selalu dan bersatu!

2. S'bagai pagi hari yang indah
burung-burung ramai berkicau;
S'kalian alam memuji Tuhan,
bergirang p'nuh damai.

3. Hatiku penuh syukur, Tuhan,
kar'na Engkau Juru S'lamatku
Dalam menghadapi k'hidupan tak
tinggalkan aku!
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
