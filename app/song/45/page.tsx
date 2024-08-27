import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "45";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK45() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Yesus naik ke surga dan mengirim Roh-
Nya, supaya berdiam di hati hamba-Nya,
melengkapi umat Allah yang setia
kepada-Nya.

2. Yesus mau bertakhta dan b'ri
kedamaian, agar dosa kalah dan iblis
binasa; Bersoraklah, dan puji Dia Raja
segala raja.

3. Darah-Nya berkuasa menghapuskan
dosa, agar s'lalu kita hidup dengan benar;
Puji Yesus, Put'ra Allah yang telah naik ke
surga!

4. Roh Kudus menolong dan menguatkan
kita, agar hidup suci dan tak bercela,
hingga kita masuk surga dan tinggal
bersama Dia.
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
