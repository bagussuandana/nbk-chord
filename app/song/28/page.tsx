import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "28";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK28() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Indah, nama-Nya Yesus
Tuhanku, indah, dan ajaib s'gala
karya-Nya, Indah, bagi hidupku!
Kini 'ku milik-Nya sampai
s'lamanya!

2. Mulia , s'gala kasih-Nya
padaku, mulia , kes'lamatan-Nya
bagiku, Mulia , pertolongan-Nya
bagi yang berdosa, diriku juga!

3. Syukur, Ia mau jadi Tuhanku,
syukur, mau pula jadi Sah'batku;
Syukur, bagi cinta-Nya yang
tidak terhingga, bagiku juga!
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
