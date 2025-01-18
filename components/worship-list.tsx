'use client';
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Worship } from '@/types/worship';
import WorshipCard from './worship-card';
import { Button } from './ui/button';
import { IdCard, ListTree, Rows4, X } from 'lucide-react';
import SongNotFound from './song-not-found';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {
  worships: Worship[];
};

const WorshipList = ({ worships }: Props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'card' | 'list'>('card');

  // Filter worships based on the search query
  const filteredWorships = worships.filter((worship: Worship) =>
    worship.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Group worships by the first letter of their title
  const groupedWorships = filteredWorships.reduce(
    (groups: Record<string, Worship[]>, worship: Worship) => {
      const firstLetter = worship.title.charAt(0).toUpperCase();
      groups[firstLetter] = groups[firstLetter] || [];
      groups[firstLetter].push(worship);
      return groups;
    },
    {}
  );

  return (
    <div>
      {/* Header */}
      <div className='mb-4 flex flex-row items-center gap-2 justify-between'>
        {/* Search Input */}
        <div className='relative w-full'>
          <Input
            type='text'
            placeholder='Search songs...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className='absolute top-2.5 right-3 text-gray-500 hover:text-gray-700'
            >
              <X className='w-5 h-5' />
            </button>
          )}
        </div>

        {/* View Mode Buttons */}
        <Button
          onClick={() => setViewMode('card')}
          size='icon'
          className={clsx(
            viewMode !== 'card'
              ? 'bg-secondary text-gray-300 hover:text-white'
              : '',
            'w-14'
          )}
        >
          <Rows4 />
        </Button>
        <Button
          onClick={() => setViewMode('list')}
          size='icon'
          className={clsx(
            viewMode !== 'list'
              ? 'bg-secondary text-gray-300 hover:text-white'
              : '',
            'w-14'
          )}
        >
          <ListTree />
        </Button>
      </div>

      {/* Content */}
      {viewMode === 'card' ? (
        <div className='grid gap-4'>
          {filteredWorships.length > 0 ? (
            filteredWorships.map((worship: Worship) => (
              <WorshipCard key={worship.id} worship={worship} />
            ))
          ) : (
            <SongNotFound text='No songs found.' />
          )}
        </div>
      ) : (
        <div className='grid gap-2'>
          {filteredWorships.length > 0 ? (
            <div>
              {Object.keys(groupedWorships)
                .sort()
                .map((letter) => (
                  <div key={letter}>
                    <h2 className='font-semibold'>{letter}</h2>
                    <ul className='ml-4 list-disc'>
                      {groupedWorships[letter].map((worship) => (
                        <li key={worship.id} className='text-gray-700'>
                          <Link
                            href={`/worship/${worship.id}`}
                            className='hover:underline no-underline'
                          >
                            {worship.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          ) : (
            <SongNotFound text='No songs found.' />
          )}
        </div>
      )}
    </div>
  );
};

export default WorshipList;
