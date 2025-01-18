import appConfig from '@/app.config';
import WorshipList from '@/components/worship-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: appConfig.worship_list.title,
  description: appConfig.worship_list.description,
};

export default function SongList() {
  const { worships } = appConfig;

  return (
    <>
      <div className='container mx-auto p-4'>
        <WorshipList worships={worships} />
      </div>
    </>
  );
}
