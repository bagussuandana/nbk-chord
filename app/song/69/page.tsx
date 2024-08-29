import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const songID = "69";
export const metadata: Metadata = {
    title: appConfig.songs.find((s: any) => s.id === songID).title,
    description: appConfig.songs.find((s: any) => s.id === songID).description,
};
export default function NBK69() {
    const { songs } = appConfig;
    const song = songs.find((s: any) => s.id === songID);
    const songText = `
1. Betapa besar kecintaan Tuhan,
turun dari sorga, datang ke dunia ;
Manusia dengan Allah diperdamaikan
oleh kurban Anak Allah.

Koor :
Sungai rahmat ada dekat,
menghilangkan dosa; O, dengarlah
kabar mulia tentang s'lamat dan
sentosa!

2. Tuhanku Yesus dengan hati sedih,
berlutut dalam taman Getsemani, di
Bukit Golgota mengalir darah-Nya
untuk menghilangkan dosa.

3. Darah-Nya tetap membasuh jiwaku,
kuasa -Nya sungguh bersihkan hatiku,
'ku diampuni, dan segala dosaku
hilang dalam sungai itu.
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
