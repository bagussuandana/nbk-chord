import appConfig from "@/app.config";
import WorshipCard from "@/components/worship-card";
import { Worship } from "@/types/worship";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: appConfig.worship_list.title,
    description: appConfig.worship_list.description,
};

export default function SongList() {
    const { worships } = appConfig;
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="grid gap-4">
                    {worships.map((worship: Worship) => (
                        <WorshipCard key={worship.id} worship={worship} />
                    ))}
                </div>
            </div>
        </>
    );
}
