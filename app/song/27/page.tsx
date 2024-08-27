import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "27";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK27() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Imanku pada Tuhan itu dasar hidupku,
menjadikan 'ku menang s'lalu! Apa juga yang
datang, dengan seru menyerang, aku tidak
akan digoyahkan!

Meskipun banyak kesukaran, aneka rintangan
datang kepadaku, aku tahu Tuhan tak 'kan
tinggalkan bila 'ku s'tia selalu;
Sebentar aku pasti bersoraklah, kar'na Tuhan
berp'rang bagi diriku; Ku 'kan menang,
menang, menang, s,lalu ,selamanya!

2. Sandar t'rus pada Tuhan dalam seg'nap
hidupmu, jangan lengah dan jangan bimbang;
Bila kita bersatu dengan Tuhan selalu tak 'da
kuasa dapat mengalahkan!
Iblis akan coba menggoda dengan kesukaran,
berbagai bahaya, yakinlah Tuhan tak'kan
tinggalkan bagi yang harap pada-Nya;
Bertahan t'rus mahkota tersedia oleh
Tuhanku dalam kemulian-Nya! Haleluya, bagi
Yesus, Tuhan, selamanya!
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
