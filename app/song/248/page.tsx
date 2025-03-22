import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import SoundCloudEmbed from "@/components/soundcloud-embed";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "248";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK248() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
G       G       C     G
Dengan kasih yang murni
Em    D       G   D
aku menyerahkan
G       G       C     G
s'mua kehidupanku
Em    D       G   D
kepada-Mu, Tuhan;
G       G       C     G
Ku dengar dan sadari
Em    D       G   D
panggilan-Mu perlu;
G       G       C     G
S'lalu siap sedia,
Em    D       G   
Tuhan ini aku.

Koor :
D  G            G
Ini aku, ya Tuhan,
D                   D
utuslah s'karang juga;
Em         G         C      Am
Pada kehendak-Mu 'ku berserah,
G        D        G
pakailah aku, Tuhan.

T'lah lama 'ku abaikan
panggilan Tuhanku,
banyak meninggal dunia
tanpa mengenal-Mu;
Tak lagi 'ku melawan
akan perintah-Mu,
banyak yang diperlukan,
bekerja bagi-Mu.

Dengarlah s'karang,
Tuhan yang aku janjikan,
kepada-mu 'ku s'rahkan
seg'nap kehidupan;
Kini 'ku bersedia
untuk m'layani-Mu,
meskipun 'ku dihina
aku turut s'lalu

`;
    return (
        <SongWrapper>
            <SongHeader song={song} />
            <SoundCloudEmbed trackUrl="https://soundcloud.com/gusti-bagus-suandana/bnbk-248" />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
