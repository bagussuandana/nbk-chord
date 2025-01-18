'use client';
import appConfig from '@/app.config';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, ListMusicIcon } from 'lucide-react';
import clsx from 'clsx';
import YoutubeThumbnail from './youtube-thumbnail';
import ShareDropdown from './share-dropdown';

type Props = {
  song: {
    id: string;
    title: string;
    description: string;
    chord: string;
    rhythm: string;
    tempo: string;
  };
  isWorship?: boolean;
  isChorus?: boolean;
};

const SongHeader = ({ song, isWorship = false, isChorus = false }: Props) => {
  const { tempos } = appConfig;
  const getTempoName = (bpm: number): string | null => {
    for (const tempo of tempos) {
      const [min, max] = tempo.bpm_range.split('-').map(Number);
      if (bpm >= min && bpm <= max) {
        return tempo.name;
      }
    }
    return null;
  };
  const tempoName = getTempoName(song?.tempo ? Number(song?.tempo) : 0);
  const songID = Number(song?.id);
  const savePrevUrl = () => {
    if (typeof window !== 'undefined') {
      if (typeof window !== 'undefined') {
        localStorage.setItem(
          'prevUrl',
          location.pathname.split('/').slice(-1)[0]
        );
      }
    }
  };
  return (
    <div>
      <h1 className='sr-only'>
        {song.title} {song?.description} {song.title.replace(/-/g, ' ')}
      </h1>
      <div className='flex w-full justify-between items-center'>
        <h1
          className={clsx(
            isWorship || isChorus ? 'capitalize' : 'uppercase',
            'font-bold'
          )}
        >
          {song.title}
        </h1>
        <Link href={'/song-list'}>
          <Button size={'icon'}>
            <ListMusicIcon />
          </Button>
        </Link>
      </div>
      <div
        className={clsx(
          isWorship || isChorus
            ? 'hidden'
            : 'flex w-full justify-between items-center mt-4'
        )}
      >
        {songID > 1 ? (
          <Link href={`/song/${songID - 1}`}>
            <Button variant={'outline'} onClick={savePrevUrl}>
              <ChevronLeft className='w-5 h-5 -ml-2' /> {`NBK ${songID - 1}`}
            </Button>
          </Link>
        ) : (
          <div></div>
        )}
        <Link href={`/song/${songID + 1}`}>
          <Button variant={'outline'} onClick={savePrevUrl}>
            {`NBK ${songID + 1}`}
            <ChevronRight className='w-5 h-5 -mr-2' />
          </Button>
        </Link>
      </div>

      <h2 className='capitalize'>
        {song?.description} <span></span>
      </h2>
      <div className='flex justify-between items-center'>
        {isWorship ? (
          <div className='flex flex-col'>
            <YoutubeThumbnail worship={song as any} />
            <p className='capitalize'>
              Chord : <span className='text-primary'>{song?.chord}</span>
            </p>
          </div>
        ) : isChorus ? (
          <p className='capitalize'>
            Chord : <span className='text-primary'>{song?.chord}</span>
          </p>
        ) : (
          <p className='capitalize'>
            Chord : <span className='text-primary'>{song?.chord}</span> |{' '}
            <span className='text-black dark:text-gray-100'>
              {song?.rhythm}
            </span>{' '}
            | {song?.tempo} | {tempoName}
          </p>
        )}
        <ShareDropdown />
      </div>
    </div>
  );
};

export default SongHeader;
