import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "4";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK4() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Cinta Allah sungguh ajaib kar'na Ia sedia,
mendengar bisikan hati, menghapus air mata; dan
meski 'ku tak mengerti cinta-Nya yang besar, di
tangan-Nya 'ku berlindung, pada-Nya 'ku sandar.

Koor :
Cinta Allah ajaib , Cinta Allah ajaib ; B'rikan
Anak-Nya supaya mati gantiku, cinta Allah ajaib .

2. Cinta Allah sungguh ajaib , mengatur langkahku,
jika datang kebimbangan, 'ku pegang tangan-Nya;
Kasih-Nya telah lenyapkan s'mua ketakutan, kini
jelas 'ku mendengar suara-Nya yang merdu.

3. Cinta Allah sungguh ajaib , men'rangi jalanku,
kini aku merasakan hadirat-Nya s'lalu; Bapaku tak
pernah minta hadiah berharga, tapi agar
mengasihi dan m'layani s'lalu.
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
