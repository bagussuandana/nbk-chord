import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "47";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK47() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Genaplah perjanjian-Mu , b'ri Roh
Kudus padaku, 'ku serahkan
seg'nap hidup, curahkanlah kuasa-
Mu ; Kirimlah Api Roh Kudus,
penuhilah hidupku.

2. Biarlah Api-Mu hanguskan yang
najis dan berdosa, supaya hatiku
suci dan jadi ka'bah Allah; Kirimlah
Api Roh Kudus, penuhilah hidupku.

3. Api itu memb'ranikan, hilangkan
kebimbangan, menghalaukan cinta
diri dalam p'layanan Tuhan;
Kirimlah Api Roh Kudus, penuhilah
hidupku.
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
