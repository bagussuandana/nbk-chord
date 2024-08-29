import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "94";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK94() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Siapa pun mendengar, serukanlah!
Kabar kes'lamatan s'luruh dunia;
Masyhurkan s'karang kabar mulia, siapa
pun boleh datang.

Koor :
Siapa pun yang mau, siapa pun
yang mau , kabarkan s'lamat supaya
orang tahu, Bapa yang pengasih jemput
'kau pulang, siapa pun boleh datang.

2. Siapa pun bers'dia datang lekas,
pintu s'dang terbuka masuklah bebas;
Hanya Tuhan Yesus, jalan pelepas, siapa
pun boleh datang.

3. Siapa pun yang mau , tetap janji-Nya,
siapa pun yang mau , 'kan
memperolehnya, siapa pun yang mau
hidup selamanya, siapa pun boleh
datang.
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
