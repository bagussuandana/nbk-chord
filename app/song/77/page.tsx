import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "77";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK77() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Gugur bunga yang indah, kemudaan
lalulah, hilang kesuka'n dunia, jagalah!
Ingat bahwa 'kau juga harus tinggalkan
dunia menghadap takhta Allah: Tobatlah!

Koor :
Tobatlah, tobatlah! sedang Tuhan
masih panggil, tobatlah! Waktumu cepat
lalu, dan nanti 'kau berseru: "sudah kasip
waktuku!", "Tobatlah!".

2. S'perti dalam dunia, barang yang amat
mulia hilang dan lenyap s'mua, ingatlah!
Hidupmu cepat lalu, nanti kasip waktumu,
Tuhan masih berseru: "Tobatlah!"

3. Pilihlah di antara s'lamat atau
sengsara, surga atau neraka,pilihlah!
S'lamatmu tersedia oleh Yesus Yang
Kuasa , Juru Selamat dunia , tobatlah!
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
