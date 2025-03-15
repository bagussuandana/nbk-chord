import appConfig from "@/app.config";
import SongHeader from "@/components/song-header";
import SongWrapper from "@/components/song-wrapper";
import TransposerWrapper from "@/components/transposer-wrapper";
import Transposer from "@/lib/transposer";
import { Metadata } from "next";

const chorusID =
    "kujalan-dengan-yesus-tiap-hari-medley-jalan-di-trang-matahari";
export const metadata: Metadata = {
    title: appConfig.choruses.find((s: any) => s.id === chorusID).title,
    description: appConfig.choruses.find((s: any) => s.id === chorusID)
        .description,
};
export default function KujalanDenganYesusTiapHariMedleyJalanDiTrangMatahari() {
    const { choruses } = appConfig;
    const chorus = choruses.find((s: any) => s.id === chorusID);
    const chorusText = `
[Intro] 

A                         Bm
Ku jalan dengan Yesus tiap hari
E                     A
sampai rupaku s’perti Dia
A                         Bm
Serta turut nyanyian orang suci
E                         A
dalam Surga, rumah yang mulia
D                     A      F#m
Pagi‐pagi Ia tak akan tinggalkan,
Bm           B             E
tak sendirian aku waktu siang
A                      Bm
Apalagi nanti kalau malam,
E                      A
g’lap diubahkan‐Nya jadi t’rang


A.. A... A... Bm...E... Bm... E... A....
A... D.. D C#m Bm... E....

Jalan di T’rang matahari,
dalam t’rang Tuhan
Maju saja dengan rela,
tentulah jadi senang
Jangan pikir hal jalanmu,
Jangan takut orang lain
Jalan di t’rang matahari,
dalam t’rang Tuhan
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
