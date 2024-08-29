import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "90";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK90() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Para p'rintis menyanyikan: "Tuhan
beserta kita!". M'reka berp'rang bagi
Allah dengan tujuan suci. Mereka tak
pernah takut, menyanyi dengan b'rani:
"Tuhanlah beserta kita,Kristus adalah
Raja."

2. Betapa besar teladan yang telah
diwariskan, masih banyak peperangan
harus kita hadapi; Dengah b'rani kita
berp'rang dan selalu bernyanyi:
"Tuhanlah beserta kita, Kristus adalah
Raja".

3. Tinggikanlah salib Yesus,
berp'ranglah dengan b'rani, kabarkan
Injil Kristus ke mana kita pergi; Jangan
tunggu majulah t'rus, dengan iman
menyanyi: "Tuhanlah beserta kita,
Kristus adalah Raja".
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
