import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "41";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK41() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Tuhan Yesus pengharapanku dalam
s'nang dan juga kesusahanku, tak pernah
'Kau tinggalkan aku, 'Kau sajalah
pertolonganku, 'Kau Rajaku, Panglimaku,
di medan p'rang m'lawan setan! O, selalu
'Kau b'ri 'ku harapan, menang atas
kesukaranku.

2. Bila 'ku penat serta lemah dan kecewa
jadi bahagianku, Tak 'da t'rang yang b'ri
pengharapan, s'muanya g'lap dan
menyedihkan, 'Ku berseru 'kan Tuhanku,
'ku didengar, ditolong-Nya! O, selalu 'Kau
tak 'kan tinggalkan, 'Kau sungguh
harapan jiwaku!

3. S'karang hidupku kuserahkan dalam
tangan Tuhan yang penuh kasih; 'Ku tak
akan kecewa lagi, Tuhan jaga dan
melindungkan; Ia Rajaku, harapanku,
kekuatanku dan Allahku! Ia mulia, Juru
Selamatku di atas segala-gala-Nya.
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
