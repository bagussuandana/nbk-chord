import appConfig from '@/app.config';
import ChorusList from '@/components/chorus-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: appConfig.chorus_list.title,
  description: appConfig.chorus_list.description,
};

export default function SongList() {
  const { choruses } = appConfig;

  return (
    <>
      <div className='container mx-auto p-4'>
        <ChorusList choruses={choruses} />
      </div>
    </>
  );
}
