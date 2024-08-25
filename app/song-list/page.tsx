import appConfig from "@/app.config";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: appConfig.song_list.title,
  description: appConfig.song_list.description,
};
export default function SongList() {
  return <div className="container">song list</div>;
}
