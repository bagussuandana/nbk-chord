import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "40";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK40() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Terpujilah nama Tuhan, malaikat
pun sembah, berikanlah mahkota-Nya
dan sembah, sembah, sembah,
sembah, pada-Nya.

Koor :
Tiada lain kes'lamatan dan tiada
lain sentosa, melainkan dengan darah-
Nya, darah Anak Allah.

2. Biar s'gala bangsa di dunia bersatu-
padulah; Memuji Raja Yang Esa dan
sembah, sembah, sembah, sembah
pada-Nya.

3. Semoga kita s'kali k'lak berkumpul
di sorga; Turut nyanyian para malak,
dan sembah, sembah, sembah,
sembah, pada-Nya.
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
