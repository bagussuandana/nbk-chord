import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "39";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK39() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Terdengar di langit nama yang mulia
y ang hubungkan Allah dengan dunia; Ta
'da lagi yang lebih merdu bunyinya, akan
menyembuhkan yang hancur hatinya;
Kenalkah 'kau nama itu, nama Tuhan
Yesus, Juru Selamatku?

2. Selalu 'ku memuji nama Yesus, yang
datang ke dunia untuk menebus yang
cinta manusia, mati gantinya; Yang t'lah
b'li keampunan dengan darah-Nya; Puji,
puji nama Yesus, Yesus Juru S'lamatku,
Juru Penebus!

3. Nanti seg'nap alam sembah pada-Nya
dan m'laikat selalu puji cinta-Nya;
Moga kita juga berkumpul di surga akan
puji Yesus selama-lamanya; Yesus, Yesus
yang mah'kuasa, Tuhan atas malaikat dan
manusia.
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
