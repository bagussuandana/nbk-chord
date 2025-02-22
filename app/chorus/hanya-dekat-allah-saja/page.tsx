import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const chorusID = "hanya-dekat-allah-saja";
export const metadata: Metadata = {
    title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
    description: appConfig.choruses.find((s: any) => s.id === chorusID)
        .description,
};
export default function HanyaDekatAllahSaja() {
    const { choruses } = appConfig;
    const chorus = choruses.find((s: any) => s.id === chorusID);
    const chorusText = `
[Verse]
        D                    G
Hanya dekat Allah saja aku tenang
       D                    G
Dari padaNya lah keselamatanku
        G            G7
Hanya Dia gunung batuku
        C             Am
Hanya Dia kota bentengku
      D
Aku tidak akan goyah
           G
Selama lamanya
`;
    return (
        <SongWrapper isChorus>
            <SongHeader song={chorus} isChorus />
            <TransposerWrapper>
                <Transposer
                    initialKey={chorus.chord as string}
                    songText={chorusText}
                />
            </TransposerWrapper>
        </SongWrapper>
    );
}
