import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "93";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK93() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Siapakah hendak mengikut Yesus
serta mendengar suara-Nya? Siapa
sedia turut p'rintah-Nya, serta
mengangkat salib-Nya?

Koor :
Siapa itu, siapa itu, siapa sedia
ikut Yesus? Siapa sedia turut p'rintah-
Nya, sekarang juga?

2. Siapakah hendak mengikut Yesus,
berjalan turut jejak Tuhan? Biar pun
b'rat dalam perjalanan, itu saja yang
berkenan.

3. Siapakah hendak mengikut Yesus,
memuliakan nama Tuhan; Beserta
orang yang t'lah ditebus, memujikan
kasih Tuhan?
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
