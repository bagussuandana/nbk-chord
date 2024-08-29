import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "96";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK96() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Sungguh ajaib kasih Tuhan Hu!
S'karang Tuhan memb'ri
k'ampunan bagimu.

Koor :
Sedang Tuhan masih
tunggu, datanglah! Sebelum
kasip waktumu, datanglah!

2. Mengapa'kau tolak kasih-Nya,
serta melupakan rahmat-Nya
bagimu?

3. 'Kau sendiri harus menghadap
kursi pengadilan, akui Dia Tuhan.
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
