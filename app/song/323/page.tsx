import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import SoundCloudEmbed from "@/components/soundcloud-embed";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "323";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK323() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
G   Bm     Em      G7
Ku suka menc'ritakan
C   C    G     G
cerita hal surga,
D  D7    G     G
dari hal kemuliaan
G    Em         D
Yesus dan kasihNya,
Am       D       G  G
'ku suka menc'ritakan
Em   Em   B    B
cerita yang benar;
C     C        G        G
Ta'da lain yang memb'rikan
Am     D      G
kepuasan besar.

Koor :
D    D7    G    G7
Sampai masuk di surga
C              G
s'lalu 'ku mau berc'rita,
G  G7            C
c'rita itu yang lama,
D    D7          G    
Yesus dan kasih-Nya.

Ku suka menc'ritakan
cerita yang indah
dari s'gala khayalan
jauh lebih mulia;
Ku suka menc'ritakan
cerita-Nya itu,
yang dapat menghiburkan
jiwa yang berkeluh.

Ku suka menc'ritakan
pada yang b'lum kenal,
Tuhan dan kecintaan,
sahabat yang kekal;
K'lak di surga yang mulia
dengan nyanyian baru,
'ku mengulangi pula
c'rita lama itu.
`;

    return (
        <SongWrapper>
            <SongHeader song={song} />
            <SoundCloudEmbed trackUrl="https://soundcloud.com/gusti-bagus-suandana/bnbk-323" />
            <TransposerWrapper>
                <Transposer
                    initialKey={song.chord as string}
                    songText={songText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
